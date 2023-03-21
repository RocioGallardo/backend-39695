export class MongooseManager{
    #db
    constructor(db){
        this.#db = db
    }

    async guardar(cosa){
        await this.#db.create(cosa)
        return cosa
    }
    async buscarTodo(){
        return await this.#db.find()
    }
    async buscarPorID(id){
        return await this.#db.findOne({id})
    }
    async update(id, nuevaCosa){
        return await this.#db.replaceOne({ id }, nuevaCosa, { runValidators: true })
    }
    async borrarPorId(id){
        return await this.#db.deleteOne({id})
    }
}