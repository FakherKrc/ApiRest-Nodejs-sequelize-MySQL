exports.successResponse = (res, msg) => {

    var data = [{
        status : 1, 
        message : msg
    }]

    return res.status(200).json(data);
}


exports.successResponseWithData = (res, msg, docs) => {

    var data = [{
        status : 1, 
        message : msg, 
        doc :  docs
    }]

    return res.status(201).json(data);
}

exports.errorResponse = (res, msg) => {
    var data = [{
        status : 0, 
        message : msg
    }]

    return res.status(400).json(data);
}

exports.errorResponseWithData = (res, msg , docs) => {
    var data  = [{
        status : 0, 
        message : msg, 
        doc : docs

    }]

    return res.status(400).json(data);
}


exports.notFoundResponse = function(res, msg){
    var data = [{
        status : 0, 
        message : msg,
    }]
    
    return res.status(404).json(data);
}

exports.validationErrorWithData = function(res, msg, docs){
    var resData = [{
        status : 0, 
        message : msg,
        doc : docs
        
    }]

    return res.status(400).json(resData);
}

exports.unauthorizeAccess = function(res, msg){
    var data = [{
        status : 0, 
        message: msg, 
    }]

    return res.status(401).json(message)
}


