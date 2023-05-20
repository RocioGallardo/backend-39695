
export default class OrderRepository {
    constructor(persistence){
        this.persistence = persistence
    }

    async createOrder(data) {
        return await this.persistence.create(data);
    }
    async mostrarOrdersSegunPropiedad(data) {
        try {
            return ordenesEncontradas = await this.persistence.read(data)
        } catch (error) {
            console.log(`Error en la consulta: ${error}`);
        }
    }

}
