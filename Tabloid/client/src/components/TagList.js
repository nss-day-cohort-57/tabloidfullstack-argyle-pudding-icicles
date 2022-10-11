import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { getAllTags } from "../modules/tagManager";


export default function TagList  ()  {
  const [tags, setTags] = useState([]);

  const getTagsFromApi = () => {
    getAllTags().then(ts => setTags(ts));
  };


  useEffect(() => {
    getTagsFromApi();
  }, []);

  return (
<section>
  {tags.map((tag) => (
    <Tag key={tag.id} tag={tag} />
  ))}
</section>
);
}


    
  
