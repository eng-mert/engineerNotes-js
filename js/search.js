import { displayArticles, getArticles } from './getArticles.js';

export const getResults = async (keyword) => {
    return getArticles().then(articles => {
        return articles.filter(article => {
            if (keyword) {
                return article.title.toLowerCase().includes(keyword.toLowerCase());
            }

        })
    }).then(results => {
        if (results) {
            displayArticles(results);
        }
    })
}


export const search = () => {
    const searchField = document.querySelector('#search-field');
    const searchBtn = document.querySelector('#search-btn');
    searchBtn.addEventListener('click', (e) => {
        searchBtn.setAttribute('href', './search.html?keyword=' + searchField.value);
    });
}
search();
const keyword = new URL(window.location.href).searchParams.get('keyword');
getResults(keyword)