const baseUrl = "/api";

export const getAllUserProfiles = () => {
  return fetch(baseUrl + "/UserProfile").then((res) => res.json());
};
export const getUserDetails = () => {
  return fetch(baseUrl);
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
