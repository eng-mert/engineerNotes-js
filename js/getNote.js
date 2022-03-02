import { getArticles } from "./getArticles.js"

export const getNote = async (_id) => {
    const article = getArticles().then(articles => {
        return articles.find(article => {
            return article._id === _id;
        })
    }).then(article => {
        return article;
    })
    return article;
}

export const displayNote = (note) => {
    const { _id, title, content, description, tags, cover_image, created_date } = note;
    renderArticle(_id, title, content, description, tags, cover_image, created_date);
}

const renderArticle = (_id, title, content, description, tags, cover_image, created_date) => {
    const articleContent = document.querySelector('#article-content');
    const articleTitle = document.querySelector('.article-title');
    const articleCreatedDate = document.querySelector('.article-created-date');
    const articleImage = document.querySelector('.article-cover');
    const contentText = marked.parse(content);
    const dom = new DOMParser();
    const html = dom.parseFromString(contentText, "text/html");
    // setup images 
    [...html.querySelectorAll('img')].forEach(img => {
        img.classList.add("img-fluid", "my-2")
    })

    // equation
    html.querySelectorAll("p").forEach(p => {
        if (p.innerHTML.startsWith('$$')) {
            p.innerHTML = p.innerHTML.replace('$$', '').replace('$$', '');
            p.classList.add('bg-dark', 'text-white', 'text-center', 'p-4')
        }
    })
    // iframe
    html.querySelectorAll("iframe").forEach(frame => {
        frame.style.height = '800px';
        frame.style.padding = '3rem';
    })
    // tables
    html.querySelectorAll("table").forEach(table => {
        table.classList.add('table')
    })
    // codes
    html.querySelectorAll('pre').forEach(code => {
        code.classList.add('bg-light', 'p-4', 'w-100', 'text-dark');
        code.classList.remove('language-other')
    })
    articleTitle.textContent = title;
    articleCreatedDate.textContent = created_date
    articleImage.setAttribute("src", cover_image)
    articleContent.innerHTML = html.querySelector("body").innerHTML;
}

