import { Component, OnInit } from '@angular/core';
import { Client } from '@tokenscript/token-negotiator';
import { Issuer } from '@tokenscript/token-negotiator/dist/client/interface';

import issuersData from './issues';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 

export class AppComponent implements OnInit {
  
  public issuers: Issuer[] = issuersData;
  public negotiator: Client;

  constructor() { 
    this.negotiator = new Client({
      type: 'active',
      issuers: this.issuers,
      uiOptions: {
          openingHeading: "Open a new world of discounts available with your tokens.",
          issuerHeading: "Get discount with Ticket",
          repeatAction: "try again",
          theme: "light",
          position: "bottom-right"
      },
      autoLoadTokens: 3,
      safeConnectOptions: {
          url: "https://safeconnect.tokenscript.org",
          initialProof: false
      }
    })
  }

  ngOnInit(): void {
    this.negotiator.negotiate();

    this.negotiator.on('tokens-selected', (issuerTokens: any) => {
      console.log('Got tokens...', issuerTokens);
    });

  }
}
