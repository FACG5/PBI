exports.client = (req, res) => {
  res.status(404).render('errors', {
    layout: 'errors',
    statusCode: 404,
    errorMessage: 'Page not found',
    style: ['errors'],
    title: '404 Error ',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('errors', {
    layout: 'errors',
    statusCode: 500,
    errorMessage: 'Internal server errors',
    style: ['errors'],
    title: 'Internal Server Error ',

  });
};
