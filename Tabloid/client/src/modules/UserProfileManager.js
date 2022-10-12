import UserProfileDetailsList from "../components/UserProfiles/UserProfileDetails";

const baseUrl = "/api/UserProfile";

export const getAllUserProfiles = () => {
  return fetch(baseUrl).then((res) => res.json());
};
export const getUserProfileDetails = (firebaseUserId) => {
  return fetch(baseUrl + `/${firebaseUserId}`).then((res) => res.json());
};

export const callComp = () => {
  return UserProfileDetailsList;
};

export const addUserProfile = (userProfile) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile),
  });
};
