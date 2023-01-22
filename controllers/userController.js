const {User}=require('../models')

module.exports={

//create
create: async function(req,res){
    try{
    // const result=  await db.collection('users').insertOne(req.body)
    const result =await User.create(req.body)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},

//find

read: async function(req,res){
    try{
        // const users= await db.collection('users').find().toArray()
        const users=await User.find()
        res.json(users)
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

        const result=await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
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
        const result =await User.findByIdAndDelete(req.params.id)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
},


///////route to CREATE friend count
create:  async function(req,res){
    const user=await User.findById(req.params.id)
    console.log(user)
    res.end()
},

///////route to GET friend count
find: async function(req,res){
    const results=await User.aggregate([
        {
            $group:{
                _id:"FRIENDS COUNT",
              sum:{$max: '$username'}  
            }
        }
    ])
    res.json(results)
}

}

