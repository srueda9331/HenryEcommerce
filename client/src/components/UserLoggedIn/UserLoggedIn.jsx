import React from "react";
import { auth } from "../../firebase";

const UserLoggedIn = () => {
  const { photoURL, displayName } = auth.currentUser;
  return (
    <>
      <img className="img-avatar" src={photoURL} alt="avatar" />
      <h1>{displayName}</h1>
    </>
  );
};

export default UserLoggedIn;
