import { pacientesManager } from '../../managers/pacientes.manager.js'
import { CriterioBusquedaPacientes } from '../../models/CriterioBusquedaPacientes.js'
import { DatosFuturoPaciente } from '../../models/DatosFuturoPaciente.js'
import { DatosPaginacion } from '../../models/DatosPaginacion.js'
import { pacientesService } from '../../services/pacientes.service.js'

export async function postPacientes(req, res, next) {
    try {
        const datosFuturoPaciente = new DatosFuturoPaciente(req.body)
        const pacienteRegistrado = await pacientesService.registrar(datosFuturoPaciente)
        res.status(201).json(pacienteRegistrado)
    } catch (error) {
        next(error)
    }
}

export async function getPacientes(req, res, next) {
    try {
        const criterioBusquedaPacientes = new CriterioBusquedaPacientes(req.query)
        const datosPaginacion = new DatosPaginacion(req.query)
        const pacientes = await pacientesService.listar(
            criterioBusquedaPacientes,
            datosPaginacion
        )
        res.json(pacientes)
    } catch (error) {
        next(error)
    }
}
