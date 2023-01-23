const asyncHandler=require('express-async-handler')
const User=require('../models/User')

//desc get goals
//route GET /api/user
const getUsers=asyncHandler(async(req,res)=>{
    const users=await User.find()
        res.status(200).json(users)
   
    })

            
 //POST /api/user
const createUsers=asyncHandler(async(req,res)=>{
 
    try{
    
        const result =await User.create(req.body)
            res.json(result)
        }catch(err){
            res.status(500).json(err)
        }
 })

//PUT  /api/goals/:id
const updateUsers=asyncHandler(async(req,res)=>{
   
    try{

        const result=await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
 })


//DELETE  /api/goals/:id
const deleteUsers=asyncHandler(async(req,res)=>{
    
     try{
         const result =await User.findByIdAndDelete(req.params.id)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
 })

module.exports={
getUsers,
createUsers,
updateUsers,
deleteUsers,
}




// ///////route to CREATE friend count
// create:  async function(req,res){
//     const user=await User.findById(req.params.id)
//     console.log(user)
//     res.end()
// }

// ///////route to GET friend count
// find: async function(req,res){
//     const results=await User.aggregate([
//         {
//             $group:{
//                 _id:"FRIENDS COUNT",
//               sum:{$max: '$username'}  
//             }
//         }
//     ])
//     res.json(results)
// }


