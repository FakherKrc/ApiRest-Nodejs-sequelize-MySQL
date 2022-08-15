const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('box', {
    idvendeur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idbox: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcategorie: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nom: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    prix: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'box',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
          { name: "idbox" },
        ]
      },
      {
        name: "i_fk_box_vendeur1",
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
        ]
      },
      {
        name: "i_fk_box_categorie1",
        using: "BTREE",
        fields: [
          { name: "idcategorie" },
        ]
      },
    ]
  });
};
