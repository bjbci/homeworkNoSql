const router=require('express').Router()
const userRoutes=require('./user')
const thoughtsRoutes=require('./thoughts')
const friendRoutes=require('./friend')
const reactionRoutes=require('./reaction')

router.use('/user',userRoutes)
router.use('/thoughts',thoughtsRoutes)
router.use('/friend',friendRoutes)
router.use('/reaction',reactionRoutes)

// router.use('/api/user',userRoutes)
// router.use('/api/thoughts',thoughtsRoutes)
// router.use('/api/friend',friendRoutes)
// router.use('/api/reaction',reactionRoutes)

module.exports=router