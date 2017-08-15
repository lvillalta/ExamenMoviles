// Vista/vistaOculta ???????
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    }, homepage: function (req, res) {
        Usuario.find(function (err, users) {
            if (err) {
                return res.serverError(err);
            }
            else {
                console.log(users);
                var usuarioModelo = users;
                return res.view('homepage', {
                    usuario: usuarioModelo
                });
            }
        });
    }
};
