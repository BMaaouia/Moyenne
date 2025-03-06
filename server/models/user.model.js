
const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		Name: { type: String, required: true },
		Code: { type: String, required: true, unique: true },
		Classe: { type: Number},
		Moyenne: { type: Number },
		
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model