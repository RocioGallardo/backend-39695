import { personasDao } from '../daos/personas.dao.js'
import { Persona } from '../models/Persona.js'
import { personasRepository } from '../repositories/personas.repository.js'

export async function handleGet(req, res, next) {
    const personas = await personasDao.obtenerTodas()
    res.json(personas)
}

export async function handlePost(req, res, next) {
    const persona = new Persona(req.body)
    const guardada = await personasDao.guardar(persona)
    res.status(201).json(guardada)
}

export async function handlePut(req, res, next) {

    // const datosPersona = await personasDao.buscarPorId(req.params.id)
    // const persona = new Persona(datosPersona)

    const persona = await personasRepository.buscarPorId(req.params.id)

    persona.edad = req.params.edad
    await personasDao.actualizarPorId(req.params.id, persona)
    res.send('peticion "put:id" recibida!')
}

export async function handleDelete(req, res, next) {
    res.send('peticion "delete:id" recibida!')
}