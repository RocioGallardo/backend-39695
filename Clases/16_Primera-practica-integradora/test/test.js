import mongoose from 'mongoose'
import { pacientesService } from '../src/services/pacientes.service.js'
import { DatosFuturoPaciente } from '../src/models/DatosFuturoPaciente.js'
import { URLMongo} from '../src/config/mongodb.js'

await mongoose.connect(URLMongo)

const datosFuturoPaciente = new DatosFuturoPaciente({
    nombre: 'rocio',
    apellido: 'gallardo',
    dni: '123456',
    edad: 27
})

const pacienteRegistrado = await pacientesService.registrar(datosFuturoPaciente)

console.log(pacienteRegistrado)

mongoose.connection.close()
