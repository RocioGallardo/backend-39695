import SesionManagerMemoria from './ejemploSesionConCookies/SesionManagerMemoria.js';
// import SesionManagerMongodb from './ejemploSesionConCookies/SesionManagerMongodb.js';

export const sesionManager = new SesionManagerMemoria()
// export const sesionManager = new SesionManagerMongodb()