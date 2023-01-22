const router=require('express').Router()
const friendController=require('../controllers/friendController')


router.post('/',friendController.create)


router.get('/',friendController.read)//.read was .find


router.put('/update/:id',friendController.update)


router.delete('/delete/:id',friendController.delete)




module.exports=router