//cria o modelo mongoose
var mongoose = require('mongoose');

module.exports = mongoose.model('Nerd', {
	name : { type : String, default: '' },
	level : { type : Number, default: 1 }
});