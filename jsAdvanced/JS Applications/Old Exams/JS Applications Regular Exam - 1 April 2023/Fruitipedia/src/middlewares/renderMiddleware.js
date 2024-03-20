import { render } from '../lib/lib.js';
import { getUserData } from '../utils/userHelper.js';
import { layoutTemplate } from '../views/layout.js';

const root = document.getElementById('wrapper');

export function addRender(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}