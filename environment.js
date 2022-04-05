import config from "./tokenConfig.json";

export const updateTokenConfig = (config) => {

    if (document.location.hostname !== "localhost"){

        if (document.location.pathname.indexOf("token-negotiator-examples") === 1){
            config.tokenOrigin = "https://tokenscript.github.io/token-negotiator-examples/token-outlet-website/";
        } else {
            config.tokenOrigin = "https://tokenscript.github.io/token-negotiator-gh-pages/token-outlet-website/";
        }
    }

    return config;
}