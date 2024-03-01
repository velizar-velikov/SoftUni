import { cancelPost, createPost, loadCommentsInHomeView } from "./utils.js";

export async function showHome(event) {
    event.preventDefault();

    document.querySelector('.container').innerHTML = `
    <main>
    <div class="new-topic-border">
        <div class="header-background">
            <span>New Topic</span>
        </div>
        <form id="createPost">
            <div class="new-topic-title">
                <label for="topicName">Title <span class="red">*</span></label>
                <input type="text" name="topicName" id="topicName">
            </div>
            <div class="new-topic-title">
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <div class="new-topic-content">
                <label for="postText">Post <span class="red">*</span></label>
                <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
            </div>
            <div class="new-topic-buttons">
                <button class="cancel">Cancel</button>
                <button class="public">Post</button>
            </div>

        </form>
    </div>

    <div class="topic-title">

        <!-- topic component  -->
        <div class="topic-container">

        </div>
    </div>

</main>`;

    document.querySelector('.cancel').addEventListener('click', cancelPost);
    document.querySelector('.public').addEventListener('click', createPost);

    await loadCommentsInHomeView();
}