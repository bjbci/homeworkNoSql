const router=require('express').Router()
const thoughtsController=require('../controllers/thoughtsController')


router.post('/', thoughtsController.create)


router.get('/', thoughtsController.find)


router.put('/update/:id', thoughtsController.update)


router.delete('/delete/:id', thoughtsController.delete)

// router.put('/create', thoughtsController.friendCount)

// router.get('/create', thoughtsController.displayFriendCount)


module.exports=router

// **`/api/thoughts`**

// * `GET` to get all thoughts

// * `GET` to get a single thought by its `_id`

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)