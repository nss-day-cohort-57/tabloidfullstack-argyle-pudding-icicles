

const baseUrl = '/api/Tag';

export function getAllTags () {
    return fetch(baseUrl)
      .then((res) => res.json())
  };
  
