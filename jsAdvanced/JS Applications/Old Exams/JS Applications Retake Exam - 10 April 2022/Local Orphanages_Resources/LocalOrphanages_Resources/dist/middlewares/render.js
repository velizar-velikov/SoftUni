import { render } from '../lib/lib.js';
import userHelper from '../utils/userHelper.js';
import { layoutTemplate } from '../views/layoutTemplate.js';
export function renderer(root) {
    return function (ctx, next) {
        ctx.render = renderView;
        next();
    };
    function renderView(content) {
        const userData = userHelper.getUserData();
        render(layoutTemplate(userData, content), root);
    }
}
