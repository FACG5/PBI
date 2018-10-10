const fs = require('fs');

exports.post = (request, response, next) => {
  const { cerfications } = request.files;
  const cerficationsName = cerfications.name;
  const splitCerfications = cerficationsName.split('.');
  const nameOfFile = Date.now().toString(16).toUpperCase();
  const ext = splitCerfications[1];
  const renderStream = request.files.cerfications.data;
  const path = `uploads/${nameOfFile}.${ext}`;

  fs.writeFile(path, renderStream, (err) => {
    if (err) return next(err);
    return response.send(JSON.stringify({ path }));
  });
};
