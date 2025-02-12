const CommentService = require("../services/commentsService");

const getCommentByAccountId = async (req, res) => {
  try {
    const { id } = req.params;
    const listOfComments = await CommentService.getCommentByAccountId(id);
    console.log(listOfComments);

    if (!Array.isArray(listOfComments) || !listOfComments.length) {
      return res.status(404).json({ message: "id not found!" });
    }

    return res.status(200).json(listOfComments);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "error!" });
  }
};

const getAllComments = async (_req, res) => {
  try {
    const comments = await CommentService.getAllComments();
    console.log(comments);
    return res.status(200).json(comments);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Ocorreu um erro!" });
  }
};

const saveComment = async (req, res) => {

  try {
    const { id } = req.params;
    const { message } = req.body;
    const comment = await CommentService.saveComment(id, message);

    if (!comment) {
      return res.status(404).json({ message: "Error, trying to save comment" });
    }

    return res.status(200).json({ message: "Comment save!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  getCommentByAccountId,
  getAllComments,
  saveComment,
};
