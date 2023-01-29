const router=require('express').Router()
const userControllers=require('../controllers/userControllers')


router.post('/',userControllers.create)


router.get('/',userControllers.find)


router.put('/update/:id',userControllers.update)


router.delete('/delete/:id',userControllers.delete)


router.get('/tally-user-friends/:id/',userControllers.friendCount)



module.exports=router