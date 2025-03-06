const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TroisiemeSchema = new Schema({
  Unix: { type: Number },
  ADF: { type: Number},
  AN: { type: Number},
  CS: { type: Number },
  CCNA: { type: Number },
  CCCA3: { type: Number },
  CCCF3: { type: Number},
  JAVA: { type: Number},
  EnvEnt: { type: Number },
  GL: { type: Number },
  IPEss: { type: Number },
  IPRoute: { type: Number},
  UML: { type: Number},
  Mobile: { type: Number},
  ProjetJava: { type: Number},
  Switched: { type: Number},
  SGBD: { type: Number},
  TEI: { type: Number},
  WEB: { type: Number},
  TLA: { type: Number},
  Code: { type: String, required: true, unique: true }
});

const Troisieme = mongoose.model('Troisieme', TroisiemeSchema);

module.exports = Troisieme;
