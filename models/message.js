const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    idutilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idutilisateur_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    messageSend: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'message',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idutilisateur" },
          { name: "idutilisateur_1" },
          { name: "numero" },
        ]
      },
      {
        name: "i_fk_message_utilisateur1",
        using: "BTREE",
        fields: [
          { name: "idutilisateur" },
        ]
      },
      {
        name: "i_fk_message_utilisateur11",
        using: "BTREE",
        fields: [
          { name: "idutilisateur_1" },
        ]
      },
    ]
  });
};
