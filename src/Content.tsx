import React from "react";
import { Grid } from "@material-ui/core";
import ThaiCard from "./ThaiCard";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ThaiCard />
      </Grid>
      <Grid item xs={4}>
        <ThaiCard />
      </Grid>
      <Grid item xs={4}>
        <ThaiCard />
      </Grid>
    </Grid>
  );
};

export default Content;
