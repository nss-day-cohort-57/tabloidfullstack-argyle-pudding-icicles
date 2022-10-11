const baseUrl = 'api/post';

export const getAllPosts = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};

export const getPostById = (postId) => {
    return fetch(baseUrl+`/${postId}`)
    .then((res) => res.json())
};