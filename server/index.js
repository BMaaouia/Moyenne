const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./routes/user')
const Premiere = require('./routes/Premiere')
const Deuxieme = require('./routes/Deuxieme')
const Troisieme = require('./routes/Troisieme')



require('dotenv').config();

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(cors())
app.use(express.json())
app.use('/user', User);
app.use('/Premiere',Premiere);
app.use('/Deuxieme',Deuxieme);
app.use('/Troisieme',Troisieme);


app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});