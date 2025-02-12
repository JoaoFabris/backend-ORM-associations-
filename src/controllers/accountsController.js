const AccountService = require("../services/accountsService");

const getAll = async (_req, res) => {
  try {
    const accounts = await AccountService.getAll();
    console.log(accounts);
    return res.status(200).json(accounts);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Error!" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const accountById = await AccountService.getById(id);

    if (!accountById) {
      return res.status(404).json({ message: "id not found!" });
    }
    return res.status(200).json(accountById);
  } catch (e) {
    res.status(500).json({ message: "error!" });
  }
};

const getAccountByIdLazy = async (req, res) => {
  try {
    const { id } = req.params;
    const accountById = await AccountService.getAccountByIdLazy(id);

    if (!accountById) {
      return res.status(404).json({ message: " id not found!" });
    }

    return res.status(200).json(accountById);
  } catch (e) {
    res.status(500).json({ message: "error!" });
  }
};

const saveAccountAndProfile = async (req, res) => {
  try {
    const save = await AccountService.saveAccountAndProfile(req.body);

    if (save.message) {
      return res.status(404).json(save);
    }

    return res.status(200).json({ message: "Account created!" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "something went wrong!" });
  }
};

module.exports = { getAll, getById, getAccountByIdLazy, saveAccountAndProfile };
