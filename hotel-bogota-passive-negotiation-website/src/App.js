import React, { useState, useEffect } from 'react';
import LogoCard from './LogoCard';
import RoomCard from './RoomCard';
import TokenNotificationCard from './TokenNotificationCard';
import Typography from '@material-ui/core/Typography';
import BookingDate from './BookingDate';
// import { Client } from '@tokenscript/token-negotiator';
import { Client } from './dist/client/index';
import './App.css';

// mock data e.g. server side hotel room price database
const mockRoomData = [{ "type": "Deluxe Room", "price": 200000, "frequency": "per night", "image": "./hotel_3.jpg" }, { "type": "King Suite", "price": 320000, "frequency": "per night", "image": "./hotel_2.png" }, { "type": "Superior Deluxe Suite", "price": 250030, "frequency": "per night", "image": "./hotel_1.jpg" }]

// mock discount of 10% applied to any ticket selected. In a real world scenario, this maybe different per ticket type and retrieved from a backend service.
const mockRoomDiscountData = 10;

const tokenIssuers = ['devcon'];

function App() {

  let negotiator = new Client({
    type: 'passive',
    issuers: tokenIssuers,
    options: {}
  });

  // devcont tickets (react state of tokens)
  let [tokens, setTokens] = useState([]);

  // react state of token specical offer
  let [freeShuttle, setFreeShuttle] = useState(false);

  // react state of hotel room data
  let [roomTypesData, setRoomTypesData] = useState([]);

  // selected token instance to apply discount, with the discount value on hotel booking.
  let [discount, setDiscount] = useState({ value: undefined, tokenInstance: null });

  // token proof
  let [useDiscountProof, setUseDiscountProof] = useState({ useTicket: undefined, ethKey: undefined });

  // async example of initial hotel data loaded from source
  const getRoomTypesData = () => {
    return mockRoomData;
  }

  // example to return a discount
  const getApplicableDiscount = () => {
    return mockRoomDiscountData;
  }

  // When a ticket is present and user applies it, the discount will be shown
  const applyDiscount = async (ticket) => {

    // toggle room discount offer on/off
    if (!ticket || ticket === null) {

      // clear discount
      setDiscount({ value: undefined, tokenInstance: undefined });

    } else {

      negotiator.authenticate({
        issuer: 'devcon',
        unsignedToken: tokens[0]
      });

    }
  }

  // This is the example at which the hotel would begin a hotel room booking transaction.
  const book = async (formData) => {
    const params = { discount: useDiscountProof, bookingData: { formData } };
    // Make Transaction
    if (params.discount.proof) alert('Transaction Complete, we look forward to your stay with us!');
  }

  // negotiation happens when this method is triggered
  // before this time, the token-negotiator is not used.
  const getTokens = () => {
    negotiator.negotiate().then((issuerTokens) => {
      let tokens = [];
      tokenIssuers.map(( issuer ) => {
        tokens.push(...issuerTokens[issuer].tokens);
      });
      if (tokens.length > 0) {
        setTokens(tokens);
        setFreeShuttle(true);
      }
    }).catch((err) => {
      console.log('error', err);
    });
  }

  // react effect
  useEffect(() => {
    // assign room data to react local state
    setRoomTypesData(getRoomTypesData());
    // async event to acquire tokens
    getTokens();
  }, []);

  return (
    <div>
      <div className="header">
        <LogoCard title={"Hotel Bogota"} />
        <TokenNotificationCard tokensNumber={tokens.length} />
      </div>
      <BookingDate />
      <div className="roomCardsContainer">
        {roomTypesData.map((room, index) => {
          return <RoomCard
            key={index}
            room={room}
            applyDiscount={applyDiscount}
            discount={discount}
            tokens={tokens}
            book={book}
          />
        })}
      </div>
      {
        freeShuttle &&
        <div>
          <Typography
            style={{ padding: '20px' }}
            className="applyDiscountCopyContainer"
            gutterBottom
            variant="body2"
            component="p">
            Free shuttle service available to you as a Devcon Ticket holder! Enjoy the event.
          </Typography>
        </div>
      }
    </div>
  );
}

export default App;
