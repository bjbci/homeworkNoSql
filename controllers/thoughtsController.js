const asyncHandler=require('express-async-handler')
const Thoughts=require('../models/Thoughts')
// const {User}=require('../models')
//route GET /api/thoughts
const getThoughts=asyncHandler(async(req,res)=>{
    const thoughts=await Thoughts.find()
    res.status(200).json(thoughts)
})

//POST /api/thoughts
const createThoughts=asyncHandler(async(req,res)=>{
    
    try{  
        const result =await Thoughts.create(req.body)
            res.json(result)
        }catch(err){
            res.status(500).json(err)
        }
})

//PUT  /api/goals/:id
const updateThoughts=asyncHandler(async(req,res)=>{
    
    try{

        const result=await Thoughts.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE  /api/goals/:id
const deleteThoughts=asyncHandler(async(req,res)=>{
    
    try{
        
        const result =await Thoughts.findByIdAndDelete(req.params.id)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports={
getThoughts,
createThoughts,
updateThoughts,
deleteThoughts,

}

// //route to count number of reactions
// create: async function(req,res){
//     const user=await User.findById(req.params.id)
//     user.
//     res.end()
// },
// //route to display number of reactions
// find:async function(req,res){
//     const results=await User.aggregate([
//         {
//             $group:{
//                 _id:"REACTIONS COUNT",
//               sum:{$max: '$username'}  
//             }
//         }
//     ])
//     res.json(results)
// }
