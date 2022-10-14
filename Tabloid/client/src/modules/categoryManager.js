const baseUrl = '/api/Category';

export const getAllCategories = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const addCategory = (category) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    });
};

export const getCategoryById = (categoryId) => {
    return fetch(baseUrl + `/${categoryId}`)
        .then((res) => res.json())
};

export const updateCategory = (category) => {
    return fetch(baseUrl + `/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    });
};