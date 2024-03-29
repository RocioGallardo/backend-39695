import mongoose from 'mongoose'
import { DatosFuturoPaciente } from '../../src/models/DatosFuturoPaciente.js'
import { pacientesService } from '../../src/services/pacientes.service.js'
import { MONGODB_CNX_STR } from '../../src/config/mongodb.js'

await mongoose.connect(MONGODB_CNX_STR)

const datosFuturoPaciente = new DatosFuturoPaciente({
    nombre: 'ro',
    apellido: 'gallardo',
    dni: '123456',
    edad: 27
})

const pacienteRegistrado = await pacientesService.registrar(datosFuturoPaciente)

console.log(pacienteRegistrado)

mongoose.connection.close()