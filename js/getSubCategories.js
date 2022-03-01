const getSubCategories = async (category_id) => {
    const response = await fetch(`https://personal-api-blog.herokuapp.com/api/v1/categories/${category_id}/children`);
    const data = response.json();
    return data;
}

export const displaySubCategories = (category_id) => {
    getSubCategories(category_id).then(categories => {
        const subCategoryArea = document.querySelector('#sub-categories-area');
        const content = categories.map(category => {
            return `<a href="./by-category.html?id=${category._id}" class="category-btn btn btn-outline-darl mx-2 my-2">${category.title}</a>`;
        }).join('')
        if (subCategoryArea) {
            subCategoryArea.innerHTML = content;
        }
    })
}