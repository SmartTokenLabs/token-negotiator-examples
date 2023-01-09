import { request, expect } from "@playwright/test";
import { urlEmailApi } from '../fixtures/data.json'
import Helper from "../utils/helper.util";

export default class EmailApi {

    private login: string = ''
    private domain: string = ''

    async apiContext() {
        return await request.newContext({
            baseURL: urlEmailApi
        })
    }

    async genRandomEmail() {
        const req = await this.apiContext()
        const res = await req.get('', {
            params: {
                action: 'genRandomMailbox'
            }
        })
        expect(res.status()).toBe(200)
        const [email] = await res.json()
        const [login, domain] = email.split('@')
        this.login = login
        this.domain = domain
        return email
    }

    async getInboxWithRetry(maxRetries: number): Promise<any> {
        if (!maxRetries) return null
        const req = await this.apiContext()
        const res = await req.get('', {
            params: {
                action: 'getMessages',
                login: this.login,
                domain: this.domain
            }
        })
        expect(res.status()).toBe(200)
        const inbox = await res.json()
        if (!inbox.length) {
            await Helper.wait(2000)
            return await this.getInboxWithRetry(maxRetries - 1)
        }
        return inbox[0]['id']
    }

    async getAttestation() {
        const id = await this.getInboxWithRetry(5)
        expect(id).not.toBeNull()
        const req = await this.apiContext()
        const res = await req.get('', {
            params: {
                action: 'readMessage',
                login: this.login,
                domain: this.domain,
                id
            }
        })
        expect(res.status()).toBe(200)
        const { body } = await res.json()
        const posStart = body.indexOf('\"code\"') + 7
        const posEnd = posStart + 6
        const otp = body.substring(posStart, posEnd)
        expect(Number(otp)).not.toBeNaN()
        return otp
    }
}