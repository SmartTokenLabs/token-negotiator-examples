import { BrowserContext, expect, Page } from '@playwright/test'
import data from '../fixtures/data.json'

export default class BogotaPassive {
    readonly browserContext: BrowserContext
    readonly page: Page

    constructor(browserContext: BrowserContext, page: Page) {
        this.browserContext = browserContext
        this.page = page
    }

    btnBook = (id: number) => this.page.locator('button.bookButton').nth(id)
    btnPayNow = () => this.page.locator('button.paynow')
    textDefaultPrice = (id: number) => this.page.locator('div.roomCardsContainer p').nth(id)
    textOriginalPrice = (id: number) => this.page.locator('div.roomCardsContainer p:first-child').nth(id)
    textDiscountPrice = (id: number) => this.page.locator('div.roomCardsContainer p:last-child').nth(id)
    textBooked = () => this.page.locator('div.modalContainer h3')
    btnLetsGo = () => this.page.locator('button.opening-btn-tn')
    btnTokenCount = () => this.page.locator('button.tokens-btn-tn')
    labelToggle = (id: number) => this.page.locator('div.toggle-tn > label').nth(id)
    btnMetamask = () => this.page.locator("button[data-wallet='MetaMask']", { hasText: 'MetaMask' })

    async navHome () {
        await this.page.goto(data.urlExamples.bogotaActive)
        await this.page.waitForLoadState()
    }

    async checkPriceBeforeDiscount() {
        for (let i = 0; i < 3; i++) {
            await expect(this.textDefaultPrice(i)).toHaveCSS('color', 'rgba(0, 0, 0, 0.54)')
        }
    }

    async checkPriceAfterDiscount() {
        for (let i = 0; i < 3; i++) {
            await expect(this.textOriginalPrice(i)).toHaveCSS('color', 'rgb(211, 24, 46)')
            await expect(this.textDiscountPrice(i)).toHaveCSS('color', 'rgba(0, 0, 0, 0.54)')
        }
    }

    async checkToggleStatus(id: number, switchOn: boolean = true) {
        const opt = switchOn ? '2.66667px solid rgb(136, 191, 246)' : '2.66667px solid rgb(0, 95, 204)'
        await expect(this.labelToggle(id)).toHaveCSS('border', opt)
    }
}