import { get, post, put } from './api.js';
import { notOwnerService, ownerService } from './members.js';
// import { approveMember, sendMembershipRequest } from './members.js';

const host = 'http://localhost:3030';

const endpoints = {
    teams: '/data/teams',
    teamById: (teamId) => `/data/teams/${teamId}`,
    allMembers: '/data/members?where=status%3D%22member%22',
    teamMemberships: (teamId) => `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`,
    myTeamMemberships: (userId) =>
        `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`,
    membersInParticularTeams: (...teamIds) =>
        '/data/members?where=' + encodeURIComponent(`teamId IN ${teamIds.map((id) => `"${id}"`).join(',')} AND status="member"`),
};

export const createTeam = async (name, logoUrl, description) => {
    const team = await post(host + endpoints.teams, { name, logoUrl, description });

    //creating a team does not automatically add the creator to the team,
    //so we send a membership request and approve it
    const memberData = await notOwnerService.sendMembershipRequest(team._id);
    await ownerService.approveMember(memberData._id);

    return team;
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

export const getMyTeamMemberShips = async (userId) => {
    return await get(host + endpoints.myTeamMemberships(userId));
};
