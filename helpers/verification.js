
const chainValidationMiddlewares = require("./static_middleware");
exports.checkParams = function(req, model, type){

    var message = "";

    if(!req[type]){
        message = "No filter was found";
        return message;
    }
    else{
        var Status = {};
        var value = 0;
        Object.keys(req[type]).forEach(filter =>   {
          
            if(model.getAttributes()[filter] != undefined){
                Status[filter] = model.getAttributes()[filter].type;    
            }else{
                value += 1;
            } 
            
        });
        if(value > 0){
            message = "One of the filter value isn't corresponding";
            return message;
        }
        else{
            return Status;
        }
    }
    
}



exports.isMultipleValue = function(req){
    for(var key in req.query){
        if(req.query[key].length >= 2){
            console.log(req.query);
            return true;
        }
    }

    return false;
}



exports.createValidation = (params, validator) => {
    var middlewares = [];
    for(var key in params){

        var valid = validator.query(key, key + " must be specified").isLength({min : 1}).withMessage("false").trim();
        
        
        
        if(params[key] == "INTEGER"){
  
            valid = valid.isInt().withMessage("Value " + key + " isn't an Integer");
        } 
        else if(params[key] == "STRING"){
            valid = valid.isAlphanumeric().withMessage("Value " + key + " isn't a String");
        }    
        middlewares.push(valid);
       
    };
    console.log("enter in");
    chainValidationMiddlewares.middleware = validator.query("idacheteur", " must be specified").isLength({min : 1}).withMessage("false").trim().isInt();
    return true;
}

exports.checkValidationResult = (req, res) => {


}