import { PersonasDaoMem } from './PersonasDaoMem.js'
import { PersonasDaoMongoDb } from './PersonasDaoMongoDb.js'

export const personasDao = new PersonasDaoMem()
// export const personasDao = new PersonasDaoMongoDb()
