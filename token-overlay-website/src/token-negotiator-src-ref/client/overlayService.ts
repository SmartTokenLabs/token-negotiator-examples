// This is a client service designed to initiate cross origin communication with the overlay component
// to enable user interaction to load tokens into the client website for use.
// @ts-nocheck

import { getCookie } from "../utils/index";
import { createOverlayMarkup, createFabButton, createToken } from './componentFactory';
import "./../../theme/style.css";

class OverlayService {
  constructor(config, options, filter) {
    
    this.config = config;
    this.options = options;
    this.filter = filter;

    this.embedClientOverlay( this.config.tokenName, this.options, this.filter);
    
    // window.addEventListener("click", this.onClickOutsideOfOverlay);
    // window.removeEventListener("click", onClickOutsideOfOverlay);

    window.tokenToggleSelection = (event) => {
      console.log('toggle token');
      // let output: any = [];
      // document.querySelectorAll('.token .mobileToggle').forEach((token: any) => {
      //   if (token.checked === true) output.push(JSON.parse(token.dataset.token));
      // });
      // negotiatorOverlayService.selectedTokens = output;
      // negotiatorOverlayService.eventSender.emitSelectedTokens();
    }

  }

  // onClickOutsideOfOverlay = (e) => {
  //   // if(
  //   //   e.target.className !== "overlay-fab-button-tn" ||
  //   //   e.target.className !== "toggle-tn"
  //   // ){
  //   //   this.openOverlay(false);
  //   // } 
  // };

  embedClientOverlay(tokenName, options, filter) {
    setTimeout(() => {
      let refTokenSelector = document.querySelector(".overlay-tn");
      if (refTokenSelector) {
        refTokenSelector.innerHTML += createOverlayMarkup();
        refTokenSelector.innerHTML += createFabButton("");
        let refTokenContainerSelector = document.querySelector(".token-container");
        // data: any, index: any, tokenImage: string
        refTokenContainerSelector.innerHTML = createToken(
          'Hi',
          0,
          'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png'
        );
        // inject tokens...
        // a. open iframe
        // b. read cookies
        // c. store all tokens
        // d. feed token only when toggle is on
      }
    }, 0);
  }

  openOverlay(openOverlay:boolean){
    const element = document.querySelector(".overlay-tn .overlay");
    element.classList.toggle("open");
    if(openOverlay) element.classList.add("open");
    else element.classList.remove("open");
  }
  
  overlayClickHandler() {
    const element = document.querySelector(".overlay-tn .overlay");
    const isOpen = element.classList.contains("open");
    element.classList.toggle("open");
    if (!isOpen) this.openOverlay(true);
    else this.openOverlay(false);    
  }

}

export default OverlayService;
