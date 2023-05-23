import { UserExistsError } from "../errors/errors.js"
import { cartRepository, userRepository } from "../repositories/index.js"
import { hashear } from "../utils/criptografia.js"

class UserService {
  async checKIfExist(email){
    const exists = await userRepository.obtenerPorPropiedad("email", email)
    if (exists.length > 0) throw new UserExistsError()
  }
  async create(user){
    const { firstName, lastName, email, age, password, rol } = user
    this.checKIfExist(email)
    const CartId = await cartRepository.createCart()
    const userToCreate = {
      firstName,
      lastName,
      email,
      age,
      password: hashear(password),
      cart: CartId,
      rol
    }
    await userRepository.crear(userToCreate)
  }
}

export const userService = new UserService()

