
const root = document.getElementById('root');

const section = document.getElementById('search');
section.remove();

let context = {};

export function showSearchView(ctx) {
    context = ctx;
    context.render(root, section);
}