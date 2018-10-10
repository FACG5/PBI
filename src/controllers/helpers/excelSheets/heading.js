const styles = require('./styles');

const head = (date) => {
  const heading = [
    [],
    [],
    [
      '',
      '',
      {
        value: `رواتب موظفي المعهد عن شهر ${date}`,
        style: styles.headerDark,
      },
    ],
    [],
    [],
  ];
  return heading;
};

module.exports = head;
