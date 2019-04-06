const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

const app = express();


// Tell the app to parse the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



/*
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});
*/


module.exports = app;

/*
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Acess-Control-Allow-Headers', 'Content-Type');
    next();
})*/


/*
console.log('entro a cors?');
*/
// Setting up the cors config
app.use(cors({
  origin: ['http://maestriacc.fi.uncoma.edu.ar:3000/titulo/formulario', 'http://maestriacc.fi.uncoma.edu.ar:3000', 'http://localhost:3000', 'http://localhost:4200'],
  methods : ['GET', 'POST', 'OPTIONS'],
  credentials:true
}));
/*
console.log('despues de cors');


/* solucion a problema de cors que resulto por poco tiempo */
/*

app.use(cors({
  origin: ['http://maestriacc.fi.uncoma.edu.ar', 'http://maestriacc.fi.uncoma.edu.ar:3000', 'http://localhost:3000'],
  credentials:true
}));
*/
/* otra posible solucion*/

// Add headers
/*
app.use(bodyParser.json())
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','http://maestriacc.fi.uncoma.edu.ar', 'http://maestriacc.fi.uncoma.edu.ar:3000', 'http://localhost:3000', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
*/

app.post('/formularionuevo/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})


console.log('antes de app.post titulo/formulario')

app.post('/titulo/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();

    console.log('adentro de app.post titulo');

})

console.log('despues de app.post titulo');

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


const puerto = '3000';
/* puerto que escucha */
app.listen(puerto, () => {
    console.log('Servidor corriendo en puerto ' + puerto)
});
