const express = require('express');
const leadController = require('../controllers/leadsController');

const router = express.Router();

router.post('/leads', leadController.createLead);
router.get('/leads', leadController.getAllLeads);

module.exports = router;