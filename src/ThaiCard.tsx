import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ThaiCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2015/04/20/13/28/lizard-731336_1280.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            จิ้งจก
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ชื่อสัตว์เลื้อยคลานขนาดเล็กในวงศ์ Gekkonidae
            ซึ่งเป็นวงศ์เดียวกับตุ๊กแกในประเทศไทยมีอยู่หลายชนิด.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          English
        </Button>
      </CardActions>
    </Card>
  );
};

export default ThaiCard;
