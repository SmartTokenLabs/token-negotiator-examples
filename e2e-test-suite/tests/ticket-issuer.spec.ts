import test, { expect } from '../fixtures/modules'

test.describe('Test Suite - Ticket Issuer', async () => {
    test.afterEach(async ({page, page2}) => {
        await page.close()
        await page2.close()
    })
    test('Test - Create single ticket', async ({ticketIssuer, accessPopup, emailApi}) => {
        /** verify ticket count when 1 ticket is created */
        await ticketIssuer.navHome()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(1, email)
    })
    test('Test - Create multiple tickets', async ({ticketIssuer, accessPopup, emailApi}) => {
        /** verify ticket count when 4 tickets are created */
        await ticketIssuer.navHome()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(4, email)
    })
})