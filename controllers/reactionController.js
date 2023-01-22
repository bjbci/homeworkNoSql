const {Reaction}=require('../models')

module.exports={

//create
create: async function(req,res){
    try{
    // const result=  await db.collection('users').insertOne(req.body)
    const result =await Reaction.create(req.body)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

//find

read: async function(req,res){
    try{
        // const users= await db.collection('users').find().toArray()
        const reactions=await Reaction.find()
        res.json(reactions)
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

        const result=await Reaction.findByIdAndUpdate(req.params.id, req.body,{new:true})
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
        const result =await Reaction.findByIdAndDelete(req.params.id)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

}

