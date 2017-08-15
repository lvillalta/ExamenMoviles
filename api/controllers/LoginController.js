var hash = require('object-hash');
module.exports = {
    validar: function (req, res) {
        var parametros = req.allParams();
        var error = "";
        if (!parametros.usr) {
            error += "No ingreso usuario";
        }
        if (!parametros.pwd) {
            error += " No ingreso contraseña";
        }
        if (!error) {
            //console.log("datos correctos");
            User.findOne({
                usuario: parametros.usr
            }).exec(function (err, finn) {
                if (err) {
                    return res.serverError(err);
                }
                if (!finn) {
                    return res.send('Usuario no encontrado');
                }
                else {
                    // let aas=hash(parametros.pwd);
                    // console.log("hash: ");
                    //console.log(aas);
                    if (finn.password == hash(parametros.pwd)) {
                        return res.redirect("/pizza");
                        // return res.send("Datos correctos");
                    }
                    else {
                        return res.send("Contraseña incorrecta");
                    }
                }
            });
        }
        else {
            return res.send(error);
        }
    }
};
