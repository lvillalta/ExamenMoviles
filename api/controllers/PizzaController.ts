/**
 * Created by Usuario on 14/8/2017.
 */
declare var module;
module.exports = {
  comprar:(req,res)=>{
    let parametros = req.allParams();
    let total=0;
    //console.log("parametros: " + parametros.topping1);
    if(typeof(parametros.topping1) != "undefined") {
      console.log("parametros"+parametros.topping1);
      total += parseFloat(parametros.topping1);
    }
    if(typeof(parametros.topping2) != "undefined") {
      total += parseFloat(parametros.topping2);
    }
    if(typeof(parametros.topping3) != "undefined") {
      total += parseFloat(parametros.topping3);
    }
    if(typeof(parametros.topping4) != "undefined") {
      total += parseFloat(parametros.topping4);
    }
    if(typeof(parametros.topping5) != "undefined") {
      total += parseFloat(parametros.topping5);
    }
    if(typeof(parametros.topping6) != "undefined") {
      total += parseFloat(parametros.topping6);
    }
    console.log("total: "+total);
    return res.send("El costo de su pizza es: "+total+" dolares.");

  }
};
