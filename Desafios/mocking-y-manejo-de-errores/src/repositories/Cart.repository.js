
export default class CartRepository {
    constructor(persistence) {
        this.persistence = persistence
    }

    async createCart(record) {
        const cart = await this.persistence.create(record)
        //devuelvo solo el id
        const cartId = cart._id
        return cartId
    }

    async showCart(filter) {
        return await this.persistence.read(filter).populate('listProducts.productId')
    }

    async updateCart(filter, updatedData) {
        return await this.persistence.update(filter, updatedData)
    }

    async addProductToCart(cartId, product) {
        const { _id, cant } = product;

        // Verificar si el carrito existe
        const cart = await this.showCart({ _id: cartId });
        if (!cart) {
            throw new Error('El carrito especificado no existe');
        }

        // Verificar si el producto ya está en el carrito
        const existingProductIndex = cart.listProducts.findIndex(p => p.productId.toString() === _id);
        if (existingProductIndex !== -1) {
            // El producto existe en el carrito, incrementar la cantidad
            cart.listProducts[existingProductIndex].cantidad += cant;
        } else {
            // El producto no existe en el carrito, agregarlo
            cart.listProducts.push({
                productId: _id,
                cantidad: cant
            });
        }

        // Actualizar el carrito en la base de datos
        const filter = { _id: cartId };
        const updatedData = { listProducts: cart.listProducts };
        return await this.persistence.update(filter, updatedData);
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