import React from "react";
import ReactDOM from "react-dom/client";
import PostApi from "./components/PostAPI";
import User from "./components/UserAPI";

const AppLayout = () => {
  return (
    <div className="app">
      {/* <PostApi /> */}
      <User />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
