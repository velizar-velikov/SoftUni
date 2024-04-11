import { render } from '../lib/lib.js';
import { getUserData } from '../utils/userHelper.js';
import { layoutTemplate } from '../views/layoutTemplate.js';

export function renderer(root: HTMLElement): Function {
    return function (ctx, next) {
        ctx.render = renderView;
        next();
    };

    function renderView(content: HTMLTemplateElement) {
        const userData = getUserData();
        render(layoutTemplate(userData, content), root);
    }
}
