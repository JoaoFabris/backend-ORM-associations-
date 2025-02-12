"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      "profiles",
      [
        {
          first_name: "Marcos",
          last_name: "Zuck",
          phone: "2113 3123",
          account_id: 1,
        },
        {
          first_name: "Fred",
          last_name: "Mercurio",
          phone: "4321 1231",
          account_id: 2,
        },
        {
          first_name: "Ayrton",
          last_name: "Keno",
          phone: "8556 6526",
          account_id: 3,
        },
        {
          first_name: "Robin",
          last_name: "Mathias",
          phone: "3651 3565",
          account_id: 4,
        },
        {
          first_name: "Antonio",
          last_name: "Augusto",
          phone: "8895 5563",
          account_id: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("profiles", null, {});
  },
};