import React, { useState } from "react";
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
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  media: {
    height: 150,
  },
});

const ThaiCard = (props: any) => {
  const [language, setLanguage] = useState<string>("Thai");

  const classes = useStyles();
  const { image, title, header, content, engHeader, engContent } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {language === "English" ? engHeader : header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {language === "English" ? engContent : content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          value={language}
          onClick={() =>
            setLanguage(language === "English" ? "Thai" : "English")
          }
        >
          {language === "English" ? "Thai" : "English"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ThaiCard;
