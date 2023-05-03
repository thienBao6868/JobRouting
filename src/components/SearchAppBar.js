import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { Input, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { AppContext } from "../AppContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "../../src/data.json";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const { user, signout } = React.useContext(AuthContext);
  //console.log("den tu appbar", user, signout);
  const handleSignout = () => {
    signout(() => {});
    //console.log("den tu khi handle sign out", user);
  };
  const {
    handleOpen,
    searchParams,
    setSearchParams,
    setListPageStart,
    setListPageEnd,
  } = React.useContext(AppContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            component={RouterLink}
            to={"/"}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" }, mr: 2 }}
          >
            JobRouting
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              components={Input}
              value={searchParams.get("filter" || "")}
              onChange={(event) => {
                setListPageStart(0);
                setListPageEnd(10);
                let filter = event.target.value;

                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
            />
            {data.filter}
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          {!user ? (
            <Link
              component={RouterLink}
              to={"signInPage"}
              underline="none"
              onClick={handleOpen}
              sx={{ color: "white", display: { xs: "none", sm: "block" } }}
            >
              <IconButton aria-label="delete" size="large">
                <LoginIcon />
              </IconButton>
              Sign In
            </Link>
          ) : (
            <>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccountCircleIcon sx={{ mr: 1 }} />
                  {user}
                </Box>
                <Link
                  component={RouterLink}
                  to={"/"}
                  onClick={handleSignout}
                  underline="none"
                  sx={{ color: "white", display: { xs: "none", sm: "block" } }}
                >
                  <IconButton aria-label="delete" size="large">
                    <LoginIcon />
                  </IconButton>
                  Sign out
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
