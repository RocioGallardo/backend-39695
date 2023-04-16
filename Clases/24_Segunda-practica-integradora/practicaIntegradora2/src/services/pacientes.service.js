import { pacientesManager } from '../managers/pacientes.manager.js'

class PacientesService {
    constructor({ pacientesManager }) {
        this.pacientesManager = pacientesManager
    }
    async registrar(datosFuturoPaciente) {
        const pacientRegistrado = await this.pacientesManager.guardar(datosFuturoPaciente)
        return pacientRegistrado
    }

    async listar(criterio, opciones) {
        const pacientes = await this.pacientesManager.obtenerTodos(criterio, opciones)
        return pacientes
    }
}

export const pacientesService = new PacientesService({ pacientesManager })