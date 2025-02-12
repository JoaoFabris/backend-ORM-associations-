module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      message: {
        type: DataTypes.STRING,
      },
      upvoting: {
        type: DataTypes.INTEGER,
      },
      downvoting: {
        type: DataTypes.INTEGER,
      },
      accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "account_id",
        references: {
          model: "accounts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at", // Confirma o nome correto
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at", // Confirma o nome correto
      },
    },
    {
      timestamps: false,
      tableName: "comments",
      underscored: true,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account, {
      foreignKey: "accountId",
      as: "accounts",
    });
  };

  return Comment;
};
