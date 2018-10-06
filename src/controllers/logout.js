exports.get = (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/login');
};
