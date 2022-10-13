

const baseUrl = '/api/Tag';

export function getAllTags() {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const addTag = (tag) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  });
};

export const updateTag = (tag) => {
  return fetch(baseUrl+`/${tag.Id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(tag),
});
};

export const getTagById = (tagId) => {
  return fetch(baseUrl+`/${tagId}`)
  .then((res) => res.json())
};


export const deleteTag = (tagId) => {
  return fetch(baseUrl + `/${tagId}`, {
    method: "DELETE"
  })
}