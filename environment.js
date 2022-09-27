
export const updateTokenConfig = (config) => {

    if (document.location.hostname !== "localhost"){

        /*if (document.location.hostname.startsWith("192.168.")){
            config.tokenOrigin = document.location.protocol + "//" + document.location.hostname + ":3002";
            return config;
        }*/

        if (document.location.pathname.indexOf("token-negotiator-examples") === 1){
            config.tokenOrigin = "https://stltesting.tk/token-outlet/";
        } else if (document.location.pathname.indexOf("token-negotiator-gh-pages") === 1) {
            config.tokenOrigin = "https://tokenscript.github.io/token-negotiator-gh-pages/token-outlet-website/";
        }
    }

    return config;
}