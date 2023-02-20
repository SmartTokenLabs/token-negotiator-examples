import { BrowserContext, expect, Page } from '@playwright/test'
import data from '../fixtures/data.json'

export default class BogotaPassive {
    readonly browserContext: BrowserContext
    readonly page: Page

    constructor(browserContext: BrowserContext, page: Page) {
        this.browserContext = browserContext
        this.page = page
    }
    
    btnRefreshToken = () => this.page.locator('button[title="Refresh tokens"]')
    textTicketCount = () => this.page.locator('div[class=MuiCardContent-root] > h1')
    textFreeShuttle = () => this.page.locator('p.applyDiscountCopyContainer')
    btnBook = (id: number) => this.page.locator('button.MuiButton-root').nth(id)
    textDiscount = () => this.page.locator('div.subTitle')
    divToken = (id: number) => this.page.locator('div.tokenCard').nth(id)
    btnPayNow = () => this.page.locator("div.booking button >> text='Pay Now'")

    async navHome () {
        await this.page.goto(data.urlExamples.bogotaPassive)
        await this.page.waitForLoadState()
    }

    checkPopupMessage (expectedText: string) {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe(expectedText)
            await dialog.accept()
        })
    }
}