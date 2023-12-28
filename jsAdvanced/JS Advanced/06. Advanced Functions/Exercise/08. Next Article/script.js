function getArticleGenerator(articles) {
    let contentEl = document.getElementById('content');
    return function showNext() {
        const articleText = articles.shift();
        if (articleText) {
            let articleEl = document.createElement('article');
            articleEl.textContent = articleText;
            contentEl.appendChild(articleEl);
        }
    }
}
