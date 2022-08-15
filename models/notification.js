const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification', {
    idnotification: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    idutilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nom: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    description: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idnotification" },
        ]
      },
      {
        name: "i_fk_notification_utilisateur1",
        using: "BTREE",
        fields: [
          { name: "idutilisateur" },
        ]
      },
    ]
  });
};
