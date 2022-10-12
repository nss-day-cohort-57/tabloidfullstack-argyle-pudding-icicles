import React from "react";
import { Navigate } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import { getAllTags } from "../../modules/tagManager";
import { deleteTag } from "../../modules/tagManager";

const Tag = ({ tag }) => {


  //func to delete workout from database if has wworkoutid
  const deleteButton = (tagId) => {
   deleteTag(tagId)
   getAllTags()
  }


  return (
    <Card>
      <CardBody>
        <p>
          <strong>{tag.name}</strong>
        </p>
      </CardBody>
      
      <Button outline onClick={() =>
                Navigate(`/tag/edit/${tag.id}`)}
                className="pro-primary" >
                Edit
              </Button>
      <Button outline onClick={() => deleteButton(tag.id)}
                className="pro-primary">
                Delete 
              </Button>
    
    </Card>
  );
};

export default Tag;