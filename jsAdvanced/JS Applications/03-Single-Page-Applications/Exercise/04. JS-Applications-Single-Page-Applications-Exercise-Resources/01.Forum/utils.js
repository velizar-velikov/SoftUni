import { createFullPost } from "./createFullPost.js";

const host = 'http://localhost:3030/jsonstore/collections/myboard/';

export async function loadCommentsInHomeView() {
    const response = await fetch(`${host}posts`);
    const postsData = await response.json();

    for (let postData of Object.values(postsData)) {
        document.querySelector('.topic-title').appendChild(createPostPreview(postData));
    }
}


export async function createPost(event) {
    event.preventDefault();

    const topicInput = document.getElementById('topicName');
    const usernameInput = document.getElementById('username');
    const postTextInput = document.getElementById('postText');
    const createPostInputs = [topicInput, usernameInput, postTextInput];

    if (createPostInputs.some(input => input.value == '')) {
        alert('All fields are required!');
        return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: topicInput.value,
            username: usernameInput.value,
            postText: postTextInput.value,
            createdOn: new Date()
        })
    }

    const response = await fetch(`${host}posts`, options);
    const postData = await response.json();


    //clearInputs
    createPostInputs.forEach(input => input.value = '');

    document.querySelector('.topic-title').appendChild(createPostPreview(postData));

}

function createPostPreview(postData) {
    const topicContainer = document.createElement('div');
    topicContainer.className = 'topic-container';

    topicContainer.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal" data-id="${postData._id}">
                <h2>${postData.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${postData.createdOn}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${postData.username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>`;

    topicContainer.querySelector('a').addEventListener('click', showFullPost);

    return topicContainer;
}

export function cancelPost(event) {
    event.preventDefault();

    const topicInput = document.getElementById('topicName');
    const usernameInput = document.getElementById('username');
    const postTextInput = document.getElementById('postText');
    const createPostInputs = [topicInput, usernameInput, postTextInput];
    createPostInputs.forEach(input => input.value = '');
}

export async function showFullPost(event) {
    event.preventDefault();

    const id = event.currentTarget.dataset.id;
    const response = await fetch(`${host}posts/${id}`);
    const postData = await response.json();

    document.querySelector('.container').replaceChildren(await createFullPost(postData));
}