const usernameEl = document.getElementById('username');
usernameEl.value = '';

function loadRepos() {
	const username = usernameEl.value;
	const host = `https://api.github.com/users/${username}/repos`;

	const reposDiv = document.getElementById('repos');

	fetch(host)
		.then(response => {
			console.log(response);
			if (response.ok == false) {
				response.json().catch(err => {
					throw err;
				})
			}
			return response.json()
		})
		.then(data => {
			usernameEl.value = '';
			reposDiv.innerHTML = '';
			for (let obj of data) {
				const li = document.createElement('li');
				li.innerHTML = `
					<li>
						<a href="${obj.html_url}">
							${obj.full_name}
						</a>
					</li>`;
				reposDiv.appendChild(li);
			}
		}).catch(err => {
			reposDiv.innerHTML = `
			<li>
			<a href="{repo.html_url}">
			{repo.full_name}
			</a>
			</li>`;
			alert('Invalid username!')
		})
}