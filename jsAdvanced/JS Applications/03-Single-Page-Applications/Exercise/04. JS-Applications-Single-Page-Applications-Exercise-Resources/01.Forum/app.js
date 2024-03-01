import { showHome } from "./showHome.js";
import { cancelPost, createPost, loadCommentsInHomeView } from "./utils.js";


await loadCommentsInHomeView();
document.getElementById('homeBtn').addEventListener('click', showHome);

document.querySelector('.cancel').addEventListener('click', cancelPost);
document.querySelector('.public').addEventListener('click', createPost);

const links = document.querySelectorAll('.topic-title a');