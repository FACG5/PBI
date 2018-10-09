const convertSnakeToCamel = (obj) => {
  Object.keys(obj).forEach((key) => {
    const newK = key.replace(/(\_\w)/g, str => str[1].toUpperCase());
    if (newK !== key) {
      obj[newK] = obj[key];
      delete obj[key];
    }
  });
  return obj;
};

module.exports = convertSnakeToCamel;
