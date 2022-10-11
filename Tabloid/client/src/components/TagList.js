import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { getAllTags } from "../modules/tagManager";
import { Button, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

export default function TagList() {
  const [tags, setTags] = useState([]);

  const getTagsFromApi = () => {
    getAllTags().then(ts => setTags(ts));
  };

  useEffect(() => {
    getTagsFromApi();
  }, []);

  return (
    <>
        <p className="text-left px-4"><strong>Tag Options:</strong></p>
        <NavItem>
          <Button tag={RRNavLink} to="/tag/create">Create Tag</Button>
        </NavItem>
        
      <section>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </section>
    </>
  );
}




