
const express = require('express');
const router = express.Router();
const controller = require('../controller/expense');
const middle = require('../middleware/auth');

router.post('/', middle.authorizerUser, controller.newExpense);
router.get('/', middle.authorizerUser, controller.allExpense);
router.delete('/', middle.authorizerUser, controller.deleteExpense);
router.put('/', middle.authorizerUser, controller.updateExpense);
router.get('/editexp', middle.authorizerUser, controller.editexp);


module.exports = router;