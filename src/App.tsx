import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <Grid item container>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", padding: "30px" }}
          >
            Discover Thai Script Cards
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={2} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
