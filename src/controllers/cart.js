const purchaseBox = require('../database/models/purchaseBox');

exports.get = (req, res) => {
  purchaseBox.findAll().then((result) => {
    res.render('cart', {
      result, cssFile: ['cart', 'swal'], jsFile: ['cart'], activePage: { carts: true }, title: ' صناديق المشتريات ',
    });
  });
};

exports.delete = (req, res, next) => {
  purchaseBox
    .destroy({ where: { id: req.body.boxId } })
    .then(() => {
      res
        .status(200)
        .send(JSON.stringify({ err: null, message: 'تمت عملية الحذف' }));
    })
    .catch((error) => {
      next(error);
    });
};

exports.post = (req, res, next) => {
  const purchaseBoxData = req.body;
  if (purchaseBoxData.name.trim()) {
    purchaseBox
      .findAll({ where: { name: purchaseBoxData.name } })
      .then((result) => {
        if (result.length === 0) {
          purchaseBox.create(purchaseBoxData).then(() => {
            res
              .status(200)
              .send(
                JSON.stringify({ err: null, message: 'تمت عملية الإضافة' }),
              );
          });
        } else {
          res.status(401).send(JSON.stringify({ err: 'الاسم موجود مسبقا' }));
        }
      }).catch(err => next(err));
  } else {
    res.status(401).send(JSON.stringify({ err: 'الرجاء إدخال بيانات' }));
  }
};

exports.put = (req, res) => {
  const newCartNameData = req.body;
  if (newCartNameData.name.trim()) {
    purchaseBox.findAll({ where: { name: newCartNameData.name } })
      .then((result) => {
        if (result.length === 0) {
          purchaseBox.update(newCartNameData, { where: { id: newCartNameData.boxId } })
            .then(() => {
              res.status(200).send({ err: null, message: 'تم تحديث البيانات' });
            });
        } else {
          res.status(401).send({ err: 'الاسم موجود مسبقا' });
        }
      });
  } else {
    res.status(401).send(JSON.stringify({ err: 'الرجاء إدخال بيانات' }));
  }
};
