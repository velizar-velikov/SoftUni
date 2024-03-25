import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    allMembers: '/data/members?where=status%3D%22member%22',
    members: '/data/members',
    memberById: (id) => `/data/members/${id}`,
};

export const getAllMembers = async () => {
    return await get(host + endpoints.allMembers);
};

export const getMemberById = async (memberId) => {
    return await get(host + endpoints.memberById(memberId));
};

export const notOwnerService = {
    async sendMembershipRequest(teamId) {
        return await post(host + endpoints.members, { teamId });
    },

    async cancelRequest(memberId) {
        await del(host + endpoints.memberById(memberId));
    },

    async leaveTeam(memberId) {
        await del(host + endpoints.memberById(memberId));
    },
};

export const ownerService = {
    //team owner
    async approveMember(memberId) {
        const memberData = await getMemberById(memberId);

        //get member, change status from pending to member end send update request
        memberData.status = 'member';
        await put(host + endpoints.memberById(memberId), memberData);
    },

    async declineRequest(memberId) {
        await del(host + endpoints.memberById(memberId));
    },

    async removeMember(memberId) {
        await del(host + endpoints.memberById(memberId));
    },
};
