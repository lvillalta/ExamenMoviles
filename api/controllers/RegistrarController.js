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
        }
        else {
            return res.send(error);
        }
    }
};
