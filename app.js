const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

const app = express();


// Tell the app to parse the body of the request
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(cors({
    origin: ['http://maestriacc.fi.uncoma.edu.ar', 'http://maestriacc.fi.uncoma.edu.ar:3004', 'http://localhost:4200'],
    credentials:true
}));

app.post('/formularionuevo/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});

app.post('/titulo/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});

const puerto = '3004';
/* puerto que escucha */
app.listen(puerto, () => {
    console.log('Servidor corriendo en puerto ' + puerto)
});

module.exports = app;


/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

/* parte del captcha */
/*
app.post('/subscribe', (req, res) => {
  if(
      req.body.captcha === undefined ||
      req.body.captcha === '' ||
      req.body.captcha === null
  ){
    return res.json({"success": false, "msg":"Please select captcha"});
  }
  // Secret Key
  const secretKey = '6LdpvDEUAAAAAHszsgB_nnal29BIKDsxwAqEbZzU';
  // Verify URL
  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;
  // Make Request To VerifyURL
  request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);
    console.log(body);
    // If Not Successful
    if(body.success !== undefined && !body.success){
      return res.json({"success": false, "msg":"Failed captcha verification"});
    }
    //If Successful
    return res.json({"success": true, "msg":"Captcha passed"});
  });
});
*/


