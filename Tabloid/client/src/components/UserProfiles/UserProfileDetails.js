import React, { useEffect, useInsertionEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { getToken } from "../../modules/authManager";
import { getUserProfileDetails } from "../../modules/UserProfileManager";

const UserProfileDetails = () => {
  const { firebaseUserId } = useParams();
  const [profileDetail, setProfileDetails] = useState({});

  const token = getToken();

  const getProfileDetails = (id) => {
    getUserProfileDetails(id).then((userProfile) => {
      setProfileDetails(userProfile);
    });
  };

  useEffect(() => {
    getProfileDetails(firebaseUserId);
  }, []);

  return (
    <Card>
      <h3>User Profile Details</h3>
      <CardBody>
        <div className="container">
          <div className="row justify-content-center">
            <p>
              <img src={profileDetail.imageLocation} />
            </p>
            <p>Name: {profileDetail.fullName}</p>
            <p>Display Name: {profileDetail.displayName}</p>
            <p>Email: {profileDetail.email}</p>
            <p>Date: {profileDetail.createDateTime}</p>
            <p>UserType: {profileDetail.userType?.name}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default UserProfileDetails;
