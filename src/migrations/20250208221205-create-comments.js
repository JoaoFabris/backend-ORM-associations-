/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      upvoting: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      downvoting: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"), // Define um valor padrão
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"), // Define um valor padrão
        field: "updated_at",
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "accounts", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "account_id",
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable("comments");
  },
};
