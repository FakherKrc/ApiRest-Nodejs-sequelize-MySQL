const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('image', {
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
    idimage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    description: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    src: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'image',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
          { name: "idbox" },
          { name: "idimage" },
        ]
      },
      {
        name: "i_fk_image_box1",
        using: "BTREE",
        fields: [
          { name: "idvendeur" },
          { name: "idbox" },
        ]
      },
    ]
  });
};
