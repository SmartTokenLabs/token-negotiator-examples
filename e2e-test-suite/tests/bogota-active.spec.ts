import test, { expect } from '../fixtures/modules'
import data from '../fixtures/data.json'

test.describe('Test Suite - Bogota Active', async () => {
    test.afterEach(async ({page}) => {
        await page.close()
        // await page2.close()
    })
    test('Test - Apply no discount ticket', async ({bogotaActive}) => {
        /** verify ticket price and Pay Now button text when no discount ticket applied */
        await bogotaActive.navHome()
        await bogotaActive.checkPriceBeforeDiscount()
        await bogotaActive.btnBook(0).click()
        await expect(bogotaActive.btnPayNow()).toHaveText('Pay Now (no discount)')
        await bogotaActive.btnPayNow().click()
        await expect(bogotaActive.textBooked()).toHaveText('Booking Confirmed!')
    })

    test('Test - Apply no discount ticket by switching toggle off', async ({ticketIssuer, accessPopup, emailApi, bogotaActive}) => {
        /** create a ticket in ticket issuer page */
        await ticketIssuer.navHome()
        // await expect.poll(async () => accessPopup.btnAccept()).toBeDefined()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(1, email)

        /** verify ticket price after discount*/
        await bogotaActive.navHome()
        // await bogotaActive.btnLetsGo().click()
        // await expect.poll(async () => bogotaActive.textOriginalPrice(0)).toBeDefined()
        await bogotaActive.checkPriceAfterDiscount()

        /** verify discount ticket count = 1*/
        await expect(bogotaActive.btnTokenCount()).toHaveText('1 token available')
        await bogotaActive.btnTokenCount().click()

        /** verify ticket price before discount */
        await bogotaActive.labelToggle(0).click()
        await bogotaActive.checkPriceBeforeDiscount()
        
        /** book and verify Pay Now button text when no discount ticket applied */
        await bogotaActive.btnBook(0).click()
        await expect(bogotaActive.btnPayNow()).toHaveText('Pay Now (no discount)')

        /** pay and verify payment is successful */
        await bogotaActive.btnPayNow().click()
        await expect(bogotaActive.textBooked()).toHaveText('Booking Confirmed!')
    })

    test('Test - Apply discount ticket', async ({ticketIssuer, emailApi, accessPopup, bogotaActive, metamask, attestation}) => {
        /** create a ticket in ticket issuer page */
        await ticketIssuer.navHome()
        // await expect.poll(async () => accessPopup.btnAccept()).toBeDefined()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(1, email)

        /** login to metamask account */
        await metamask.login()

        /** verify ticket price after discount */
        await bogotaActive.navHome()
        // await bogotaActive.btnLetsGo().click()
        // await expect.poll(async () => bogotaActive.textOriginalPrice(0)).toBeDefined()
        await bogotaActive.checkPriceAfterDiscount()

        /** verify discount ticket count = 1 and toggle status = on */
        await expect(bogotaActive.btnTokenCount()).toHaveText('1 token available')
        await bogotaActive.btnTokenCount().click()
        await bogotaActive.checkToggleStatus(0)

        /** book and verify Pay Now button text when discount ticket applied */
        await bogotaActive.btnBook(0).click()
        await expect(bogotaActive.btnPayNow()).toHaveText('Use Token')
        await bogotaActive.btnPayNow().click()

        /** get and enter attestation otp */
        await attestation.textCode(0).waitFor()
        const otp = await emailApi.getAttestation()
        await attestation.enterAttestationCode(otp)

        /** confirm metamask transaction */
        await attestation.divMetaMask().click()
        await metamask.confirm()

        /** pay and verify payment is successful */
        await bogotaActive.btnPayNow().click()
        await expect(bogotaActive.textBooked()).toHaveText('Booking Confirmed!')
    })

    test('Test - Apply discount ticket by switching toggle on', async ({ticketIssuer, accessPopup, bogotaActive, metamask, attestation, emailApi}) => {
        /** create a ticket in ticket issuer page */
        await ticketIssuer.navHome()
        // await expect.poll(async () => accessPopup.btnAccept()).toBeDefined()
        await accessPopup.btnAccept().click()
        const email = await emailApi.genRandomEmail()
        await ticketIssuer.createTickets(1, email)

        /** login to metamask account */
        await metamask.login()

        /** verify ticket price after discount */
        await bogotaActive.navHome()
        // await bogotaActive.btnLetsGo().click()
        // await expect.poll(async () => bogotaActive.textOriginalPrice(0)).toBeDefined()
        await bogotaActive.checkPriceAfterDiscount()

        /** verify discount ticket count = 1 and toggle status = on */
        await expect(bogotaActive.btnTokenCount()).toHaveText('1 token available')
        await bogotaActive.btnTokenCount().click()
        await bogotaActive.checkToggleStatus(0)
        
        /** toggle off discount ticket, verify its status = on and ticket price before discount */
        await bogotaActive.labelToggle(0).click()
        await bogotaActive.checkToggleStatus(0, false)
        // await expect.poll(async () => bogotaActive.textDefaultPrice(0)).toBeDefined()
        await bogotaActive.checkPriceBeforeDiscount()

        /** toggle on discount ticket and verify ticket price after discount */
        await bogotaActive.labelToggle(0).click()
        // await expect.poll(async () => bogotaActive.textOriginalPrice(0)).toBeDefined()
        await bogotaActive.checkPriceAfterDiscount()

        /** book and verify Pay Now button text when discount ticket applied */
        await bogotaActive.btnBook(0).click()
        await expect(bogotaActive.btnPayNow()).toHaveText('Use Token')
        await bogotaActive.btnPayNow().click()

        /** get and enter attestation otp */
        await attestation.textCode(0).waitFor()
        const otp = await emailApi.getAttestation()
        await attestation.enterAttestationCode(otp)

        /** confirm metamask transaction */        
        await attestation.divMetaMask().click()
        await metamask.confirm()

         /** pay and verify payment is successful */       
        await bogotaActive.btnPayNow().click()
        await expect(bogotaActive.textBooked()).toHaveText('Booking Confirmed!')
    })
})