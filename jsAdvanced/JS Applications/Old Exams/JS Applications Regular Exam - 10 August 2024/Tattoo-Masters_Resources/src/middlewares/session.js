import { getUserData } from '../utils/userHelper.js';

export function addSession() {
    return function (ctx, next) {
        ctx.user = getUserData();
        next();
    };
}
