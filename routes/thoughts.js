const router=require('express').Router()
const thoughtsController=require('../controllers/thoughtsController')


router.post('/create', thoughtsController.create)


router.get('/', thoughtsController.find)


router.post('/update/:id', thoughtsController.update)


router.delete('/delete/:id', thoughtsController.delete)

// router.put('/create', thoughtsController.friendCount)

// router.get('/create', thoughtsController.displayFriendCount)


module.exports=router