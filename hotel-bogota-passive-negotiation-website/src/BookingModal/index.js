import React, { useEffect, useReducer } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TokenCard from "./../TokenCard";
import "./BookingModal.css";

// BOOKING MODAL COMPONENT
// Booking form. Displays selected room data and option to select from tokens if found.

export default function BookingModal({
  roomType,
  applyDiscountTicket,
  applyDiscount,
  discount,
  price,
  tokens,
  book,
  selectedPendingTokenInstances
}) {
  // Modal State (open boolean)
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // Form state.
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      reference: "Beeple",
      cardNo: "00000000000",
      cardSort: "00-00-00",
      cardCsv: "000"
    }
  );

  // Handle form input.
  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  // Simple validation check.
  const formIsDisabled = () => {
    return false;
  };

  // handle form submission.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    book({ formInput, roomType });
  };

  // Open Modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close Modal
  const handleClose = () => {
    localStorage.removeItem("booking-room-type");
    setOpen(false);
  };

  // apply discount
  const discountPerc = discount.value ? discount.value : 0;
  const discountOfferValue = (discountPerc / 100) * price;
  const viewPrice = price - discountOfferValue;

  useEffect(() => {
    if (discount && localStorage.getItem("booking-room-type") === roomType) {
      localStorage.removeItem("booking-room-type");
      setOpen(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [discount]);



  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Book
      </Button>
      <Dialog
        disableEnforceFocus={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="modalContainer">
          <DialogTitle className="title" disableTypography={true}>
            {roomType}
          </DialogTitle>
          <DialogTitle disableTypography={true}>
            {viewPrice} COP per night
          </DialogTitle>
          <DialogContent>
            <div className="divider"></div>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  border: "1px solid darkcyan",
                  marginTop: "27px",
                  padding: "7px 12px",
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ textAlign: "left" }}>check in 01/08/2021</div>
                <div style={{ textAlign: "left" }}>check out 15/08/2021</div>
              </div>
              <div
                style={{
                  borderLeft: "1px solid darkcyan",
                  borderRight: "1px solid darkcyan",
                  borderBottom: "1px solid darkcyan",
                  padding: "7px 12px",
                  fontSize: "14px",
                  textAlign: "left"
                }}
              >
                <div>Total {viewPrice * 14} COP</div>
              </div>
              {discount.value &&
                <DialogTitle className="discountAppliedContainer" disableTypography={true}>
                  {discount.value ? `🎉 ${discount.value}% discount has been applied to your hotel booking 🎉` : ""}
                </DialogTitle>
              }
              {!discount.value && loading === false &&
                <div style={{ paddingTop: "20px" }}>
                  {tokens.length > 0 && (
                    <p className="smallCopy">
                      select token(s) to apply discount:
                    </p>
                  )}
                </div>
              }
              {!discount.value && loading === false &&
                <div className="discountTicketContainer">
                  <div className="ticketWrapper">
                    {tokens?.map((token, index) => (
                      <div key={index}>
                        <TokenCard
                          applyDiscountTicket={(token) => {
                            applyDiscountTicket(token, roomType);
                          }}
                          applyDiscount={applyDiscount}
                          tokenInstance={token}
                          discount={discount}
                          selectedPendingTokenInstances={
                            selectedPendingTokenInstances
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              }
              {!discount.value && loading === false &&
                <Button className="applyDiscount" disabled={!selectedPendingTokenInstances.length} onClick={applyDiscount} color="primary" variant="contained">
                  Apply Discount
                </Button>
              }
              <div className="divider"></div>
              <TextField
                id="booking-name"
                label="Reference name"
                placeholder="Beeple"
                value="Beeple"
                helperText="(a check-in reference name for your booking)"
                fullWidth
                name="reference"
                margin="normal"
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="card-no"
                label="Card Number"
                fullWidth
                placeholder="00000000000"
                value="00000000000"
                name="cardNo"
                margin="normal"
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="card-sort"
                label="Card Sort Number"
                fullWidth
                placeholder="00-00-00"
                value="00-00-00"
                name="cardSort"
                margin="normal"
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="card-csv"
                label="CSV"
                fullWidth
                value="000"
                placeholder="000"
                name="cardCsv"
                margin="normal"
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginTop: "12px"
                }}
              >
                <div
                  style={{ color: "grey", fontSize: "12px", marginRight: "5px" }}
                >
                  cards accepted
                </div>
                <img
                  style={{ width: "100px", height: "24px" }}
                  src="./cards-accepted-demo.png"
                ></img>
              </div>
            </form>
          </DialogContent>
          <div className="booking">
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                disabled={formIsDisabled()}
              >
                Pay Now
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
