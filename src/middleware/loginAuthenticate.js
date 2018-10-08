const loginAuthenticate = (req, res, next) => {
  if (req.cookies.jwt) {
    if (req.cookies.jwt) {
      res.redirect('/');
    }
  } else {
    next();
  }
};

module.exports = loginAuthenticate;
