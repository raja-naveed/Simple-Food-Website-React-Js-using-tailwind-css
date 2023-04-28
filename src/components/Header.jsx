import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link  } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton className={classes.icon}>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Wellcome to my <br />
            My <span className={classes.colorText}>Island.</span>
          </h1>
          <Link to="place-to-visit" spy={true} smooth={true} offset={50} duration={500}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
