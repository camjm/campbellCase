const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

// Do work here
router.get('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  console.log(req.params);
  res.render('Hey! It works!');
});


module.exports = router;
