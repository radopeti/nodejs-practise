
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

exports.show_leads = function(req, res, next) {
    return models.Lead.findAll().then(leads => {
        res.render('index', { title: 'MadMEXpress', leads: leads })
    })
}

exports.show_lead = function(req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { title: 'MadMEXpress', lead: lead })
    });
}