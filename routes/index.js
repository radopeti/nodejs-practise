var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit_lead);
router.get('/leads', index.show_leads);
router.get('/leads/:lead_id', index.show_lead)
router.get('/leads/:lead_id/edit', index.show_edit_lead)
router.post('/leads/:lead_id/edit', index.edit_lead)

module.exports = router;
