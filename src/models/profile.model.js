module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      phone: {
        type: DataTypes.STRING,
      },
      accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "account_id", // <- Nome igual ao do banco
      },
    },
    {
      timestamps: false,
      tableName: "profiles",
      underscored: true, // <- Padrão do mercado
    }
  );

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, {
      foreignKey: "account_id",
      as: "account",
    });
  };

  return Profile;
};
