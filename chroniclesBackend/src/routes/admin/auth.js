const express = require('express');
const { signup, login } = require('../../controller/admin/auth');
const { requireLogin } = require('../../common-middleware/index');
const { validateSignupRequest, isRequestValidated, validateLoginRequest } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/login', validateLoginRequest, isRequestValidated, login);

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);



module.exports = router;