const mongoose = require('mongoose');

const ListScheme = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    minlength: 3
  }
});

const List = mongoose.model('List', ListScheme);

module.exports = List;