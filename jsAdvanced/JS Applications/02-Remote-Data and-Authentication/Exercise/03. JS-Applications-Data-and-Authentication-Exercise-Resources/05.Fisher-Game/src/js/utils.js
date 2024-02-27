const user = JSON.parse(sessionStorage.getItem('user'));

export function showNav() {

    document.getElementById('user').style.display = user ? 'block' : 'none';
    document.getElementById('guest').style.display = user ? 'none' : 'block';
    document.querySelector('p.email span').textContent = user ? user.email : 'guest';
}

export function disableOrEnableAddingCatch() {

    [...document.querySelectorAll('#addForm input')].forEach(input => input.disabled = user ? false : true);
    document.querySelector('button.add').disabled = user ? false : true;
}