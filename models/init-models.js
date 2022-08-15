var DataTypes = require("sequelize").DataTypes;
var _acheteur = require("./acheteur");
var _avis = require("./avis");
var _box = require("./box");
var _categorie = require("./categorie");
var _composition = require("./composition");
var _image = require("./image");
var _message = require("./message");
var _notification = require("./notification");
var _souscategorie = require("./souscategorie");
var _utilisateur = require("./utilisateur");
var _vendeur = require("./vendeur");
const sequelize = require("sequelize");
const db = new sequelize.Sequelize('mysql://root@localhost:3306/ecommerce');

function initModels() {
  var acheteur = _acheteur(db, DataTypes);
  var avis = _avis(db, DataTypes);
  var box = _box(db, DataTypes);
  var categorie = _categorie(db, DataTypes);
  var composition = _composition(db, DataTypes);
  var image = _image(db, DataTypes);
  var message = _message(db, DataTypes);
  var notification = _notification(db, DataTypes);
  var souscategorie = _souscategorie(db, DataTypes);
  var utilisateur = _utilisateur(db, DataTypes);
  var vendeur = _vendeur(db, DataTypes);


  return {
    acheteur,
    avis,
    box,
    categorie,
    composition,
    image,
    message,
    notification,
    souscategorie,
    utilisateur,
    vendeur,
  };
}
module.exports = initModels();
module.exports.initModels = initModels();
module.exports.default = initModels();
