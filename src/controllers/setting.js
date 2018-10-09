const bcryptjs = require('bcryptjs');
const admin = require('../database/models/admin');

exports.get = (req, res) => {
  res.render('setting', {
    cssFile: ['panelSetting', 'swal'], jsFile: ['setting'], activePage: { setting: true }, title: 'إعدادات لوحة التحكم',
  });
};

exports.post = (req, res, next) => {
  const { currentPassword, username, password } = req.body;
  admin.findAll().then((result) => {
    const { password: currentPasswordDatabase } = result[0].dataValues;
    bcryptjs.compare(
      currentPassword,
      currentPasswordDatabase,
      (err, result) => {
        if (err) return next(err);
        if (result === false) { return res.send(JSON.stringify({ err: 'خطأ في الباسوورد الحالي !' })); }
        return bcryptjs.hash(password, 10, (err, password) => {
          if (err) return next(err);
          const newAdminData = { username, password };
          return admin
            .update(newAdminData, { where: { id: 1 } })
            .then(() => res.send(
              JSON.stringify({
                err: null,
                message: 'تم تحديث البيانات بنجاح',
              }),
            ))
            .catch(error => next(error));
        });
      },
    );
  });
};
