import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AdminPrivateRoute = () => {
  let navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "api/admin/checkingAuthenticated",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.status == 200) {
          setAuthenticated(true);
          console.log(authenticated);
        }
      })
      .catch((error) => {
        console.log(error);
        setAuthenticated(false);
      });
  }, [authenticated]);
  console.log(authenticated);
  return authenticated ? <Outlet /> : <Navigate to="/forbidden" />;
};

export default AdminPrivateRoute;
