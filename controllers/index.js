
exports.index = function(req, res, next) {
    res.render('index', { title: 'KExpress' });
};

exports.submit_lead = function(req, res, next) {
    console.log("reqest body:", req.body.lead_email);
    res.redirect('/');
};