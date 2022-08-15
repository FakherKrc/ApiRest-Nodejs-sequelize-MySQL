const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avis', {
    idacheteur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idavis: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idvendeur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nombreetoile: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'avis',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idacheteur" },
          { name: "idavis" },
        ]
      },
      {
        name: "i_fk_avis_acheteur1",
        using: "BTREE",
        fields: [
          { name: "idacheteur" },
        ]
      },
      {
        name: "i_fk_avis_vendeur1",
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
        ]
      },
    ]
  });
};
