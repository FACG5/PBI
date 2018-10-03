const purchaseBox = require('../database/models/purchaseBox');

exports.get = (req, res) => {
  purchaseBox.findAll({ attributes: ['name'] }).then((result) => {
    res.render('cart', { result, cssFile: 'cart' });
  });
};
