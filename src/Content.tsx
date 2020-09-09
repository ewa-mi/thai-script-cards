import React from "react";
import { Grid } from "@material-ui/core";
import ThaiCard from "./ThaiCard";
import cardsData from "./constants";

const Content = () => {
  const getCardsData = (cardsDataObj: any) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <ThaiCard {...cardsDataObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {cardsData.map((cardsDataObj) => getCardsData(cardsDataObj))}
    </Grid>
  );
};

export default Content;
