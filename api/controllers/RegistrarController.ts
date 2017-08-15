/**
 * Created by Usuario on 14/8/2017.
 */
declare var module;
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

    }else{
      return res.send(error);
    }

  }
};
