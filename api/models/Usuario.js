/**
 * Created by USRDEL on 26/6/17.
 */
module.exports = {
    connection: 'dockerMysql',
    attributes: {
        nombres: {
            type: "string"
        },
        apellidos: {
            type: "string"
        },
        password: {
            type: "string"
        },
        correo: {
            type: "email"
        },
        fechaNacimiento: {
            type: "date"
        }
    }
};
