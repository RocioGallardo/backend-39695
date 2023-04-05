class UserManager {
    constructor() {
        this.usuarios = [];
    }

    guardar(user) {
        this.usuarios.push(user);
    }

    buscarPorUsername(username) {
        // devuelvo una copia para imitar el comportamiento de una db
        return { ...this.usuarios.find(u => u.username === username) }
    }
}

export const userManager = new UserManager()

