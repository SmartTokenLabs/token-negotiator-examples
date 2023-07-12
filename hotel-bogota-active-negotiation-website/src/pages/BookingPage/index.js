import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import {TokenContext} from "./../../TokenContextProvider";
import Header from "./../../components/Header";
import RoomCard from "./../../components/RoomCard";
import BookingDate from "./../../components/BookingDate";
import "./../../App.css";

const BookingPage = () => {
  const {tokens} = useContext(TokenContext);
  let tokenLength = 0;

  for (const key in tokens) {
    if (tokens[key].tokens) tokenLength += tokens[key].tokens.length;
  }

  const tokenHolderBenefits = {
    roomDiscount: tokenLength > 0,
    freeShuttle: tokenLength > 1
  };

  const getRoomDiscountPrice = (price, discount) => {
    return price - (discount / 100) * price;
  };

  const mockRoomData = [
    {
      type: "Deluxe Room",
      price: 200000,
      frequency: "night",
      image: "./hotel_3.jpg"
    },
    {
      type: "King Suite",
      price: 320000,
      frequency: "night",
      image: "./hotel_2.png"
    },
    {
      type: "Superior Deluxe Suite",
      price: 250030,
      frequency: "night",
      image: "./hotel_1.jpg"
    }
  ];

  const roomTypesData = mockRoomData.map((room, index) => {
    if (tokenHolderBenefits.roomDiscount) {
      room["applyDiscount"] = true;

      room["discount"] = 10;

      room["discountPrice"] = getRoomDiscountPrice(room.price, room.discount);
    }

    return room;
  });

  return (
    <div>
      <Header />
      <BookingDate />
      <div className="roomCardsContainer">
        {roomTypesData.length > 0 &&
          roomTypesData.map((room, index) => {
            return <RoomCard key={index} room={room} />;
          })}
      </div>
      {tokenHolderBenefits.freeShuttle && (
        <div>
          <Typography
            style={{padding: "20px"}}
            className="applyDiscountCopyContainer"
            gutterBottom
            variant="body2"
            component="p"
          >
            🎉 &nbsp; Devcon Multi Ticket holder. Free shuttle service available
            with any booking.
          </Typography>
        </div>
      )}
      <div
        className="tokenSelectorContainerElement"
        style={{position: "fixed", right: 0, bottom: 0, maxWidth: "100%"}}
      />
    </div>
  );
};

export default BookingPage;
