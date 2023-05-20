import { persistenciaEnv } from "../config/config.js";
import { productsManagerMongo } from "./mongo/schemas/ProductsManager.js";
import { productsManagerFile } from "./file/ProductManagerFs.js";
import { cartManagerMongo } from "./mongo/schemas/CartManager.js";
import { orderManagerMongo } from "./mongo/schemas/OrderManager.js";
import { messagesManagerMongo } from "./mongo/schemas/MessagesManager.js";
import { userManagerMongo } from "./mongo/schemas/UserManager.js";

export let persistence

switch(persistenciaEnv){
    case "MONGO":
        persistence = {
            product : productsManagerMongo,
            cart : cartManagerMongo,
            order : orderManagerMongo,
            messages : messagesManagerMongo,
            user : userManagerMongo
        }
            break;
    case "FILE":
        persistence = {
            products : productsManagerFile
        }
            break;
    default:
    console.log("error al configurar persistencia")
    break
}


