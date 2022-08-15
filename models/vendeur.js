const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendeur', {
    idvendeur: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idutilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    vue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    abonne: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commande: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'vendeur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
        ]
      },
      {
        name: "i_fk_vendeur_utilisateur1",
        using: "BTREE",
        fields: [
          { name: "idutilisateur" },
        ]
      },
    ]
  });
};
