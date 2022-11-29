import { BrowserContext, expect, Page } from '@playwright/test'
import data from '../fixtures/data.json'
import { metamask } from '../fixtures/credentials.json'

export default class Metamask {
    readonly browserContext: BrowserContext
    readonly page: Page

    constructor(browserContext: BrowserContext, page: Page) {
        this.browserContext = browserContext
        this.page = page
    }

    inputKey = () => this.page.locator('div.MuiFormControl-root #import-srp__srp-word-0')
    inputKeyById = (id: number) => this.page.locator(`div.MuiFormControl-root #import-srp__srp-word-${id}`)
    inputPassword = () => this.page.locator('#password')
    inputConfirmPassword = () => this.page.locator('#confirm-password')
    ckbTerms = () => this.page.locator('#create-new-vault__terms-checkbox')
    btnSubmit = () => this.page.locator("button[type='submit']")
    btnOk = (text: string) => this.page.locator(`button.btn-primary >> text='${text}'`)
    btnNetwork = () => this.page.locator('div.network-display')
    linkShowNetwork = () => this.page.locator('a.network-dropdown-content--link')
    btnShowTestNetworks = () => this.page.locator("div[data-testid$='show-testnet-conversion']").last().locator('.toggle-button')
    textNetwork = (network: string) => this.page.locator(`text='${network}'`)

    /** login to metamask and select a network */
    async login(network: string) {
        await this.page.goto(data.urlMeta)
        await this.page.waitForLoadState()
        const keys = metamask.key.split(' ')
        for (let i = 0; i < keys.length; i++) {
            await this.inputKeyById(i).fill(keys[i])
        }
        await this.inputPassword().fill(metamask.password)
        await this.inputConfirmPassword().fill(metamask.password)
        await this.ckbTerms().click()
        await this.btnSubmit().click()
        await this.btnOk('All Done').click()
        // const notDefault = await this.textNetwork(network).isHidden()
        // if (notDefault) {
        //     await this.btnNetwork().click()
        //     await this.linkShowNetwork().click()
        //     await this.btnShowTestNetworks().click()
        //     await this.btnNetwork().click()
        //     await this.textNetwork(network).click()
        // }
        // await this.page.close()
    }

    async initPage() {
        await expect.poll(async () => this.browserContext.pages().length, { timeout: 20000 }).toBe(3)
        const page = this.browserContext.pages()[2]
        await page.setViewportSize({
            width: 320,
            height: 600
        })
        return new Metamask(this.browserContext, page)
    }

    async confirm() {
        let mm = await this.initPage()
        await mm.btnOk('Next').click()
        await mm.btnOk('Connect').click()
        await expect.poll(async () => mm.browserContext.pages().length, { timeout: 10000 }).toBe(3)
        await mm.btnOk('Sign').click()
        .catch(async () => {
            mm = await this.initPage()
            await mm.btnOk('Sign').click()
        })
    }
}