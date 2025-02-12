module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "accounts",
      underscored: true,
    }
  );

  Account.associate = (models) => {
    Account.hasOne(models.Profile, {
      foreignKey: "account_id",
      as: "profile",
    });
    Account.hasMany(models.Comment, {
      foreignKey: "account_id",
      as: "comments",
    });
  };

  return Account;
};
