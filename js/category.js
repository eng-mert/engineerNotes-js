import { displayCategory } from "./getCategories.js";
import { displayArticles, getArticles } from './getArticles.js';
import { getArticlesByCategory } from "./getArticlesByCategory.js";
import { displaySubCategories } from "./getSubCategories.js";
import { search } from "./search.js";

displayCategory();
search();


const category_id = new URL(window.location.href).searchParams.get('id');
displaySubCategories(category_id);
getArticlesByCategory(category_id).then(articles => {
    displayArticles(articles);
});

