/**
 * Created by Usuario on 13/7/2017.
 */
module.exports = function(req, res, next) {
  if(req.method=="POST"){
    return next()
  }else{
    return res.send("Error")
  }
};
