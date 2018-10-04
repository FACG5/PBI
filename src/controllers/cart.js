const purchaseBox = require('../database/models/purchaseBox');

exports.get = (req, res) => {
  purchaseBox.findAll().then((result) => {
    res.render('cart', { result, cssFile: ['cart', 'swal'], jsFile: ['cart'] });
  });
};

exports.delete = (req, res, next) => {
  purchaseBox.destroy({ where: { id: req.body.boxId } }).then(() => {
    res.status(200).send(JSON.stringify({ err: null, message: 'تمت عملية الحذف' }));
  }).catch((error) => {
    next(error);
  });
};

exports.post = (req, res, next) => {
  const purchaseBoxData = req.body;
  purchaseBox.create(purchaseBoxData).then(() => {
    res.status(200).send(JSON.stringify({ err: null, message: 'تمت عملية الإضافة' }));
  });
};
