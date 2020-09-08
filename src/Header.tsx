import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles({
  headerStyle: {
    fontFamily: theme.typography.fontFamily,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color="secondary">
      <Toolbar>
        <Typography className={classes.headerStyle} variant="h4">
          Thai Script
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
