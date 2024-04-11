import api from './api.js';
const host = 'http://localhost:3030';
const endpoints = {
    donate: '/data/donations',
    donationsForPost: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    donationForPostFromUser: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};
// implementing the generic interface
class DonationService {
    async makeDonation(data) {
        return await api.post(host + endpoints.donate, data);
    }
    async getTotalDonationsForPost(postId) {
        return await api.get(host + endpoints.donationsForPost(postId));
    }
    async hasUserDonatedForPost(postId, userId) {
        const response = await api.get(host + endpoints.donationForPostFromUser(postId, userId));
        return Boolean(response);
    }
}
export default new DonationService();
