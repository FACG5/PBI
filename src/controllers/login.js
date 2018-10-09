const bycrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const admin = require('./../database/models/admin');

exports.get = (req, res) => {
  res.render('login', {
    layout: 'login',
    cssFile: ['public', 'login', 'swal'],
  });
};

exports.post = (req, res) => {
  const { usernameValue, passwordValue } = req.body;
  admin.findAll({ where: { username: usernameValue } }).then((result) => {
    if (result[0]) {
      bycrypt.compare(passwordValue, result[0].password).then((finalResult) => {
        if (finalResult === false) {
          res.status(401).send(JSON.stringify({ err: 'كلمة المرور غير صحيحة' }));
        } else {
          const adminDetails = {
            username: 'admin',
          };
          sign(adminDetails, process.env.SECRET, (errSign, resultCookie) => {
            if (errSign) {
              res.status(401).send(JSON.stringify({ err: 'حاول مرة أخرى' }));
            } else {
              res.cookie('jwt', resultCookie, { maxAge: 1800000 });
              res.status(200).send(JSON.stringify({ err: null, message: 'تم تسجيل الدخول بنجاح , سيتم تحويلك إلى الصفحة الرئيسية' }));
            }
          });
        }
      });
    } else {
      res.status(401).send(JSON.stringify({ err: 'الاسم المدخل غير صحيح' }));
    }
  });
};
