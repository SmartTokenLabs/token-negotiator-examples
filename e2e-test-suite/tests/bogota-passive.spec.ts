import test, { expect } from '../fixtures/modules'
import data from '../fixtures/data.json'

test.describe('Test Suite - Bogota Passive', async () => {
    test.afterEach(async ({page, page2}) => {
        await page.close()
        await page2.close()
    })
    test('Test - No discount ticket applied', async ({bogotaPassive, accessPopup}) => {
        /** verify ticket count and discount message when no discount ticket applied */
        await bogotaPassive.navHome()
        await accessPopup.btnAccept().click()
        await expect.poll(async () => await bogotaPassive.textTicketCount().innerText(), { timeout: 5000 }).toContain('0')
        await bogotaPassive.btnBook(0).click()
        expect(await bogotaPassive.divToken(0).count()).toBe(0)
        await bogotaPassive.btnPayNow().click()
        bogotaPassive.checkPopupMessage(data.dialogMessage.noToken)
    })
    test('Test - With discount ticket applied', async ({ticketIssuer, accessPopup, emailApi, metamask, bogotaPassive, attestation}) => {
        /** create a ticket in ticket issuer page */
        await ticketIssuer.navHome()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(1, email)
        
        /** login to metamask account */
        await metamask.login(data.network.goerli)
        
        /** check ticket count = 1 in bogota passive page */
        await bogotaPassive.navHome()
        await expect.poll(async () => await bogotaPassive.textTicketCount().innerText(), { timeout: 5000 }).toContain('1')
        await bogotaPassive.btnBook(0).click()
        expect(await bogotaPassive.divToken(0).count()).toBe(1)
        await bogotaPassive.divToken(0).click()

        /** get and enter attestation otp */
        await attestation.textCode(0).waitFor()
        const otp = await emailApi.getAttestation()
        await attestation.enterAttestationCode(otp)

        /** confirm metamask transaction */
        await attestation.divMetaMask().click()
        await metamask.confirm()
        await attestation.btnClose().click()
        
        /** pay and verify discount message */
        await bogotaPassive.btnBook(0).click()
        await bogotaPassive.btnPayNow().click()
        bogotaPassive.checkPopupMessage(data.dialogMessage.withToken)
    })
})