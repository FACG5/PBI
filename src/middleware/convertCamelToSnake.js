const convertCamelToSnake = (req, res, next) => {
  const { body } = req;
  Object.keys(body).forEach((k) => {
    const newK = k.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);
    if (newK !== k) {
      body[newK] = body[k];
      delete body[k];
    }
    if (body[newK] === '') {
      delete body[newK];
    }
  });
  req.body = body;
  next();
};

module.exports = convertCamelToSnake;
