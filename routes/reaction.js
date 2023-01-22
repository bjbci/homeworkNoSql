const router=require('express').Router()
const reactionController=require('../controllers/reactionController')


router.post('/create' ,reactionController.create)


router.get('/' ,reactionController.read)//.read was .find


router.post('/update/:id' ,reactionController.update)


router.delete('/delete/:id' ,reactionController.delete)




module.exports=router