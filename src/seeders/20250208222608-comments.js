"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          message: "eita lele",
          upvoting: 3,
          downvoting: 5,
          account_id: 1,
        },
        {
          message: "minha nossa senhora",
          upvoting: 6,
          downvoting: 1,
          account_id: 2,
        },
        {
          message: "olho no lance",
          upvoting: 1,
          downvoting: 9,
          account_id: 3,
        },
        {
          message: "chute de cabeça",
          upvoting: 3,
          downvoting: 8,
          account_id: 4,
        },
        {
          message: "olha o que ele fez",
          upvoting: 2,
          downvoting: 6,
          account_id: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("comments", null, {});
  },
};