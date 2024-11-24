console.log('loaded app');

const icon = document.querySelector('.fa-solid.fa-plus');

const filterContainer = document.querySelector('.filter-container');
filterContainer.style.display = 'none';

icon.addEventListener('click', (event) => {
    if (icon.className == 'fa-solid fa-plus') {
        icon.className = 'fa-solid fa-minus';
        filterContainer.style.display = 'block';
    } else {
        icon.className = 'fa-solid fa-plus';
        filterContainer.style.display = 'none';
    }
});
