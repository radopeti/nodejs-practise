var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit_lead);
router.get('/leads', index.show_leads);
router.get('/leads/:lead_id', index.show_lead)
module.exports = router;
