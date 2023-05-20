import User from "../models/User.js";

export default class UserRepository{
    constructor(persistence){
        this.persistence = persistence
    }

    async create(user) {
        let productToInsert = new User(user)
        return await this.persistence.create(productToInsert)
    }

    async readByProperty(filter){
        return await this.persistence.read(filter)
    }

}


