const bcrypt = require('bcryptjs');
const validator = require('validator');
const { findUserByEmail } = require('../repository/repository');
const { generateToken } = require('../utils/jwtUtil');

const login = async (email, password, isClient) => {
  if (!validator.isEmail(email)) {
    throw new Error('The email does not have a valid format');
  }

  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }

  const user = await findUserByEmail(email, isClient);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: isClient ? 'CLIENT' : user.role,
  };

  const token = generateToken(payload);
  return { token, role: payload.role, name: payload.name };
};

module.exports = { login };