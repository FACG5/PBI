exports.get = (request, response) => {
  response.render('employees', { cssFile: 'tables' });
};
