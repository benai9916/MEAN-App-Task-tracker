const mongooes = require('mongoose');

const TaskSchema = new mongooes.Schema({
  title: {
    type: String,
    trim: true,
    minlength: 3
  },

  _listId: {
    type: mongooes.Types.ObjectId,
    require: true
  },

  completed: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Task = mongooes.model('Task', TaskSchema);

module.exports = Task;
  