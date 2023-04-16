import { CriterioBusquedaPacientes } from '../../models/CriterioBusquedaPacientes.js'
import { DatosPaginacion } from '../../models/DatosPaginacion.js'
import { pacientesService } from '../../services/pacientes.service.js'

export async function pacientesGetController(req, res, next) {
    try {
        const datosPaginacion = new DatosPaginacion({
            limit: req.query.limit || 5,
            page: req.query.page || 1
        })

        const criterioBusquedaPacientes = new CriterioBusquedaPacientes(req.query)
        const result = await pacientesService.listar(
            criterioBusquedaPacientes,
            datosPaginacion
        )

        const context = {
            titulo: 'Pacientes',
            hayPacientes: result.docs.length > 0,
            pacientes: result.docs,
            limit: result.limit,
            page: result.page,
            totalPages: result.totalPages,
            hasNextPage: result.hasNextPage,
            nextPage: result.nextPage,
            hasPrevPage: result.hasPrevPage,
            prevPage: result.prevPage,
            pagingCounter: result.pagingCounter,
        }

        res.render('pacientes.handlebars', context)
    } catch (error) {
        res.send('error:' + JSON.stringify(error))
    }
}
