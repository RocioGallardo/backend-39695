import { validarEnteroPositivo } from '../utils/validaciones.js'

export class DatosPaginacion {
  constructor({ limit, page }) {
    if (limit) {
      this.limit = validarEnteroPositivo(Number(limit), 'limit')
    }
    if (page) {
      this.page = validarEnteroPositivo(Number(page), 'page')
    }
    if (limit && page) {
      this.pagination = true
    } else {
      this.pagination = false
    }
  }
}