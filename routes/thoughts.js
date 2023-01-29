const router=require('express').Router()
const thoughtsControllers=require('../controllers/thoughtsControllers')


router.post('/create',thoughtsControllers.create)


router.get('/',thoughtsControllers.find)


router.put('/update/:id',thoughtsControllers.update)


router.delete('/delete/:id',thoughtsControllers.delete)



//  router.get('/tally-comment-reactions/:id/',thoughtsControllers.countReactions)

module.exports=router

// **`/api/thoughts`**

// * `GET` to get all thoughts

// * `GET` to get a single thought by its `_id`

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)