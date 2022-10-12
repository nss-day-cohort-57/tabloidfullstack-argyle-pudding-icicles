import React from "react";
import { Navigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { getAllTags } from "../../modules/tagManager";
import { deleteTag } from "../../modules/tagManager";



const Tag = ({ tag }) => {
  //func to delete workout from database if has workoutid
  const deleteButton = (tagId) => {

    deleteTag(tagId)
    getAllTags()
  }

  return (
    <Card>
      <CardBody id="tag-cardBody">
        <section className="tagContainer">
          <div className="tagNameContainer">
            <span className="tagName">{tag.name}</span>
          </div>
          <div className="buttonContainer">
            <button outline onClick={() =>
              Navigate(`/tag/edit/${tag.id}`)}
              className="editButton" >
              EDIT
            </button>
            <button outline onClick={() => deleteButton(tag.id)}
              className="deleteButton">
              DELETE
            </button>
          </div>
        </section>
      </CardBody>
    </Card>

);
};

export default Tag;
