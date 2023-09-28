
const express = require('express');
const formidable = require('formidable');

var app = express();
app.use(express.static(__dirname + '/www'));

app.post('/process', (req, res) => {
    console.log(req);
    var form = new formidable.IncomingForm();
    form.parse(req, (err,flds) => {
        console.log(err);
        var data = {
            fname : flds.fname,
            lname : flds.lname,
            email : flds.email,
            dob : flds.dob,
        };
        res.json(data);
        res.end('');
    })
});

app.listen(8000);
console.log("server is running port no : 8000");