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

    inputKeyById = (id: number) => this.page.locator(`div.MuiFormControl-root #import-srp__srp-word-${id}`)
    inputPassword = () => this.page.locator('#password')
    inputConfirmPassword = () => this.page.locator('#confirm-password')
    ckbTerms = () => this.page.locator('#create-new-vault__terms-checkbox')
    btnSubmit = () => this.page.locator("button[type='submit']")
    btnPrimary = (text: string) => this.page.locator(`button.btn-primary >> text='${text}'`)
    iArrowDown = () => this.page.locator('i.fa-arrow-down')

    /** login to metamask and select a network */
    async login() {
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
        await this.btnPrimary('All done').click()
    }

    async initPage() {
        await expect.poll(async () => this.browserContext.pages().length, { timeout: 20000 }).toBe(2)
        const page = this.browserContext.pages()[1]
        await page.setViewportSize({
            width: 320,
            height: 600
        })
        return new Metamask(this.browserContext, page)
    }

    async confirm() {
        let mm = await this.initPage()
        await mm.btnPrimary('Next').click()
        await mm.btnPrimary('Connect').click()
        await expect.poll(async () => mm.browserContext.pages().length, { timeout: 10000 }).toBe(2)
        await mm.iArrowDown().click({timeout: 3000}).catch(() => null)
        await mm.btnPrimary('Sign').click()
    }
}