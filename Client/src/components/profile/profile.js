import React from "react";
import { authService } from "../../firebase/fbase";
import Header from "../HeaderFooter/Header/Header";
import "./profile.css";
import Footer from "../HeaderFooter/footer/Footer";
const Profile = () => {
  const data = authService.getAuth().currentUser;

  return (
    <div>
      <Header />
      {data ? (
        <div className="profile">
          <br></br>
          <br></br>
          <img src={data.photoURL} />
          <div>{data.displayName}</div>
          <div>{data.email}</div>
        </div>
      ) : (
        <h2>Not logged in</h2>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
