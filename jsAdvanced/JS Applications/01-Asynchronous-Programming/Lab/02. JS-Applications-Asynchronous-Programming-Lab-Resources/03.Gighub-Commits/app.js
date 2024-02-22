const usernameEl = document.getElementById('username');
const repoEl = document.getElementById('repo');
// usernameEl.value = '';
// repoEl.value = '';

function loadCommits() {
    const commitsDiv = document.getElementById('commits');

    const username = usernameEl.value;
    const repo = repoEl.value;

    if (username == '' || repo == '') {
        alert('Username and repository are required!');
        return;
    }

    const host = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(host)
        .then(response => {
            if (response.ok == false) {
                const err = response.json();
                err.status = response.status;
                throw err;
            }
            return response.json()
        })
        .then(data => {
            usernameEl.value = '';
            repoEl.value = '';
            commitsDiv.innerHTML = '';
            for (let obj of data) {
                const li = document.createElement('li');
                li.textContent = `${obj.commit.author.name}: ${obj.commit.message}`;
                commitsDiv.appendChild(li);
            }
        }).catch(errResponse => {
            errResponse.then(err => {
                const li = document.createElement('li');
                li.textContent = `Error: ${errResponse.status} (Not Found)`;
                commitsDiv.appendChild(li);
                throw err;
            }).catch(err => {
                debugger
                throw err;
            })
        })
}