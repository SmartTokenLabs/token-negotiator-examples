import {attachPostMessageListener, removePostMessageListener} from "../utils";

interface MessageRequestInterface {
    issuer:string,
    action:string,
    origin:string,
    filter?:string[],
    noResponseRequired?:boolean // TODO: do some requests not require response payload or acknowledgement?
}

export class Messaging {

    iframeStorageSupport:boolean = null;
    requestQueue = {};

    constructor() {
        // Should we just check cookie support on initialisation or when requested?
    }

    async sendMessage(request:MessageRequestInterface){

        if (this.iframeStorageSupport === null)
            this.iframeStorageSupport = await this.thirdPartyCookieSupportCheck(request.origin);

        if (this.iframeStorageSupport){
            return this.sendIframe(request);
        } else {
            return this.sendPopup(request);
        }
    }

    private async sendIframe(request:MessageRequestInterface){

        return new Promise((resolve, reject) => {

            let id = Messaging.getUniqueEventId();
            let url = `${request.origin}?action=${request.action}&filter=${JSON.stringify(request.filter)}&evtid=${id}`;

            this.openIframe(url).then((iframeRef:any) => {

                // TODO: iframe error handling here
                if (iframeRef) {

                    this.setResponseListener(id, resolve, reject, ()=>{
                        iframeRef.parentNode.remove(iframeRef);
                    });

                    // TODO: Is this required? won't the URL trigger it?
                    /*iframeRef.contentWindow.postMessage({
                        evt: 'getTokens'
                    }, request.origin);*/

                }

            });

        });
    }

    private async sendPopup(request:MessageRequestInterface){

        return new Promise((resolve, reject) => {

            let id = Messaging.getUniqueEventId();

            let tabRef = window.open(
                `${request.origin}?action=get-tab-issuer-tokens&filter=${request.filter}&evtid=${id}`,
                "win1",
                "left=0,top=0,width=320,height=320"
            );

            this.setResponseListener(id, resolve, reject, ()=>{
                tabRef.close()
            });

        });

    }

    private setResponseListener(id:any, resolve:any, reject:any, cleanUp:any){

        let received = false;

        let listener = (event: any) => {
            if (event.data.evtid === id) {
                received = true;
                resolve(event.data);
            }
        }

        attachPostMessageListener(listener);

        setTimeout(()=>{
            if (!received)
                reject("Failed to receive response from window/iframe");
            removePostMessageListener(listener);
        }, 5000);
    }

    async getCookieSupport(testOrigin:string){
        if (this.iframeStorageSupport === null)
            this.iframeStorageSupport = await this.thirdPartyCookieSupportCheck(testOrigin);

        return this.iframeStorageSupport;
    }

    private async thirdPartyCookieSupportCheck(origin:string):Promise<boolean> {

        // TODO SML's host a webpage with cache that we use to test cookies
        // This so we don't need to check if the TN is using On/Off chain tokens etc.

        //if(this.offChainTokens.tokenKeys.length) {
        return new Promise((resolve, reject) => {

            let id = Messaging.getUniqueEventId();
            let url = origin + '?action=cookie-support-check&evtid=' + id;

            this.openIframe(url).then((iframeRef:any) => {

                this.setResponseListener(
                    id,
                    (responseData:any)=>{
                        resolve(!!responseData.thirdPartyCookies);
                    },
                    reject,
                    () => {
                        iframeRef.parentNode.remove(iframeRef);
                    }
                );
            });

        });

    }

    private async openIframe(url: any) {

        return new Promise((resolve, reject) => {

            const iframe = document.createElement('iframe');

            iframe.src = url;

            iframe.style.width = '1px';

            iframe.style.height = '1px';

            iframe.style.opacity = '0';

            document.body.appendChild(iframe);

            iframe.onload = () => {
                resolve(iframe);
            };
        });
    }

    private static getUniqueEventId(){
        return new Date().getTime();
    }
}