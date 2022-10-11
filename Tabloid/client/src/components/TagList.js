import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { getAllTags } from "../modules/tagManager";

export default function TagList() {
  const [tags, setTags] = useState([]);

  const getTagsFromApi = () => {
    getAllTags().then(ts => setTags(ts));
  };

  useEffect(() => {
    getTagsFromApi();
  }, []);

  return (
    <section>
      <p className="text-left px-4"><strong>Available Tags:</strong></p>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </section>
  );
}




