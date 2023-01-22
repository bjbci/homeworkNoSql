const router=require('express').Router()
const userController=require('../controllers/userController')


router.post('/create',userController.create)


router.get('/',userController.find)


router.post('/update/:id',userController.update)


router.delete('/delete/:id',userController.delete)

// router.put('/create',userController.friendCount)

// router.get('/create',userController.displayFriendCount)


module.exports=router