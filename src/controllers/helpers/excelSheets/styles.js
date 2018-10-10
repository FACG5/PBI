const alignment = {
  horizontal: 'center',
  vertical: 'center',
};

const styles = {
  headerDark: {
    fill: {
      fgColor: {
        rgb: '5c2d91',
      },
    },
    font: {
      color: {
        rgb: 'ffffff',
      },
      sz: 12,
      bold: true,
      underline: false,
      name: 'KacstBook',
    },
    alignment,
  },
  column: {
    fill: {
      fgColor: {
        rgb: 'c2e0ae',
      },
    },
    font: {
      color: {
        rgb: '000000',
      },
      sz: 15,
      bold: false,
      underline: false,
      name: 'KacstBook',
    },
    alignment,
    border: {
      top: { style: 'thick', color: '5c2d91' },
      bottom: { style: 'thin', color: '000000' },
      left: { style: 'thin', color: '5c2d91' },
      right: { style: 'thin', color: '5c2d91' },

    },
  },

};

module.exports = styles;
