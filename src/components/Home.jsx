
import React from "react";

const Home = ({ user }) => {
  return (
    <div className="form-container">
      <h2>Welcome {user?.name || "User"}!</h2>
    </div>
  );
};

export default Home;
