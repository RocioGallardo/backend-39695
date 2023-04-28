import { persistenciaEnv } from "../config/config.js";
import { productsManager } from "./mongo/models/ProductsManager.js";
import { productsManagerFile } from "./file/ProductManagerFs.js";

export let persistence

switch(persistenciaEnv){
    case "MONGO":
        persistence = productsManager
    case "FILE":
        persistence = productsManagerFile
}

