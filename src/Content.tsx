import React from "react";
import { Grid } from "@material-ui/core";
import ThaiCard from "./ThaiCard";
import cardsData from "./constants";

const Content = () => {
  const getCardsData = (cardsDataObj: any, index: number) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <ThaiCard {...cardsDataObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} style={{ padding: "25px" }}>
      {cardsData.map((cardsDataObj, index) =>
        getCardsData(cardsDataObj, index)
      )}
    </Grid>
  );
};

export default Content;
