const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    idutilisateur: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    prenom: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    adresseemail: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idutilisateur" },
        ]
      },
    ]
  });
};
