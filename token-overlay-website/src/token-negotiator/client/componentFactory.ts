// @ts-nocheck
export const createOverlayMarkup = () => {
  return `
    <div class="overlay">
      <div class="brand"></div>
      <p class="headline">Available Tokens</p>
      <div class="token-container">
        <p style="padding: 0 16px; color: grey">No tokens available.</p>
      </div>
    </div>
  `;
};

interface CreateTokenInterface {
  tokenKey: string;
  title: string;
  detail: string[];
  index: number;
  emblem: string;
  data: any;
}

export const createToken = (config: CreateTokenInterface) => {
  const { tokenKey, title, data, detail, index, emblem } = config;
  return `
    <div class='token'>
      <div class='content'>
        <img class='emblem' src=${emblem} />
        <div class='data'>
          <p class='title'>${title}</p>
          <p class='detail'>${detail}</p>
        </div>
      </div>
      <div class='toggle'>
        <input data-key='${tokenKey}' data-token='${JSON.stringify(data)}' onClick='tokenToggleSelection(event)' data-index='${index}' type='checkbox' name='toggle${index}' class='mobileToggle toggle-tn' id='toggle${index}'>
        <label for='toggle${index}'></label>
      </div>
    </div>
  `;
};

export const createFabButton = () => {
  return `
    <button class="overlay-fab-button-tn" onclick="window.negotiator.overlayClickHandler()">
      <div style="pointer-events: none;">
        <svg style="width:72%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 26">
          <path fill="white" d="M52.9924 0.955933H28.0025V25.9639H52.9924V0.955933Z"></path>
          <path fill="white" d="M0.508545 0.956909V5.97799C5.80557 5.97799 10.8856 8.08377 14.6312 11.832C18.3767 15.5803 20.481 20.664 20.481 25.9649H25.4985V0.956909H0.508545Z"></path>
        </svg>
      </div>
    </button>
  `;
}

