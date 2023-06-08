import { UserExistsError } from "../errors/errors.js"
import { cartRepository, userRepository } from "../repositories/index.js"
import { hashear } from "../utils/criptografia.js"

class UserService {
  async checKIfExist(email){
      const exists = await userRepository.read({email : email})
      if (!Array.isArray(exists)) {
      throw new UserExistsError()
    }
  }
  async create(user){
    const { firstName, lastName, email, age, password, rol } = user
    await this.checKIfExist(email)
    const CartId = await cartRepository.createCart()
    const userToCreate = {
      firstName,
      lastName,
      email,
      age: Number(age),
      password: hashear(password),
      cart: CartId,
      rol
    }
    await userRepository.create(userToCreate)
  }
  async updatePassword(filter, updatedData){
    const user = await userRepository.read(filter)
    if(validarQueSeanIguales(updatedData, user.password)){
      // TODO CREAR ERROR
    }
    const hasheado = hashear(updatedData)
    const updated = await userRepository.update(filter, {password: hasheado})
    return updated
  }
}

export const userService = new UserService()

