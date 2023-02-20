import test, { expect } from '../fixtures/modules'

test.describe('Test Suite - Ticket Issuer', async () => {
    test.afterEach(async ({page}) => {
        await page.close()
        // await page2.close()
    })
    test('Test - Create single ticket', async ({ticketIssuer, accessPopup, emailApi}) => {
        /** verify ticket count when 1 ticket is created */
        await ticketIssuer.navHome()
        // await expect.poll(async () => accessPopup.btnAccept()).toBeDefined()
        // await expect.poll(async () => await accessPopup.btnAccept().count()).toBe(1)
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(1, email)
    })
    test('Test - Create multiple tickets', async ({ticketIssuer, accessPopup, emailApi}) => {
        /** verify ticket count when 4 tickets are created */
        await ticketIssuer.navHome()
        // await expect.poll(async () => accessPopup.btnAccept()).toBeDefined()
        await expect(async () => accessPopup.btnAccept() !== undefined).toPass()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(4, email)
    })
})