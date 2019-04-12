const nodemailer = require('nodemailer');

module.exports = (formularionuevo) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'leonardoperello96@gmail.com', // Cambialo por tu email
            pass: '39403751' // Cambialo por tu password
        }
    });

    const mailDeConfirmacionARemitente = {
        from: 'leonardoperello96@gmail.com', // Cambia esta parte por el destinatario
        to: `"${formularionuevo.email}"`,
        subject: "Inscripción o consulta",
        html: `Su inscripción se envió correctamente`
    };

    const mailConInfoADestinatario = {
        from: 'leonardoperello96@gmail.com', // Cambia esta parte por el destinatario
        to: 'leonardoperello96@gmail.com',
        subject: "Inscripción o consulta",
        html: ` 
    <strong>NO responder a este email<br/>
    <br><br/>
    <strong>Nombre:</strong> ${formularionuevo.nombre} <br/>
    <strong>Apellido:</strong> ${formularionuevo.apellido}  <br/>
    <strong>E-mail:</strong> ${formularionuevo.email}  <br/>
    <strong>Dni:</strong> ${formularionuevo.doc}  <br/>
    <strong>Telefono:</strong> ${formularionuevo.numero}  <br/>
    <strong>Genero:</strong> ${formularionuevo.gender}  <br/>
    <strong>Nacionalidad:</strong> ${formularionuevo.nacionalidad}<br/>
    <strong>Nombre de su carrera:</strong> ${formularionuevo.carrera}<br/>
    <strong>Nombre de su universidad:</strong> ${formularionuevo.universidad}
    `
    };

    transporter.sendMail(mailDeConfirmacionARemitente, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
    transporter.sendMail(mailConInfoADestinatario, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}
