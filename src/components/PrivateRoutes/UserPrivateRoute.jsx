import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const UserPrivateRoute = () => {
  let navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState();
  //const [loading, setLoading] = useState(true);
  console.log("User private route");

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "api/checkingAuthUser",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.status === 200) {
          setAuthenticated(true);
          console.log("jeste autentikovan");
          return <Navigate to="/movies" />;
        }
      })
      .catch((error) => {
        console.log(error);
        setAuthenticated(false);
      });
  }, []);

  // console.log(authenticated);
  // return (
  //   <div>
  //     <Navigate to="/home" />
  //   </div>
  // );
};

export default UserPrivateRoute;
