const { verify } = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  if (req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRET, (err) => {
      if (err) {
        res.redirect('/login');
      } else {
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

module.exports = authenticate;
