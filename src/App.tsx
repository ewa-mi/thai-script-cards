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

      <Grid
        container
        direction="row"
        justify="center"
        style={{ textAlign: "center", padding: 20, marginTop: 10 }}
      >
        <Grid item xs={12} sm={8}>
          <Typography variant="h3" gutterBottom>
            Discover Thai Script Cards
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is just a sandbox. I use it to practice Material UI with
            TypeScript. This is just a sandbox. I use it to practice Material UI
            with TypeScript. This is just a sandbox. I use it to practice
            Material UI with TypeScript. For more info, please visit{" "}
            <a href="https://github.com/ewa-mi">my Github</a>
          </Typography>
        </Grid>
      </Grid>

      <Grid item container>
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
