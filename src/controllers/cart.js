const purchaseBox = require('../database/models/purchaseBox');

exports.get = (req, res) => {
  purchaseBox.findAll().then((result) => {
    res.render('cart', { result, cssFile: ['cart'], jsFile: ['cart'] });
  });
};

exports.delete = (req, res, next) => {
  purchaseBox.destroy({ where: { id: req.body.boxId } }).then(() => {
    res.status(200).send(JSON.stringify({ err: null, message: 'delete done' }));
  }).catch((error) => {
    next(error);
  });
};
