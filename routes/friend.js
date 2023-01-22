const router=require('express').Router()
const friendController=require('../controllers/friendController')


router.post('/create',friendController.create)


router.get('/',friendController.read)//.read was .find


router.post('/update/:id',friendController.update)


router.delete('/delete/:id',friendController.delete)




module.exports=router