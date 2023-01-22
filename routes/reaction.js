const router=require('express').Router()
const reactionController=require('../controllers/reactionController')


router.post('/' ,reactionController.create)


router.get('/' ,reactionController.read)//.read was .find


router.put('/update/:id' ,reactionController.update)


router.delete('/delete/:id' ,reactionController.delete)




module.exports=router