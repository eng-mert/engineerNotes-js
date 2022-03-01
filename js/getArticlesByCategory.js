export const getArticlesByCategory = async (category_id) => {
    const response = await fetch('https://personal-api-blog.herokuapp.com/api/v1/categories/' + category_id + '/notes');
    const data = await response.json();
    return data;
}

