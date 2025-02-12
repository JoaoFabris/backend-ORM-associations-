"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      "accounts",
      [
        { email: "Marcos@gmail.com", password: "Zuck" },
        { email: "Fred@gmail.com", password: "Mercurio" },
        { email: "Ayrton@gmail.com", password: "Keno" },
        { email: "Robin@gmail.com", password: "Mathias" },
        { email: "Antonio@gmail.com", password: "Augusto" },
      ],
      {}
    );
  },
  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("accounts", null, {});
  },
};
