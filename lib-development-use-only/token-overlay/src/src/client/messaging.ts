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

        // Uncomment to test popup mode
        //this.iframeStorageSupport = false;

        console.log("Send request: ");
        console.log(request);

        if (this.iframeStorageSupport){
            return this.sendIframe(request);
        } else {
            return this.sendPopup(request);
        }
    }

    private sendIframe(request:MessageRequestInterface){

        return new Promise((resolve, reject) => {

            let id = Messaging.getUniqueEventId();
            let url = `${request.origin}?action=${request.action}&filter=${JSON.stringify(request.filter)}&evtid=${id}`;

            let iframe = this.createIframe(url);

            //this.openIframe(url).then((iframeRef:any) => {

                // TODO: iframe error handling here
                //if (iframeRef) {

                    this.setResponseListener(id, resolve, reject, ()=>{
                        iframe.parentNode.removeChild(iframe);
                    });

                    // TODO: Is this required? won't the URL trigger it?
                    /*iframeRef.contentWindow.postMessage({
                        evt: 'getTokens'
                    }, request.origin);*/

                //}

            //});

            iframe.src = url;

        });
    }

    private sendPopup(request:MessageRequestInterface){

        return new Promise((resolve, reject) => {

            let id = Messaging.getUniqueEventId();

            var tabRef:any = null;

            this.setResponseListener(id, resolve, reject, ()=>{
                if (tabRef)
                    tabRef.close();
            });

            tabRef = window.open(
                `${request.origin}?action=get-tab-issuer-tokens&filter=${request.filter}&evtid=${id}`,
                "win1",
                "left=0,top=0,width=320,height=320"
            );

        });

    }

    private setResponseListener(id:any, resolve:any, reject:any, cleanUp:any){

        let received = false;
        let timer:any = null;

        let listener = (event: any) => {

            console.log("event response received");
            console.log(event.data);

            if (event.data.evtid == id) {
                received = true;
                resolve(event.data);
                if (timer)
                    clearTimeout(timer);
                afterResolveOrError();
                return;
            }

            console.log("Does not match ID " + id);
        }

        let afterResolveOrError = () => {
            removePostMessageListener(listener);
            cleanUp();
        };

        attachPostMessageListener(listener);

        timer = setTimeout(()=>{
            if (!received)
                reject("Failed to receive response from window/iframe");
            afterResolveOrError();
        }, 5000);
    }

    async getCookieSupport(testOrigin:string){
        if (this.iframeStorageSupport === null)
            this.iframeStorageSupport = await this.thirdPartyCookieSupportCheck(testOrigin);

        return this.iframeStorageSupport;
    }

    private thirdPartyCookieSupportCheck(origin:string):Promise<boolean> {

        // TODO SML's host a webpage with cache that we use to test cookies
        // This so we don't need to check if the TN is using On/Off chain tokens etc.

        //if(this.offChainTokens.tokenKeys.length) {
        return new Promise((resolve, reject) => {

            let id = Messaging.getUniqueEventId();
            let url = origin + '?action=cookie-support-check&evtid=' + id;

            let iframe = this.createIframe(url);


            //this.openIframe(url).then((iframeRef:any) => {

                this.setResponseListener(
                    id,
                    (responseData:any)=>{
                        resolve(!!responseData.thirdPartyCookies);
                    },
                    reject,
                    () => {
                        iframe.parentNode.removeChild(iframe);
                    }
                );

                console.log("listener set");
            //});

            iframe.src = url;

        });

    }

    private createIframe(url: any) {

        //return new Promise((resolve, reject) => {

            const iframe = document.createElement('iframe');

            iframe.src = url;

            iframe.style.width = '1px';

            iframe.style.height = '1px';

            iframe.style.opacity = '0';

            document.body.appendChild(iframe);

            /*iframe.onload = () => {
                console.log("Frame loaded");
                resolve(iframe);
            };*/

            return iframe;
        //});
    }

    private static getUniqueEventId(){
        return new Date().getTime();
    }
}