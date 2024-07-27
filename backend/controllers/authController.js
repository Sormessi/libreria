const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.googleAuth = passport.authenticate('google', { scope: ['profile'] });

exports.googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err || !user) {
      return res.redirect('/login');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.redirect(`/?token=${token}`);
  })(req, res, next);
};

exports.getCurrentUser = (req, res) => {
  res.json(req.user);
};
