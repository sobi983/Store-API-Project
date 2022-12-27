var express = require('express');
var router = express.Router();


router.post('/insertAllData', require('../controllers/storeAPI').insertAllData)
router.get('/getAllProductData', require('../controllers/storeAPI').getAllData)
router.get('/getSpecificData', require('../controllers/storeAPI').getSpecificData)
router.get('/getPatternMatchingData', require('../controllers/storeAPI').getPatternMatchingData)
router.get('/getDataSorted', require('../controllers/storeAPI').getDataSorted)
router.get('/getDataSortedReq', require('../controllers/storeAPI').getDataSortedReq)
router.get('/getSelectedData', require('../controllers/storeAPI').getSelectedData)


module.exports = router




