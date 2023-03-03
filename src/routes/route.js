const express = require('express');
const router = express.Router();

const {postInvitation, DashboardPage, listInvitation, getListInvitation} = require('../controllers/userController')

 // admin get pages routes
 router.get('/', DashboardPage);
 router.post('/post-invitation', postInvitation);

router.get('/listInvitation', listInvitation)
router.get('/getListInvitation', getListInvitation)




module.exports =  router;