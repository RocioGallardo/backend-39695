import { createTransport } from "nodemailer";
import { emailMailer, passMailer } from "../config/config.js";
import { winstonLogger } from "./logger.js";

const clienteNodeMailer = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: "hola.rogallardo@gmail.com",
        pass: "eijmvzbmxikvecdj"
    }
})

const TEST_MAIL = "info.tiendabrave@gmail.com"

const mailOptions = {
    from : "Servidor Node.js",
    to : TEST_MAIL,
    subject : "Mail de prueba desde Node js",
    html : "<h1>Contenido de prueba</h1>",
}

try {
    const info = await clienteNodeMailer.sendMail(mailOptions)
    winstonLogger.info(info)
} catch(error){
    winstonLogger.error(error)
}