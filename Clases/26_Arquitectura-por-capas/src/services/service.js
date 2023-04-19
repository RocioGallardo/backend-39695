import { infoRepository } from '../repositories/infoRepository.js'

class InfoService {
    constructor() { }
    async getInfo() {
        const result = await infoRepository.readMany()
        return result[0]
    }
}

export const infoService = new InfoService()