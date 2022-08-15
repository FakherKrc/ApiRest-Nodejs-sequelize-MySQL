const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('souscategorie', {
    idcategorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idsouscategorie: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'souscategorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcategorie" },
          { name: "idsouscategorie" },
        ]
      },
      {
        name: "i_fk_souscategorie_categorie1",
        using: "BTREE",
        fields: [
          { name: "idcategorie" },
        ]
      },
    ]
  });
};
