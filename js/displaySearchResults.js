import { getArticles } from "./getArticles"

export const exportSearchResults = async (keyword) => {
    const articles = await getArticles().then(articles => {
        return articles.filter(article => {
            return article.title.includes(keyword);
        })
    })
    return article;
}

