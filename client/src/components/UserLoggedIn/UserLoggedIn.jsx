import React from "react";
import { auth } from "../../firebase";

const UserLoggedIn = () => {
  const { photoURL } = auth.currentUser;
  return (
    <>
      <img className="img-avatar" src={photoURL} alt="avatar" />
    </>
  );
};

export default UserLoggedIn;
