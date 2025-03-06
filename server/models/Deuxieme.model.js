const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeuxiemeSchema = new Schema({
  Micro: { type: Number },
  BD: { type: Number},
  CCCA2: { type: Number },
  CCCF2: { type: Number },
  FonRes: { type: Number },
  MB3: { type: Number},
  MB4: { type: Number },
  CPP: { type: Number },
  ProjetCPP: { type: Number },
  ProjetWeb: { type: Number},
  ResCom: { type: Number},
  Scripting: { type: Number},
  Code: { type: String, required: true, unique: true }
});

const Deuxieme = mongoose.model('Deuxieme', DeuxiemeSchema);

module.exports = Deuxieme;
