import { ApiService } from './api.js';

const api = new ApiService();

type Donation = {
    postId: string;
};

const host = 'http://localhost:3030';

const endpoints = {
    donate: '/data/donations',
    donationsForPost: (postId: string): string => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    donationForPostFromUser: (postId: string, userId: string): string =>
        `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export class DonationService {
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
