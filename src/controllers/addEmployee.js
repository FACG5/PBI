exports.get = (request, response) => {
  response.render('addEmployee', { cssFile: 'employees' });
};

exports.post = (request, response) => {
console.log(request.body);

  // response.render('addEmployee', { cssFile: 'employees' });
};
