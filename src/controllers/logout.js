exports.get = (req, res) => {
  res.clearCookie('jwt');
  res.send(JSON.stringify({ err: null, message: 'تم تسجيل الخروج , سيتم تحويلك إلى صفحة تسجيل الدخول' }));
};
