import { BrowserContext, expect, Page } from '@playwright/test'
import data from '../fixtures/data.json'

export default class TicketIssuer {
    readonly browserContext: BrowserContext
    readonly page: Page

    constructor(browserContext: BrowserContext,  page: Page) {
        this.browserContext = browserContext
        this.page = page
    }

    inputEmail = () => this.page.locator('#email')
    btnCreateTicket = (id: number) => this.page.locator('div.ticketWrapper > button.makeTicket').nth(id)
    divToken = (id: number) => this.page.locator('div.ticketContainer h2').nth(id)

    async navHome () {
        await this.page.goto(data.urlExamples.ticketIssuer)
        await this.page.waitForLoadState()
        // await this.page.waitForTimeout(1000)
    }

    async createTickets(count: number, email: string) {
        for (let i = 0; i < count; i++) {
            await this.inputEmail().fill(email)
            await this.btnCreateTicket(i).click()
            expect(await this.divToken(i).innerText()).toBe(i + 1 + '')
        }
    }
}