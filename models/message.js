var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var User = require('./user');
/**
* Schema.Types.ObjectId
* The internal type mongoose uses to store the ids of the id
* automatically created by mongoose.
**/
var schema = new Schema({
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function(message){
  User.findById(message.user, function(err, user){
    user.messages.pull(message);
    user.save();
  });
});

module.exports = mongoose.model('Message', schema);
