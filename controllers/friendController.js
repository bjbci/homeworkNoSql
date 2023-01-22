const {Friend}=require('../models')

module.exports={

//create
create: async function(req,res){
    try{
    // const result=  await db.collection('users').insertOne(req.body)
    const result =await Friend.create(req.body)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

//find

read: async function(req,res){
    try{
        // const users= await db.collection('users').find().toArray()
        const friends=await Friend.find()
        res.json(friends)
    }catch(err){
        res.status(500).json(err)
    }
},

//update
update:  async function(req,res){
    try{
        // const result= await db.collection('users').updateOne(
        //     {_id:ObjectId(req.params.id)},
        //     {$set:req.body}
        // )

        const result=await Friend.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

//delete
delete:  async function(req,res){
    try{
        // const result= await db.collection('users').deleteOne({
        //     _id:ObjectId(req.params.id)
        // })
        const result =await Friend.findByIdAndDelete(req.params.id)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},
}

