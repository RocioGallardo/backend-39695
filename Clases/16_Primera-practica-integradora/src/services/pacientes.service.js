import { pacientesManager } from '../managers/PacientesManager.js'

class PacientesService {
    async registrar(datosFuturoPaciente) {
        const pacientRegistrado = await pacientesManager.guardar(datosFuturoPaciente)
        return pacientRegistrado
    }

    async listar() {
        const pacientes = await pacientesManager.obtenerTodos()
        return pacientes
    }
}

export const pacientesService = new PacientesService()