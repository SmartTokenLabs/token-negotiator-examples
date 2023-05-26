import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Token.css';

function Token({ tokenInstance }) {

  const { ticketClass, ticketIdNumber, ticketIdString, devconId, type } = tokenInstance;

  return (
    <div className="ticketContainer">
      <div className="ticketDetails">
        <Typography className="ticketClass" variant="h5" component="h2">
          {ticketClass.toString()}
        </Typography>
        <Typography className="ticketId" variant="body2" color="textSecondary" component="p">
          {ticketIdNumber ?? ticketIdString}
        </Typography>
        <Typography className="devconId" variant="body2" color="textSecondary" component="p">
          Devcon ID: {devconId && devconId.toString()}
        </Typography>
          <Typography className="ticketType" variant="body2" color="textSecondary" component="p">
              {type ? type.toUpperCase() : "ASN"}
          </Typography>
      </div>
      <img className="ticketImg" src="ticket_example_image.svg"></img>
    </div>
  );
}

export default Token;
