

window.addEventListener('load', onLoad);

function onLoad() {
    [...document.querySelectorAll('section[id*="year-"]')].forEach(section => section.style.display = 'none');
    [...document.querySelectorAll('section[id*="month-"]')].forEach(section => section.style.display = 'none');
    [...document.querySelectorAll('.day')].forEach(cell => cell.addEventListener('click', goIn));
}

const months = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
}

let year;
let month;
let monthNumber;

function goIn(event) {

    const currentTarget = event.currentTarget;
    const section = currentTarget.parentElement.parentElement.parentElement.parentElement
    if (section.className == 'daysCalendar') {
        return;

    } else if (section.className == 'yearsCalendar') {
        year = currentTarget.children[0].textContent;
        section.style.display = 'none';
        document.querySelector(`#year-${year}`).style.display = 'block';
    } else if (section.className == 'monthCalendar') {
        year = section.querySelector('caption').textContent;
        month = currentTarget.children[0].textContent;
        monthNumber = months[month];

        section.style.display = 'none';
        document.querySelector(`#month-${year}-${monthNumber}`).style.display = 'block';
    }

    const captions = document.querySelectorAll('caption');
    [...captions].slice(1).forEach(caption => caption.addEventListener('click', goBack));

    function goBack(event) {

        const caption = event.currentTarget;
        const section = caption.parentElement.parentElement;
        console.log(section);

        if (section.className == 'daysCalendar') {
            section.style.display = 'none';
            document.querySelector(`#year-${year}`).style.display = 'block';
        } else if (section.className == 'monthCalendar') {
            section.style.display = 'none';
            document.getElementById('years').style.display = 'block';
        }
    }
}

