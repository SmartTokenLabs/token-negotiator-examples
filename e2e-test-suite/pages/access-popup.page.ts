import { Page } from "@playwright/test";

export default class AccessPopup {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    iframeClipboard = () => this.page.frameLocator('iframe[allow="clipboard-read"]')
    btnAccept = () => this.iframeClipboard().locator('#tn-access-accept')
    btnDeny = () => this.iframeClipboard().locator('#tn-access-deny')
    // btnAccept = () => this.page.locator('#tn-access-accept')
    // btnDeny = () => this.page.locator('#tn-access-deny')
}