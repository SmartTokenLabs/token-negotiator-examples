import { test as base, BrowserContext, chromium, Page } from '@playwright/test'
import { extMeta } from '../fixtures/data.json'

export const test = base.extend<{
    browserContext: BrowserContext
    page: Page
    // page2: Page
}>({
    browserContext: async ({}, use) => {
        const extPath = require('path').join(__dirname, extMeta)
        const browserContext: BrowserContext = await chromium.launchPersistentContext('', {
            args: [
                `--disable-extensions-except=${extPath}`,
                `--load-extension=${extPath}`
            ]
        })
        await browserContext.grantPermissions(['clipboard-read', 'clipboard-write'])
        await Promise.all([
            browserContext.waitForEvent('page'),
            browserContext.backgroundPages()[0]
        ])
        await use(browserContext)
    },
    page: async ({browserContext}, use) => {
        const [page, page2] = browserContext.pages()
        await page.bringToFront()
        await page2.close()
        await use(page)
    },
    // page2: async ({browserContext}, use) => {
    //     const [, page2] = browserContext.pages()
    //     await use(page2)
    // }
})
// export const test = baseTest;
// export const expect = test.expect;