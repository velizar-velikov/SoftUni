export async function createComment(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { postText, username } = Object.fromEntries(formData.entries());

    if (postText == '' || username == '') {
        alert('All fields are required!');
        return;
    }

    const commentTitle = document.querySelector('.theme-name h2').textContent;
    console.log(commentTitle);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: commentTitle,
            username,
            postText,
            createdOn: new Date()
        })
    };

    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, options);
    const commentData = await response.json();

    document.querySelector('.comment').appendChild(createCommentPreview(commentData));
    event.target.reset();
}

export function createCommentPreview(commentData) {
    const element = document.createElement('div');
    element.id = 'user-comment';

    const time = getTime(commentData);

    element.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${commentData.username}</strong> commented on <time>${time}</time></p>
            <div class="post-content">
            <p>${commentData.postText}</p>
            </div>
        </div>
    </div>`;


    return element;
}

export function getTime(data) {

    const date = new Date(data.createdOn);

    const dayOfMonth = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth();
    const year = date.getFullYear();


    const dayFormatted = `${dayOfMonth}/${month}/${year}`;

    const timeFormatted = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`}`;
    const time = `${dayFormatted}, ${timeFormatted}`;

    return time;
}