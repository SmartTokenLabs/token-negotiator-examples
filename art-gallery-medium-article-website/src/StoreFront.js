import React, { useContext } from 'react';
import StoreItem from "./StoreItem";

import { TokenContext } from "./TokenContextProvider";

export default function StoreFront() {

  const { tokens } = useContext(TokenContext);

  const mockStoreFrontItems = [
    { size: "140px", price: 200, src: "https://picsum.photos/id/100/200/300", title: "Lorem", id: 1 },
    { size: "90px", price: 150, src: "https://picsum.photos/id/200/200/300", title: "Aliqua", id: 2 },
    { size: "170px", price: 400, src: "https://picsum.photos/id/300/200/300", title: "Adipiscing", id: 3},
    { size: "120px", price: 300, src: "https://picsum.photos/id/400/200/300", title: "Sit", id: 4 },
    { size: "100px", price: 600, src: "https://picsum.photos/id/500/200/300", title: "Exercitation",id: 5 },
    { size: "110px", price: 300, src: "https://picsum.photos/id/600/200/300", title: "Consectetur", id: 6 },
  ];
  
  const tokenSelected = tokens.length > 0;
  const storeWideDiscount = tokenSelected ? 0.9 : undefined;

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "38px", fontSize: "24px" }}>
        The Art Gallery
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "38px", fontSize: "16px", margin: 0, fontWeight: 400 }}>
        Discover original paintings & artwork in our beautiful online collection.
      </h2>
      <div style={{ display: 'flex', flexFlow: "row wrap", justifyContent: "center", margin: "20px" }}>
        {mockStoreFrontItems.map((item) => {
          return <StoreItem key={item.id} discount={ storeWideDiscount } item={item} />;
        })}
      </div>
    </div>
  );
}
