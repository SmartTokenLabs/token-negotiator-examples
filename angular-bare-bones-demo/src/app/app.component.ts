import { Component, OnInit } from '@angular/core';
import { Client } from '@tokenscript/token-negotiator';
import { Issuer } from '@tokenscript/token-negotiator/dist/client/interface';

import issuersData from './issuers';



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
    })
  }

  ngOnInit(): void {
    this.negotiator.negotiate();

    this.negotiator.on('connected-wallet', (wallet: any) => {
      console.log('connected wallet ==>', wallet);
      this.negotiator.getUi().openOverlay();
    });

    this.negotiator.on('tokens-selected', (issuerTokens: any) => {
      console.log('Got tokens...', issuerTokens);
    });

  }
}
