import express from 'express'
import { InMemoryManager } from './managers/InMemoryManager.js'

const app = express()

const manager = new InMemoryManager()

app.get('/personas', (req, res) => {
    const edad = req.query.edad
    let personas = manager.recuperarSegunCriterio('edad', parseInt(edad))
    const cantidad = parseInt(req.query.cantidad)
    if (cantidad) {
        personas = personas.slice(0, cantidad)
    }
    res.json(personas)
})

app.get('/personas/:dni', (req, res) => {
    const dniBuscado = req.params.dni
    const persona = manager.recuperarUnoPorIdentificador('dni', dniBuscado)
    res.json(persona)
})

app.listen(8080, () => {
    console.log('conectado!')
})