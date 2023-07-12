import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookingModal from "./../BookingModal";
import Typography from "@material-ui/core/Typography";
import "./RoomCard.css";

// ROOM CARD COMPONENT
// Shows hotel room item; image, price and option to book on main page.

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px"
  },
  media: {
    height: 140
  }
});

export default function RoomCard({
  room,
  applyDiscount,
  discount,
  tokens,
  book,
  selectedPendingTokenInstances
}) {
  const classes = useStyles();
  const {type, price, image, frequency} = room;
  return (
    <Card className="roomCard">
      <div>
        <CardMedia className={classes.media} image={image} title="token" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            From {price} COP / {frequency}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <BookingModal
          book={book}
          applyDiscount={applyDiscount}
          tokens={tokens}
          roomType={type}
          discount={discount}
          price={price}
          selectedPendingTokenInstances={selectedPendingTokenInstances}
        />
      </CardActions>
    </Card>
  );
}
