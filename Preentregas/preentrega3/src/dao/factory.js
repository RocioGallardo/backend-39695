import { persistenciaEnv } from "../config/config.js";
import { productsManagerMongo } from "./mongo/models/ProductsManager.js";
import { productsManagerFile } from "./file/ProductManagerFs.js";

export let persistence


switch(persistenciaEnv){
    case "MONGO":
        persistence = productsManagerMongo
            break;
    case "FILE":
        persistence = productsManagerFile
            break;
    default:
    console.log("error al configurar persistencia")
    break
}


