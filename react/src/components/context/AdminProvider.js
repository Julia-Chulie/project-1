import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState();
  const [pages, setPages] = useState();
  const [user, setUser] = useState();

  const adminContextValues = {
    siteInfo,
    pages,
    user,
    setPages,
    setSiteInfo,
    setUser,
  };

  return (
    <AdminContext.Provider value={adminContextValues}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
