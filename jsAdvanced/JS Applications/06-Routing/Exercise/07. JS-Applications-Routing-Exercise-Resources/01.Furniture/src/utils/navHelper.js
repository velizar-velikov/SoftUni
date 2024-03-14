export function changeNavLinkColour(id) {
    document.querySelectorAll('nav a').forEach((a) => (a.style.backgroundColor = '#010101'));
    document.getElementById(id).style.backgroundColor = '#6c8b47';
}
