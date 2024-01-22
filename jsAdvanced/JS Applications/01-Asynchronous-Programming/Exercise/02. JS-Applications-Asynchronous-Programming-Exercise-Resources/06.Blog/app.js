function attachEvents() {

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const postsEl = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostsBtn.addEventListener('click', viewPosts);

    const posts = [];

    async function loadPosts() {

        try {
            const postsResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');

            if (!postsResponse.ok) throw new Error();

            const postsData = await postsResponse.json();

            postsEl.innerHTML = '';
            for (let value of Object.values(postsData)) {
                const option = document.createElement('option');
                option.setAttribute('value', value.id);
                option.textContent = value.title;
                postsEl.appendChild(option);
                posts.push({ title: value.title, body: value.body });
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function viewPosts() {

        try {
            const selectedOption = Array.from(document.querySelectorAll('option')).find(option => option.selected);
            if (selectedOption == undefined) return;

            const commentsResponse = await fetch(`http://localhost:3030/jsonstore/blog/comments`);

            if (!commentsResponse.ok) throw new Error();

            const commentsData = await commentsResponse.json();

            const body = posts.find(post => post.title == selectedOption.textContent).body;
            postTitle.textContent = selectedOption.textContent;
            postBody.textContent = body;

            postComments.innerHTML = '';
            for (let comment in commentsData) {
                if (commentsData[comment].postId == selectedOption.getAttribute('value')) {
                    const li = document.createElement('li');
                    li.id = commentsData[comment].id;
                    li.textContent = commentsData[comment].text;
                    postComments.appendChild(li);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

attachEvents();