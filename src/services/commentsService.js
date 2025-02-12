const { Comment } = require("../models");

const getCommentByAccountId = async (id) => {
  const listOfComments = await Comment.findAll({
    where: { account_id: id },
  });

  return listOfComments;
};

const getAllComments = async () => {
  const allComments = await Comment.findAll();
  return allComments;
};

const saveComment = async (message, accountId) => {
  const comment = await Comment.create({
    message,
    upvoting: 0,
    downvoting: 0,
    accountId,
  });
  return comment;
};
module.exports = {
  getCommentByAccountId,
  getAllComments,
  saveComment,
};
