import React from "react";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>header will be here</Grid>
      <Grid item container>
        <Grid item xs={2} sm={2} />
        <Grid item xs={12} sm={8}>
          content will be here content will be here content will be here content
          will be here content will be here content will be here content will be
          here content will be here content will be here content will be here
        </Grid>
        <Grid item xs={2} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
