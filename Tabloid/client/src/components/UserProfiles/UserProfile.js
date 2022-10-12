import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { callComp } from "../../modules/UserProfileManager";

const UserProfile = ({ userProfile }) => {
  return (
    <Card>
      <p>User Profile</p>
      <CardBody>
        <p>
          <Link to={`/userProfile/${userProfile.firebaseUserId}`}>
            Name: {userProfile.fullName}
          </Link>
        </p>
        <p>Display Name: {userProfile.displayName}</p>
        <p>User Profile Type: {userProfile.userType.name}</p>

        <button className="btn btn-warning" onClick={callComp()}>
          DETAILS
        </button>
      </CardBody>
    </Card>
  );
};

export default UserProfile;
