import userHelper from '../utils/userHelper.js';

export function session() {
    return function (ctx, next) {
        ctx.user = userHelper.getUserData();
        next();
    };
}
