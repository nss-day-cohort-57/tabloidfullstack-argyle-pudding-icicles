import React from "react";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag }) => {
  return (
    <Card >
      <CardBody>
        <div>{tag.name}</div>
      </CardBody>
    </Card>
  );
};

export default Tag;