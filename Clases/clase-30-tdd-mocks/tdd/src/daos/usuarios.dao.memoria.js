function matcher(query) {
  return function (obj) {
    const conditions = Object.entries(query)
    for (const [key, value] of conditions) {
      if (!obj[key] || obj[key] != value) return false
    }
    return true
  }
}

function toPojo(object) {
  return JSON.parse(
    JSON.stringify(
      object
    )
  )
}

class UsuariosDao {
  #usuarios
  constructor() {
    this.#usuarios = []
  }

  create(element) {
    const pojo = toPojo(element)
    this.#usuarios.push(pojo)
    return Promise.resolve(pojo)
  }

  readOne(criteria) {
    const result = this.#usuarios.find(matcher(criteria))
    if (!result) throw new Error('NOT FOUND')
    return Promise.resolve(result)
  }

  readMany(criteria) {
    return Promise.resolve(this.#usuarios.filter(matcher(criteria)))
  }

  readSegunMinProds(min) {
    return Promise.resolve(this.#usuarios.filter(u => u.productos.length >= min))
  }

  updateOne(criteria, newData) {
    const index = this.#usuarios.findIndex(matcher(criteria))
    if (index === -1) throw new Error('NOT FOUND')
    this.#usuarios[index] = toPojo({
      ...this.#usuarios[index],
      ...newData
    })
    return Promise.resolve(this.#usuarios[index])
  }

  updateMany(criteria, newData) {
    let modifiedCount = 0
    for (let index = 0; index < this.#usuarios.length; index++) {
      if (matcher(criteria)(this.#usuarios[index])) {
        this.#usuarios[index] = toPojo({
          ...this.#usuarios[index],
          ...newData
        })
        modifiedCount++
      }
    }
    return Promise.resolve({ modifiedCount })
  }

  deleteOne(criteria) {
    const index = this.#usuarios.findIndex(matcher(criteria))
    if (index === -1) throw new Error('NOT FOUND')
    const deleted = this.#usuarios[index]
    this.#usuarios.splice(index, 1)
    return Promise.resolve(deleted)
  }

  deleteMany(criteria) {
    let initialCount = this.#usuarios.length
    this.#usuarios = this.#usuarios.filter(e => !matcher(criteria)(e))
    return Promise.resolve({ deletedCount: initialCount - this.#usuarios.length })
  }
}

export const usuariosDao = new UsuariosDao()