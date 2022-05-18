import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {};

const IndexPage = () => {
  const { user } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/selectGame");
    } else {
      navigate("/login");
    }
  });
  return (
    <div>
      <button>
        <h1
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </h1>
      </button>
    </div>
  );
};

export default IndexPage;
