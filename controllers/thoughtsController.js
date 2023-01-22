const {objectId}=require('mongoose').Types
const {Thoughts,User}=require('../models')

module.exports={

//create
create: async function(req,res){
    try{
    // const result=  await db.collection('users').insertOne(req.body)
    const result =await Thoughts.create(req.body)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

//find
find: async function(req,res){
    try{
        // const users= await db.collection('users').find().toArray()
        const thoughts=await Thoughts.find()
        res.json(thoughts)
    }catch(err){
        res.status(500).json(err)
    }
},


//update
update: async function(req,res){
    try{
        // const result= await db.collection('users').updateOne(
        //     {_id:ObjectId(req.params.id)},
        //     {$set:req.body}
        // )

        const result=await Thoughts.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

//delete
delete: async function(req,res){
    try{
        // const result= await db.collection('users').deleteOne({
        //     _id:ObjectId(req.params.id)
        // })
        const result =await Thoughts.findByIdAndDelete(req.params.id)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},


//route to count number of reactions
create: async function(req,res){
    const user=await User.findById(req.params.id)
    user.
    res.end()
},
//route to display number of reactions
find:async function(req,res){
    const results=await User.aggregate([
        {
            $group:{
                _id:"REACTIONS COUNT",
              sum:{$max: '$username'}  
            }
        }
    ])
    res.json(results)
}



}