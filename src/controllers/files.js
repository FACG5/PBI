const fs = require('fs');
const path = require('path');

exports.post = (request, response, next) => {
  const { cerfications } = request.files;
  const cerficationsName = cerfications.name;
  const splitCerfications = cerficationsName.split('.');
  const nameOfFile = Date.now()
    .toString(16)
    .toUpperCase();
  const ext = splitCerfications[1];
  const renderStream = request.files.cerfications.data;
  const name = `${nameOfFile}.${ext}`;

  fs.writeFile(`uploads/${nameOfFile}.${ext}`, renderStream, (err) => {
    if (err) return next(err);
    return response.send(JSON.stringify({ name }));
  });
};

exports.get = (req, res, next) => {
  const { fileName } = req.params;
  const file = path.join(__dirname, '..', '..', 'uploads', `${fileName}`);
  res.download(file);
};
