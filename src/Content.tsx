import React from "react";
import { Grid } from "@material-ui/core";
import ThaiCard from "./ThaiCard";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <ThaiCard
          image="https://cdn.pixabay.com/photo/2015/04/20/13/28/lizard-731336_1280.jpg"
          title="Lizard"
          header="จิ้งจก"
          content="ชื่อสัตว์เลื้อยคลานขนาดเล็กในวงศ์ Gekkonidae
        ซึ่งเป็นวงศ์เดียวกับตุ๊กแกในประเทศไทยมีอยู่หลายชนิด."
        />
      </Grid>
    </Grid>
  );
};

export default Content;
