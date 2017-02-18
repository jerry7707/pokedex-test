// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router=require('./router');
const cors = require('cors');


// App Setup
app.use(morgan('combined')); //for logging purpose
app.use(cors()); //allow Cross Domain
app.use('/img',express.static(__dirname + '/images/img')); //set static image directory
app.use('/thm',express.static(__dirname + '/images/thm'));
app.use('/spr',express.static(__dirname + '/images/spr'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on",port);
