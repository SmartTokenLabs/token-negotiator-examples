import { Page } from '@playwright/test'

export default class Attestation {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    iframeAttestation = () => this.page
    .frameLocator('div.modal-body-tn > iframe')
    .frameLocator("iframe[src*='attestation.id']")
    textCode = (id: number) => this.iframeAttestation().locator(`#code${id}`)
    btnConfirm = () => this.iframeAttestation().locator('div.input-div > button')
    divMetaMask = () => this.iframeAttestation().locator('div.web3modal-modal-card > div:first-child', { hasText: 'MetaMask' })
    // textCode = (id: number) => this.page.locator(`#code${id}`)
    // btnConfirm = () => this.page.locator('div.input-div > button')
    // divMetaMask = () => this.page.locator('div.web3modal-modal-card > div:first-child', { hasText: 'MetaMask' })

    async enterAttestationCode(code: string) {
        for (let i = 0; i < code.length; i++) {
            await this.textCode(i).fill(code[i])
        }
        await this.textCode(5).type('Tab')
        await this.btnConfirm().click()
    }
}