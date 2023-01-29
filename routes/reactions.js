const router=require('express').Router()
const reactionsController=require('../controllers/reactionsController')


router.post('/create',reactionsController.create)


router.get('/',reactionsController.find)


router.put('/update/:id',reactionsController.update)


router.delete('/delete/:id',reactionsController.delete)



router.get('/tally-comment-reactions/:id/',reactionsController. countReactions)

module.exports=router