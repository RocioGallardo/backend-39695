import { usuariosDao } from '../daos/usuarios.dao.memoria.js'

export async function handleGet(req, res, next) {
  try {
    if (req.params.id) {
      const buscado = await usuariosDao.readOne({ id: req.params.id })
      res.json(buscado)
    } else if (req.query.porEmail) {
      const buscado = await usuariosDao.readOne({ email: req.query.porEmail })
      res.json(buscado)
    } else if (req.query.minProds) {
      const buscado = await usuariosDao.readSegunMinProds(req.query.minProds)
      res.json(buscado)
    } else {
      const usuarios = await usuariosDao.readMany(req.query)
      res.json(usuarios)
    }
  } catch (error) {
    next(error)
  }
}

export async function handlePost(req, res, next) {
  try {
    const creado = await usuariosDao.create(req.body)
    res.status(201).json(creado)
  } catch (error) {
    next(error)
  }
}

export async function handlePut(req, res, next) {
  try {
    const actualizado = await usuariosDao.updateOne(req.params.id, req.body)
    res.json(actualizado)
  } catch (error) {
    next(error)
  }
}

export async function handleDelete(req, res, next) {
  try {
    const borrado = await usuariosDao.deleteOne(req.params.id)
    res.json(borrado)
  } catch (error) {
    next(error)
  }
}