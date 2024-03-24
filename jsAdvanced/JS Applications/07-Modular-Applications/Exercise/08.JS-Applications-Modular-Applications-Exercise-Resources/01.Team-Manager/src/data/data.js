import { getUserData } from '../utils/userHelper.js';
import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    teams: '/data/teams',
    teamById: (teamId) => `/data/teams/${teamId}`,
    allMembers: '/data/members?where=status%3D%22member%22',
    members: '/data/members',
    memberById: (id) => `/data/members/${id}`,
    teamMemberships: (teamId) => `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`,
    myTeamMemberships: (userId) =>
        `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`,
    membersInParticularTeams: (...teamIds) =>
        '/data/members?where=' + encodeURIComponent(`teamId IN ${teamIds.map((id) => `"${id}"`).join(',')} AND status="member"`),
};

export const getAllMembers = async () => {
    return await get(host + endpoints.allMembers);
};

window.getAllMembers = getAllMembers;

export const getMemberById = async (memberId) => {
    return await get(host + endpoints.memberById(memberId));
};

export const sendMembershipRequest = async (teamId) => {
    return await post(host + endpoints.members, { teamId });
};

export const approveMember = async (memberId) => {
    const memberData = await getMemberById(memberId);

    //get member, change status from pending to member end send update request
    memberData.status = 'member';
    await put(host + endpoints.memberById(memberId), memberData);
};

export const createTeam = async (name, logoUrl, description) => {
    const teamData = await post(host + endpoints.teams, { name, logoUrl, description });
    // const userData = getUserData();

    //creating a team does not automatically add the creator to the team,
    //so we send a membership request and approve it
    const memberData = await sendMembershipRequest(teamData._ownerId);
    await approveMember(memberData._id);

    return teamData;
};

export const getAllTeams = async () => {
    return await get(host + endpoints.teams);
};

export const editTeam = async (teamId, name, logoUrl, description) => {
    return await put(host + endpoints.teamById(teamId), { name, logoUrl, description });
};

export const getTeamById = async (teamId) => {
    return await get(host + endpoints.teamById(teamId));
};

/**
 * Returns all memberships for a team - both members and pending requests
 * @param {String} teamId
 * @returns {Promise<Object>}
 */
export const getAllTeamMemberships = async (teamId) => {
    return await get(host + endpoints.teamMemberships(teamId));
};

//user
export const cancelRequest = async (memberId) => {
    await del(host + endpoints.memberById(memberId));
};

//user
export const leaveTeam = async (memberId) => {
    await del(host + endpoints.memberById(memberId));
};

//team owner
export const declineRequest = async (memberId) => {
    await del(host + endpoints.memberById(memberId));
};

//team owner
export const removeMember = async (memberId) => {
    await del(host + endpoints.memberById(memberId));
};

export const getMyTeamMemberShips = async (userId) => {
    return await get(host + endpoints.myTeamMemberships(userId));
};
