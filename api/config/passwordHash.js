const { hash, genSalt } = require("bcrypt");

const genHash = async (password) => {
  const salt = await genSalt(8);
  const userHash = await hash(password, salt);

  return {
    salt: salt,
    hash: userHash,
  };
};

const verifyHash = async (password, userHash, salt) => {
  let resultadoHash = await hash(password, salt);

  return userHash === resultadoHash;
};

module.exports = { genHash, verifyHash };
