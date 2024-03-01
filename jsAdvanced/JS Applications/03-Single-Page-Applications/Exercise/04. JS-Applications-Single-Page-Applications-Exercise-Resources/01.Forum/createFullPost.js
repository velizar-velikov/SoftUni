import { createComment, createCommentPreview, getTime } from "./createComment.js";

export async function createFullPost(postData) {

    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
    const commentsData = await response.json();

    const time = getTime(postData);

    const contentElement = document.createElement('div');
    contentElement.className = 'theme-content';

    contentElement.innerHTML = `
        <div class="theme-title">
        <div class="theme-name-wrapper">
            <div class="theme-name">
                <h2>${postData.title}</h2>

            </div>

        </div>
    </div>
    <!-- comment  -->

    <div class="comment">
      <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${postData.username}</span> posted on <time>${time}</time></p>

        <p class="post-content">${postData.postText}</p>
      </div>
    </div>

    <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>`;

    contentElement.querySelector('.answer-comment form').addEventListener('submit', createComment);

    const postTitle = postData.title;
    console.log(postTitle);

    const elements = Object.values(commentsData).filter(commentData => commentData.title === postData.title).map(createCommentPreview);

    for (let element of elements) {
        contentElement.querySelector('.comment').appendChild(element);
    }

    return contentElement;
}


await loadAllComments();

async function loadAllComments() {
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
}