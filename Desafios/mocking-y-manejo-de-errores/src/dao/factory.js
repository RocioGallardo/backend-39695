import { persistenciaEnv } from "../config/config.js";
import { productsManagerMongo } from "./mongo/models/ProductsManager.js";
import { productsManagerFile } from "./file/ProductManagerFs.js";
import { cartManagerMongo } from "./mongo/models/CartManager.js";
import { orderManagerMongo } from "./mongo/models/OrderManager.js";
import { messagesManagerMongo } from "./mongo/models/MessagesManager.js";
import { userManagerMongo } from "./mongo/models/UserManager.js";

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


