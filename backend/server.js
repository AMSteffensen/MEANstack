var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var messages = [{company: 'Miros', location: 'Oslo'},{company: 'other message', location: 'Miros'}];

var jobs = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/jobs', (req, res) => {
    res.json(jobs);
})

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
})

app.use('/api', api)

app.listen(63145);




