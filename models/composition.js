const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('composition', {
    idvendeur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idbox: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcomposition: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'composition',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
          { name: "idbox" },
          { name: "idcomposition" },
        ]
      },
      {
        name: "i_fk_composition_box1",
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
          { name: "idbox" },
        ]
      },
    ]
  });
};
