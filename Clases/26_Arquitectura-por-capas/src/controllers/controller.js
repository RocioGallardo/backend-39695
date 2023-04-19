import { infoService } from '../services/service.js'

export async function getInfoController(req, res, next) {
    const info = await infoService.getInfo()
    res.send(info)
}