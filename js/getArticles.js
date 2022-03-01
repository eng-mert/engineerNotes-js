export const getArticles = async () => {
    const response = await fetch('https://personal-api-blog.herokuapp.com/api/v1/notes');
    const data = await response.json();
    return data;
}


export const displayArticles = (articles) => {
    const container = document.querySelector('#articles-container');
    const content = articles.map(article => {
        const { _id, title, description } = article;
        return `
        <article class="article mb-3">
            <a href="./note.html?id=${_id}" class="text-decoration-none article-title mb-2">
                <h3 class="fs-2">
                    ${title}
                </h3>
            </a>
            <p>${description}</p>
            <div class="d-flex">
                <a href="./note.html?id=${_id}" class="btn ms-auto">👉 Read More</a>
            </div>
        </article>
        <hr class="my-4">
        `;
    }).join('')
    if (container) {
        container.innerHTML = content;
    }
}

