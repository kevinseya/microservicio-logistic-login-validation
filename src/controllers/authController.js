const { login } = require('../services/authService');

const loginUserOrClient = async (req, res) => {
  const { email, password, isClient } = req.body;

  try {
    const { token, role, name } = await login(email, password, isClient);
    res.status(200).json({ token, role, name });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { loginUserOrClient };