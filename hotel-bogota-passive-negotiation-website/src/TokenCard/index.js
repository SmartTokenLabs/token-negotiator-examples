import React, {useEffect, useState} from "react";
import Typography from '@material-ui/core/Typography';
import './Card.css';

// Token Card COMPONENT
// Displays a single tickets data

function TokenCard({ tokenInstance, applyDiscount, discount, selectedPendingTokenInstance }) {

  const [isSelectedToken, setIsSelectedToken] = useState(false);

  useEffect(() => {

	  const selectedVal = discount.tokenInstance &&
		  discount.tokenInstance.ticketIdNumber === tokenInstance.ticketIdNumber &&
		  discount.tokenInstance.ticketClass === tokenInstance.ticketClass &&
		  discount.tokenInstance.devconId === tokenInstance.devconId;

	  setIsSelectedToken(selectedVal);

  }, [discount]);

  return (
    <div onClick={e => applyDiscount(isSelectedToken ? null : tokenInstance)} className={"tokenCard" + (isSelectedToken ? " selected" : "")}>
      <div className={"ticketDetails" + (selectedPendingTokenInstance ? " skeleton-card" : "")}>
        <Typography className="ticketClass" gutterBottom variant="h5" component="h2">
          {tokenInstance.ticketClass.toString()}
        </Typography>
        <Typography className="devconId" variant="body2" color="textSecondary" component="p">
          Devcon ID: {tokenInstance.devconId.toString()}
        </Typography>
      </div>
      <img className="ticketImg" src="ticket_example_image.svg"></img>
    </div>
  );
}

export default TokenCard;
