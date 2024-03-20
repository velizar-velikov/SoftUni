import { page } from '../lib/lib.js';

export function addGoTo(ctx, next) {
    ctx.goTo = page.redirect;
    next();
}
