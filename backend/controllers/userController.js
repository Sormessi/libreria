const User = require('../models/User');

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('favoriteBooks').populate('followers');
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
