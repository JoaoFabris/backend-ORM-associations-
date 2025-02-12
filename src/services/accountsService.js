const { Account, Profile } = require("../models");

const getAll = async () => {
  const accounts = await Account.findAll();
  return accounts;
};

const getById = async (id) => {
  const accountById = await Account.findOne({
    where: { id },
    include: [{ model: Profile, as: "profile" }],
  });
  return accountById;
};

const getAccountByIdLazy = async (id) => {
  const accountById = await Account.findOne({
    where: { id },
  });
  return accountById;
};

const saveAccount = async (email, password) => {
  if (!email || !password) {
    return { message: " email or password not!" };
  }
  try {
    return Account.create({ email, password });
  } catch (e) {
    return { message: "Error when registering an account" };
  }
};

const validateProfileFields = (firstName, lastName, phone, accountId) => {
  if (!firstName || !lastName || !phone || !accountId) {
    return ({ message: "Erro!, verify all profile fields" });
  }
};

const saveProfile = async (firstName, lastName, phone, accountId) => {
  const invalidProfile = validateProfileFields(
    firstName,
    lastName,
    phone,
    accountId
  );
  if (invalidProfile) {
    return invalidProfile;
  }

  try {
    return Profile.create({ firstName, lastName, phone, accountId });
  } catch (e) {
    return false;
  }
};

const saveAccountAndProfile = async ({
  email,
  password,
  firstName,
  lastName,
  phone,
}) => {
  const account = await saveAccount(email, password);

  if (account.message) {
    return account;
  }

  const profile = await saveProfile(firstName, lastName, phone, account.id);
  return profile;
};

module.exports = {
  getAll,
  getById,
  getAccountByIdLazy,
  saveAccountAndProfile,
};
