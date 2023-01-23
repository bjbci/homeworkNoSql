// const router=require('express').Router()
// const userController=require('../controllers/userController')


// router.post('/',userController.create)


// router.get('/',userController.find)


// router.put('/update/:id',userController.update)


// router.delete('/delete/:id',userController.delete)

//  router.put('/create',userController.friendCount)

//  router.get('/create',userController.displayFriendCount)


// module.exports=router

const router=require('express').Router()
const userController=require('../controllers/userController')


router.post('/',userController.create)


router.get('/',userController.find)


router.put('/update/:id',userController.update)


router.delete('/delete/:id',userController.delete)

 router.put('/create',userController.friendCount)

 router.get('/create',userController.displayFriendCount)


module.exports=router
