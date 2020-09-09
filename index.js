var navigation = require('./book/plugin');

module.exports = {
  // Extend book resources and html
  book: {
    assets: "./book",
    js: [
      "stylish.js"
    ],
    css: [
      "style.css"
    ],
  },

  hooks: {
    'page:before': function (page) {
      return navigation(this, page);
    }
  }
};
