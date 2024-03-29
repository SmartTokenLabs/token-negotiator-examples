# socios-oauth2

## Development

`npm run start`

## Set up

1. Add a `.env` file to the root of your project with the following keys and values. Please reference details from your
   socios development account to complete this.
````
  SOCIOS_CUSTOMER_KEY="..."
  SOCIOS_CUSTOMER_SECRET="..."
  SOCIOS_AUTH_KEY="..."
  SOCIOS_REDIRECT_URI="..."
  SOCIOS_PARTNER_TAG="..."
  SOCIOS_RETURN_TO_APP_URL="..."
  SOCIOS_COLLECTION_ID="..."
````

2. Once added, `run npm i` then `run npm start`

## example express application

import path from "path";
import express from "express";
import { Server } from "@tokenscript/token-negotiator-server";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = 5000;
const hostname = process.env.HOST;

// ES6 solution for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const tokenNegotiatorServer = new Server({
  issuers: {
    socios: {
      collectionID: process.env.SOCIOS_COLLECTION_ID,
      consumerKey: process.env.SOCIOS_CUSTOMER_KEY,
      consumerSecret: process.env.SOCIOS_CUSTOMER_SECRET,
      partnerTag: process.env.SOCIOS_PARTNER_TAG,
      redirectURI: process.env.SOCIOS_REDIRECT_URI,
      returnToApplicationURL: process.env.SOCIOS_RETURN_TO_APP_URL,
    },
  },
});

const corsOptions = { origin: process.env.APPLICATION_URL };

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/user-login-callback", cors(), async (request, response) => {
  const accessTokenData = await tokenNegotiatorServer.socios.getAccessToken(
    request.query.code,
    response
  );

  tokenNegotiatorServer.utils.setAccessTokenCookie(
    response,
    "socios",
    accessTokenData
  );

  // navigate back to the application page including the wallet provider details.
  response.redirect(`${process.env.SOCIOS_RETURN_TO_APP_URL}`);
});

app.get("/user-balance", cors(corsOptions), async (request, response) => {
  const output = await tokenNegotiatorServer.socios.getFungibleTokenBalance(
    request.cookies["tn-oauth2-access-token-socios"]
  );
  response.json(output);
});

app.get("/user-nfts", cors(corsOptions), async (request, response) => {
  const output = await tokenNegotiatorServer.socios.getNonFungibleTokens(
    request.cookies["tn-oauth2-access-token-socios"]
  );
  response.json(output);
});

app.post("/user-logout", cors(corsOptions), async (request, response) => {
  const output = await tokenNegotiatorServer.socios.userLogout(
    process.env.SOCIOS_AUTH_KEY,
    request.cookies["tn-oauth2-access-token-socios"]
  );
  response.json(output);
});

app.listen(port, hostname, () => console.info(`App listening ${hostname ?? ''} on port ${port}`));








