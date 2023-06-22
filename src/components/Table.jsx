import React from "react";
import { Outlet } from "react-router-dom";

const Table = ({ token }) => {
  return (
    <div>
      <div>This is table component.</div>
      <Outlet />
    </div>
  );
};

export default Table;
