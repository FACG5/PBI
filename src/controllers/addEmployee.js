exports.get = (request, response) => {
  response.render('addEmployee', { cssFile: 'employees' });
};
