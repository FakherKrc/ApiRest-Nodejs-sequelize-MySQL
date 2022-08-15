const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acheteur', {
    idacheteur: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idutilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    abonnement: {
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
    tableName: 'acheteur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idacheteur" },
        ]
      },
      {
        name: "i_fk_acheteur_utilisateur1",
        using: "BTREE",
        fields: [
          { name: "idutilisateur" },
        ]
      },
    ]
  });
};
