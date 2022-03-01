import { getArticles } from "./getArticles.js";
export const getCurrentNoteIndex = async (note_id) => {
    return getArticles().then(articles => {
        const currentIndex = articles.indexOf(articles.find(article => article._id === note_id));
        return { current: currentIndex, total: articles.length - 1 };
    })
}

export const getNextArticle = async (note_index) => {
    return getArticles().then(articles => {
        return articles[note_index + 1]
    })
}

export const getPreviousArticle = async (note_index) => {
    return getArticles().then(articles => {
        return articles[note_index - 1]
    })
}