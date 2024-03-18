import { html, render as renderer } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import page from '../node_modules/page/page.mjs';

const root = document.querySelector('main');

function render(view) {
    renderer(view, root);
}

export { html, render, classMap, page };
