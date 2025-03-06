const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PremiereSchema = new Schema({
  Algo1: { type: Number },
  Algo2: { type: Number},
  APP0: { type: Number},
  CCCA1: { type: Number },
  CCCF1: { type: Number },
  Electro: { type: Number },
  Multimedia: { type: Number},
  MB1: { type: Number},
  MB2: { type: Number },
  PP1: { type: Number },
  PP2: { type: Number },
  Projet: { type: Number},
  SysRes: { type: Number},
  Code: { type: String, required: true, unique: true }
});

const Premiere = mongoose.model('Premiere', PremiereSchema);

module.exports = Premiere;
