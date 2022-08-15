const sequelize = require("sequelize");
const initModels = require("../models/init-models");
const { QueryTypes } = require('sequelize');
const db = new sequelize.Sequelize('mysql://root@localhost:3306/ecommerce');
const validator = require("express-validator");
const apiResponse = require("../helpers/ApiResponse");
const chainValidationMiddleware = require("../helpers/static_middleware");

const verification = require("../helpers/verification");
const acheteur = require("../models/acheteur");


exports.acheteurList = [

    (req, res) => {
        return initModels.acheteur.findAll().then((classrooms) => {
            res.status(200).json(classrooms);
        })
    }

];


exports.acheteurFilter = [
    (req, res, next) => {
        const params = verification.checkParams(req, initModels.acheteur, "query");
        res.locals.params = params;
        next();


    },
    validator.query("idacheteur", "idacheteur must be specified").optional().exists().isLength({ min: 1 }).withMessage("false").trim().isInt().withMessage("Value idacheteur isn't an Integer"),
    validator.query("idutilisateur", "idutilisateur must be specified").optional().exists().isLength({ min: 1 }).withMessage("false").trim().isInt().withMessage("Value idutilisateur isn't an Integer"),
    validator.query("abonnnement", "abonnement must be specified").optional().exists().isLength({ min: 1 }).withMessage("false").trim().isInt().withMessage("Value abonnement isn't an Integer"),
    validator.query("nom", "nom must be specified").optional().exists().isLength({ min: 1 }).withMessage("false").trim().isAlphanumeric().withMessage("nom isn't a String"),
    validator.query("prenom", "nom must be specified").optional().exists().isLength({ min: 1 }).withMessage("false").trim().isAlphanumeric().withMessage("prenom isn't a String"),
    validator.query("adresseemail", "nom must be specified").optional().exists().isLength({ min: 1 }).withMessage("false").trim().isEmail().withMessage("adresseemail isn't a mail"),

    async (req, res) => {
        try {
            var params = res.locals.params;
            // if checkParams return Array not string
            if (typeof params != "string") {
                const error = validator.validationResult(req);
                if (error.isEmpty()) {
                    var request = "Select * FROM acheteur WHERE "
                    var i = 0;
                    for (var key in params) {
                        if (i > 0) {
                            request += " AND ";
                        }
                        request += key + " = :" + key;
                        i++;
                    }
                    request += ";"

                    db.query(request, { replacements: req.query, type: QueryTypes.SELECT })
                        .then(docs => { res.status(400).json(docs); });
                } else {
                    console.log(error);
                    console.log("message " + error.message);
                    return apiResponse.errorResponseWithData(res, "Error validation", error.array());
                }
            } else {
                return apiResponse.errorResponse(res, params);
            }

        } catch (err) {
            throw new Error(err.message);
        }

    }

]


exports.acheteurStore = [
    validator.body("idutilisateur", "idutilisateur must be specified").isLength({ min: 1 }).trim().isInt().withMessage("Value idutilisateur isn't an Integer"),
    validator.body("abonnement", "abonnement must be specified").isLength({ min: 1 }).trim().isInt().withMessage("Value abonnement isn't an Integer"),
    validator.body("nom", "nom must be specified").isLength({ min: 1 }).trim().isAlphanumeric().withMessage("nom isn't a String"),
    validator.body("prenom", "nom must be specified").isLength({ min: 1 }).trim().isAlphanumeric().withMessage("prenom isn't a String"),
    validator.body("adresseemail", "nom must be specified").isLength({ min: 1 }).trim().isEmail().withMessage("adresseemail isn't a mail").custom(value => {
        return initModels.acheteur.findOne({where : {adresseemail : value}}).then(acheteur => {
            if(acheteur){
                return Promise.reject("email already taken");
            }
        })
    }),

  
    async (req, res) => {

        try{
            const errors = validator.validationResult(req);
            console.log(req.body.adresseemail);

            if(errors.isEmpty()){
               const AcheteurCreate = await initModels.acheteur.create({
                idutilisateur : req.body.idutilisateur, 
                nom : req.body.nom, 
                prenom : req.body.prenom,
                adresseemail : req.body.adresseemail,
                abonnement : req.body.abonnement,
                datecreation : sequelize.literal('CURRENT_TIMESTAMP')
               }).catch(err => {
                apiResponse.errorResponseWithData(res, "Creation error", errors.array());
               })
               apiResponse.successResponse(res, "Success")

            }else{
                apiResponse.errorResponseWithData(res, "Validation error", errors.array());
                
            }

        }catch(err){
            throw new Error(err.message);
        }
    }





]


exports.acheteurDelete = [

    validator.param("idacheteur", "idutilisateur must be specified").isLength({ min: 1 }).trim().isInt().withMessage("Value idacheteur isn't an Integer"),

    async (req, res) =>{
        try{
        const errors = validator.validationResult(req);
        if(errors.isEmpty){
            await initModels.acheteur.destroy({where : {
                idacheteur: req.params.idacheteur
            }}).then(deleteRecord => {
                if (deleteRecord === 1){
                    apiResponse.successResponse(res, "Acheteur deleted succesfully")
                }else{
                    apiResponse.errorResponse(res, "id not found")
                }
            }).catch(err =>{
                throw new Error(err.message);
            })
           

        }else{
            apiResponse.errorResponseWithData(res, "Error validation", errors.array());
        }
    }catch(err){
        throw new Error(err.message);
    }

    }
]

exports.acheteurUpdate = [
    validator.param("idacheteur", "idutilisateur must be specified").optional().exists().isLength({ min: 1 }).trim().isInt().withMessage("Value idacheteur isn't an Integer"),
    validator.body("idutilisateur", "idutilisateur must be specified").optional().exists().isLength({ min: 1 }).trim().isInt().withMessage("Value idutilisateur isn't an Integer"),
    validator.body("abonnement", "abonnement must be specified").optional().exists().isLength({ min: 1 }).trim().isInt().withMessage("Value abonnement isn't an Integer"),
    validator.body("nom", "nom must be specified").optional().exists().isLength({ min: 1 }).trim().isAlphanumeric().withMessage("nom isn't a String"),
    validator.body("prenom", "nom must be specified").optional().exists().isLength({ min: 1 }).trim().isAlphanumeric().withMessage("prenom isn't a String"),
    validator.body("adresseemail", "nom must be specified").optional().exists().isLength({ min: 1 }).trim().isEmail().withMessage("adresseemail isn't a mail").custom(value => {
        return initModels.acheteur.findOne({where : {adresseemail : value}}).then(acheteur => {
            if(acheteur){
                return Promise.reject("email already taken");
            }
        })
    }),
     (req, res)=>{
        const errors = validator.validationResult(req);
          

            if(errors.isEmpty()){
                 initModels.acheteur.findOne({where : {
                    idacheteur: req.params.idacheteur
                }}).then(acheteur => {
                    if (acheteur){
                        const params = verification.checkParams(req, initModels.acheteur, "body")
                        console.log(params);
                        var oneAcheteur = {}
                        for(key in params){
                            acheteur[key] = req.body[key]
                            console.log( acheteur[key], req.body[key])
                        }
                        console.log(acheteur);
                        acheteur.save().then( updated =>{
                            if(updated){
                                apiResponse.successResponse(res, "success");
                            }else{
                                apiResponse.errorResponse(res, "error occured")
                            }
                        })
                      
                    }else{
                        apiResponse.errorResponse(res, "id not found")
                    }
                }).catch(err =>{
                    throw new Error(err.message);
                })
               
            }else{
                apiResponse.errorResponseWithData(res, "id not found", errors.array());
            }
    }




]