import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import "./Card.css";

// Token Card COMPONENT
// Displays a single tickets data

function TokenCard({
  tokenInstance,
  applyDiscountTicket,
  selectedPendingTokenInstances
}) {
  let tokenSelected = false;

  selectedPendingTokenInstances?.forEach((ticket) => {
    if (tokenInstance.tokenId === ticket.tokenId) {
      tokenSelected = true;
    }
  });

  return (
    <div
      onClick={(e) => {
        applyDiscountTicket(tokenInstance);
      }}
      className={"tokenCard" + (tokenSelected ? " selected" : "")}
    >
      <div
        className={"ticketDetails" + (tokenSelected ? " skeleton-card" : "")}
      >
        <Typography
          className="ticketClass"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {tokenInstance.ticketClass.toString()}
        </Typography>
      </div>
      <img className="ticketImg" src="ticket_example_image.svg"></img>
    </div>
  );
}

export default TokenCard;
