import React from "react";
import { Card, CardBody } from "reactstrap";

const UserProfile = ({ userProfile }) => {
  return (
    <Card>
      <CardBody>
        <p>Name: {userProfile.fullName}</p>
        <p>Display Name: {userProfile.displayName}</p>
        <p>User Profile Type: {userProfile.userType.name}</p>
      </CardBody>
    </Card>
  );
};

export default UserProfile;
