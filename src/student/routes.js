const {Router} = require('express');

const router = Router();
const controller = require('./controller')


router.get('/',controller.getStudents)
router.post('/',controller.postStudents)

module.exports = router;