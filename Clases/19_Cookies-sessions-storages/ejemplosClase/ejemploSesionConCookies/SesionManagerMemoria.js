class SesionManagerMemoria {
    constructor() {
        this.sesiones = {};
        this.idSesionesSegunDni = {};
    }

    getByDni(dni) {
        return this.sesiones[this.idSesionesSegunDni[dni]];
    }

    getById(id) {
        return this.sesiones[id];
    }

    save(id, sesionData) {
        this.sesiones[id] = sesionData;
    }
}

export default SesionManagerMemoria