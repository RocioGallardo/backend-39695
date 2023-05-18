
export default class CartRepository {
    constructor(persistencia) {
        this.persistencia = persistencia
    }

    async createCart(record) {
        const cart = await this.persistencia.create(record)
        //devuelvo solo el id
        const cartId = cart._id
        return cartId
    }

    async showCart(filter) {
        return resultado = await this.persistencia.read(filter)
    }

    async updateCart(filter, updatedData) {
        await this.persistencia.update(filter, updatedData)
    }

    async addProductToCart(cartId, product) {
        // Verificar si el carrito existe
        const cart = await this.showCart({ _id: cartId });
        if (!cart) {
            throw new Error('El carrito especificado no existe');
        }

        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.listProducts.find(p => p.id === product.id);
        if (existingProduct) {
            // Si el producto ya existe, incrementar la cantidad
            const filter = {
                _id: cartId,
                'listProducts._id': product.id
            };
            const updatedData = {
                $inc: {
                    'listProducts.$.cant': product.quantity
                }
            };
            return await this.update(filter, updatedData);
        } else {
            // Si el producto no existe, agregarlo al carrito
            const filter = { _id: cartId };
            const updatedData = {
                $push: {
                    listProducts: product
                }
            };
            return await this.persistencia.update(filter, updatedData);
        }
    }

    async removeProductsFromCart(cartId, productIds) {
        try {
            let updateData = {};

            if (productIds && productIds.length > 0) {
                // Construir el objeto $pull para eliminar los productos del array listProducts
                updateData = { $pull: { listProducts: { _id: { $in: productIds } } } };
            } else {
                // Vaciar completamente el array listProducts
                updateData = { $set: { listProducts: [] } };
            }

            // Actualizar el carrito en la base de datos utilizando la función update
            const updatedCart = await this.update({ _id: cartId }, updateData);
            return updatedCart;
        } catch (error) {
            console.error('Error al eliminar productos del carrito:', error);
            throw new Error('Error al eliminar productos del carrito');
        }
    }
}