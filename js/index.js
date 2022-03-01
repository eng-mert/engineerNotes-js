import { displayCategory } from "./getCategories.js";
import { displayArticles, getArticles } from './getArticles.js';
import { search } from "./search.js";


displayCategory();

getArticles().then(articles => {
    displayArticles(articles)
})

search();