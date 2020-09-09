import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import theme from "./theme";

const useStyles = makeStyles({
  headerStyle: {
    fontFamily: theme.typography.fontFamily,
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography className={classes.headerStyle} variant="h4">
          Thai Script
        </Typography>
        <AcUnitRoundedIcon style={{ fontSize: "30" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
