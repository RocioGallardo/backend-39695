import { persistenciaEnv } from "../config/config.js";
import { productsManagerMongo } from "./mongo/models/ProductsManager.js";
import { productsManagerFile } from "./file/ProductManagerFs.js";
import { cartManagerMongo } from "./mongo/models/CartManager.js";
import { orderManagerMongo } from "./mongo/models/OrderManager.js";

export let persistenceProducts
export let persistenceCart
export let persistenceOrder


switch(persistenciaEnv){
    case "MONGO":
        persistenceProducts = productsManagerMongo
        persistenceCart = cartManagerMongo
        persistenceOrder = orderManager
            break;
    case "FILE":
        persistenceProducts = productsManagerFile
            break;
    default:
    console.log("error al configurar persistencia")
    break
}


