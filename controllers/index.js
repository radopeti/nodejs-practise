
const models = require('../models')

exports.index = function(req, res, next) {
    res.render('index', { title: 'KExpress' });
};

exports.submit_lead = function(req, res, next) {
    console.log("reqest body:", );
    models.Lead.create({
        email: req.body.lead_email
    }).then(result => {
        res.redirect('/');
    })
};