const { Router } = require('express');
const router = Router();

//controllers
const { authWidthToken } = require('../controllers/token.controller');
const { authWidthUser } = require('../controllers/login.controller');
const { createUser } = require('../controllers/singup.controller');
const { saveData } = require('../controllers/saveData.controller');

//middlewares
const { getData } = require('../controllers/getData.controller');
const { userMiddleware } = require('../middleware/user.middleware');
const { checkDataToSave } = require('../middleware/checkData.middleware');
const { tokenMiddleware } = require('../middleware/token.middleware');
const { createMiddleware } = require('../middleware/create.middleware');

router.get('/token/:id', tokenMiddleware, authWidthToken);
router.post('/user', userMiddleware, authWidthUser);
router.post('/create', createMiddleware, createUser);
router.get('/bloc/:id', tokenMiddleware, getData);
router.post('/update/:id', checkDataToSave, saveData);

module.exports = router;
