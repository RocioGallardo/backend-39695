import { pacientesManager } from "../managers/pacientesManager"

class PacientesService{
    async registrar (datosFuturoPaciente){
        const pacienteRegistrado = await pacientesManager.guardar(datosFuturoPaciente)
        return pacienteRegistrado
    }
}