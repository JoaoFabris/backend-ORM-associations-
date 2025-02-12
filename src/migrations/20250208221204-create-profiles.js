module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log("Criando a tabela profiles...");
    return queryInterface.createTable("profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "first_name",
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "last_name",
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
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
    console.log("Removendo a tabela profiles...");
    return queryInterface.dropTable("profiles");
  },
};
