const express = require('express');//framework and provide tools it will make our code easy
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/route');
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();

mongoose.connect("mongodb+srv://huda123:MaZjaXxcN2lw6iVV@cluster0.je5ld.mongodb.net/group68Database-db", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);

//listen is express tool port is to link between to nteworks 
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});