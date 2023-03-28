
import { Router } from 'express'
import { productosGetController } from '../../controllers/api/productosGet.controller.js'
import { productosGetOneController } from '../../controllers/api/productosGetOne.controller.js'
import { productosPostController } from '../../controllers/api/productosPost.controller.js'

export const productosRouter = Router()
productosRouter.post('/', productosPostController) // guardar producto

// Deberá poder recibir por query params un limit (opcional), una page (opcional), un sort (opcional) y un query (opcional)
// - limit permitirá devolver sólo el número de elementos solicitados al momento de la petición, en caso de no recibir limit, éste será de 10.
// - page permitirá devolver la página que queremos buscar, en caso de no recibir page, ésta será de 1
// - query, el tipo de elemento que quiero buscar (es decir, qué filtro aplicar), en caso de no recibir query, realizar la búsqueda general
// - sort: asc/desc, para realizar ordenamiento ascendente o descendente por precio, en caso de no recibir sort, no realizar ningún ordenamiento

productosRouter.get('/', productosGetController) // ver productos
productosRouter.get('/:pid', productosGetOneController) // ver solo un producto según id
