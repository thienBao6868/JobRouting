import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const AppContext = createContext();

function AppProvider({ children }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  let [searchParams, setSearchParams] = useSearchParams();
  const [listPageStart, setListPageStart] = useState(0);
  const [listPageEnd, setListPageEnd] = useState(5);
  const valuePage = { setListPageStart, setListPageEnd };
  const value = {
    open,
    handleClose,
    handleOpen,
    searchParams,
    setSearchParams,
    valuePage,
    listPageEnd,
    listPageStart,
    setListPageEnd,
    setListPageStart,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
