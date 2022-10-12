import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { getAllTags } from "../../modules/tagManager";
import { Button, NavItem } from "reactstrap";
import { Navigate, NavLink as RRNavLink } from "react-router-dom";
import "./Tag.css";

export default function TagList() {
  const [tags, setTags] = useState([]);

  const getTagsFromApi = () => {
    getAllTags().then(ts => setTags(ts));
  };

  useEffect(() => {
    getTagsFromApi();
  }, [tags]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="logoContainer">
          <span className="logoCircle">
            <img className="quillLogo" src={process.env.PUBLIC_URL + "/quill-logo.png"} />
          </span>
        </div>
        <h1 className="tagPageHeader">TAG MANAGEMENT</h1>
        {
          tags.map((tag) => (
            <Tag tag={tag} key={tag.id} />
          ))
        }
        <NavItem className="addTagContainer">
          <div className="addTagContainer">Add a new tag</div>
          <Button id="createButton" tag={RRNavLink} to="/tag/create">Create</Button>
        </NavItem>

      </div>
    </div>
  )
}

