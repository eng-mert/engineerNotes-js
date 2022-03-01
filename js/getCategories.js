const getCategories = async () => {
    const response = await fetch('https://personal-api-blog.herokuapp.com/api/v1/categories');
    const data = await response.json();
    return data;
}

export const displayCategory = () => {
    getCategories().then(categories => {
        const categoriesList = document.querySelector('#categories-list');
        const content = categories.map(category => {
            const { _id, title, parent_id } = category;
            if (parent_id === "") {
                return `
        <li><a class="dropdown-item" href="./by-category.html?id=${_id}">${title}</a></li>
        `;
            }
        }).join('');
        if (categoriesList) {
            categoriesList.innerHTML = content;
        }
    })
}
