import User from "../models/User.js";

export default class UserRepository{
    constructor(persistencia){
        this.persistencia = persistencia
    }

    async crear(user) {
        let productToInsert = new User(user)
        const registred = await this.persistencia.crear(productToInsert)
        return registred
    }

    async obtenerPorPropiedad(propiedad, valor){
        const user = await this.persistencia.obtenerPorPropiedad(propiedad,valor)
        return user
    }

}

