const router=require('express').Router()
const userRoutes=require('./user')
const thoughtsRoutes=require('./thoughts')
const reactionsRoutes=require('./reactions')

router.use('/api/users',userRoutes)
router.use('/api/thoughts',thoughtsRoutes)
router.use('/api/reactions',reactionsRoutes)



module.exports=router