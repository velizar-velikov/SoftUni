import api from './api.js';

type Donation = {
    postId: string;
};

interface DonationsEndpoints {
    donate: string;
    donationsForPost(postId: string): string;
    donationForPostFromUser(postId: string, userId: string): string;
}

// generic interface
interface DonationServiceType<T> {
    makeDonation(data: T): Promise<T>;
    getTotalDonationsForPost(postId: string): Promise<number>;
    hasUserDonatedForPost(postId: string, userId: string): Promise<boolean>;
}

const host = 'http://localhost:3030';

const endpoints: DonationsEndpoints = {
    donate: '/data/donations',
    donationsForPost: (postId: string): string => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    donationForPostFromUser: (postId: string, userId: string): string =>
        `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

// implementing the generic interface
class DonationService implements DonationServiceType<Donation> {
    async makeDonation(data: Donation) {
        return await api.post(host + endpoints.donate, data);
    }

    async getTotalDonationsForPost(postId: string): Promise<number> {
        return await api.get(host + endpoints.donationsForPost(postId));
    }

    async hasUserDonatedForPost(postId: string, userId: string): Promise<boolean> {
        const response = await api.get(host + endpoints.donationForPostFromUser(postId, userId));

        return Boolean(response);
    }
}

export default new DonationService();
