import mongoose from "mongoose";

export class ManagerCarrito {
    constructor(nombreColeccion, schema) {
        this.collection = mongoose.model(nombreColeccion, new mongoose.Schema(schema, { versionKey: false }));
    }

    async crearCarrito() {
        const carrito = await this.collection.create({ listProducts: [] });
        return carrito._id.toString();
    }

    async mostrarCarritos(id) {
        try {
            if (id) {
                const carrito = await this.collection
                    .findById(id)
                    .populate('listProducts.productId')
                    .lean();
                return carrito;
            } else {
                const carritos = await this.collection
                    .find({})
                    .populate('listProducts.productId')
                    .lean();
                return carritos;
            }
        } catch (error) {
            console.log(`Error en la consulta: ${error}`);
            throw error;
        }
    }

    async actualizarCarrito(idCarrito, idProducto, cantidad) {
        const carrito = await this.collection.findById(idCarrito);
        const producto = carrito?.listProducts.find(item => item.productId == idProducto);
        if (producto) {
            producto.cantidad += cantidad;
            if (producto.cantidad <= 0) {
                carrito.listProducts = carrito.listProducts.filter(item => item.productId !== idProducto);
            }
        } else {
            carrito.listProducts.push({ productId: idProducto, cantidad });
        }
        await carrito.save();
        return carrito.listProducts;
    }

    async eliminarProductoDelCarrito(idCarrito, idProducto) {
        const carrito = await this.collection.findById(idCarrito);
        const index = carrito.listProducts.findIndex(item => item.productId == idProducto);

        if (index === -1) {
            throw new Error('Producto no encontrado en el carrito');
        }

        carrito.listProducts.splice(index, 1);

        await carrito.save();
        return carrito.listProducts;
    }

    async vaciarCarrito(idCarrito) {
        const carrito = await this.collection.findById(idCarrito);
        carrito.listProducts = [];
        await carrito.save();
        return carrito.listProducts;
    }
}
