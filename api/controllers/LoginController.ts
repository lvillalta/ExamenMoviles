/**
 * Created by Usuario on 13/7/2017.
 */
declare var module;
let hash = require('object-hash');
module.exports = {
  validar:(req,res)=>{
    let parametros = req.allParams();
    let error="";
    if(!parametros.usr){
      error+="No ingreso usuario"
      }
    if(!parametros.pwd){
      error+=" No ingreso contraseña"
    }
    if(!error){
      //console.log("datos correctos");
        User.findOne({
            usuario:parametros.usr;
           }).exec(function (err, finn){
        if (err) {
          return res.serverError(err);
        }
        if (!finn) {
          return res.send('Usuario no encontrado');
        }else {
         // let aas=hash(parametros.pwd);
         // console.log("hash: ");
          //console.log(aas);

          if(finn.password==hash(parametros.pwd)){
            return res.send("Datos correctos");
          }else{
            return res.send("Contraseña incorrecta");
          }

        }
        //sails.log('Found "%s"', finn.usuario);
        //console.log(finn);
       // return res.json(finn);
      });

    }else{
      return res.send(error);
    }

  }
};
