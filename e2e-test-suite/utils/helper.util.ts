import data from '../fixtures/data.json'
export default class Helper {

    static wait = async (duration: number) => new Promise(resolve => setTimeout(resolve, duration))

    static getBaseURL() {
        switch (process.env.ENV) {
            case 'prod':
                return data.urlEnv.prod
            case 'stage':
                return data.urlEnv.stage
            default:
                return data.urlEnv.stage
        }
    }
}