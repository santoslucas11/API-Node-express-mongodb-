const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const { host, port, user, pass } = require('../config/mail.json')

var transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./resources/mail/')
    },
    viewPath: path.resolve('./resources/mail/'),
    extName: '.html',
}));

module.exports = transport
