import { test as base } from '../fixtures/init'
import Metamask from '../pages/metamask.page'
import TicketIssuer from '../pages/ticket-issuer.page'
import BogotaPassive from '../pages/bogota-passive.page'
import BogotaActive from '../pages/bogota-active.page'
import AccessPopup from '../pages/access-popup.page'
import Attestation from '../pages/attestation.page'
import EmailApi from '../apis/email.api'

const test = base.extend<{
    metamask: Metamask
    ticketIssuer: TicketIssuer
    bogotaPassive: BogotaPassive
    bogotaActive: BogotaActive
    accessPopup: AccessPopup
    attestation: Attestation
    emailApi: EmailApi
}>({
    metamask: async ({browserContext, page}, use) => {
        const metamask = new Metamask(browserContext, page)
        await use(metamask)
    },
    ticketIssuer: async ({browserContext, page}, use) => {
        const ticketIssuer = new TicketIssuer(browserContext, page)
        await use(ticketIssuer)
    },
    bogotaPassive: async ({browserContext, page}, use) => {
        const bogotaPassive = new BogotaPassive(browserContext, page)
        await use(bogotaPassive)
    },
    bogotaActive: async ({browserContext, page}, use) => {
        const bogotaActive = new BogotaActive(browserContext, page)
        await use(bogotaActive)
    },
    accessPopup: async ({page}, use) => {
        const accessPopup = new AccessPopup(page)
        await use(accessPopup)
    },
    attestation: async ({page}, use) => {
        const attestation = new Attestation(page)
        await use(attestation)
    },
    emailApi: async ({}, use) => {
        const emailApi = new EmailApi()
        await use(emailApi)
    },
})

export default test
export const expect = test.expect