const nodemailer = require('nodemailer');




module.exports = (formularionuevo) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        debug: true,
        logger: true,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: 'pagina.maestria@fi.uncoma.edu.ar', // Cambialo por tu email
            pass: 'XXXXX' // Cambialo por tu password
        }
    });

    const mailDeConfirmacionARemitente = {
        from: 'pagina.maestria@fi.uncoma.edu.ar', // Cambia esta parte por el destinatario
        to: `"${formularionuevo.email}"`,
        subject: "Inscripción o consulta",
        html: `Su inscripción se envió correctamente`
    };

    const mailConInfoADestinatario = {
        from: 'pagina.maestria@fi.uncoma.edu.ar', // Cambia esta parte por el destinatario
        to: 'pagina.maestria@fi.uncoma.edu.ar',
        subject: "Inscripción o consulta",
        html: ` 
    <strong>NO responder a este email<br/>
    <br><br/>
    <strong>Nombre:</strong> ${formularionuevo.nombre} <br/>
    <strong>Apellido:</strong> ${formularionuevo.apellido}  <br/>
    <strong>E-mail:</strong> ${formularionuevo.email}  <br/>
    <strong>Mensaje:</strong> ${formularionuevo.mensaje} <br>
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
