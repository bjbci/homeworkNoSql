const {User}=require('../models')


module.exports={

    create: async function (req,res){
         try{
            // const result= await db.collection('user').insertOne(req.body)
            //     res.json(result)
            const result =await User.create(req.body)//req.body is the data being passed in
                res.json(result)
            }catch(err){
                res.status(500).json(err)
            }
     },

     find: async function (req,res) {
        try{
            // const user= await db.collection('user').find().toArray()
            const users=await User.find()
                res.json(users)
        
            // const result =await User.create(req.body)
                // res.json(user)
            }catch(err){
                res.status(500).json(err)
            }
     },


     update: async function (req,res){
        try{
        // const result=await db.collection('user').updateOne(
        //     {_id:ObjectId(req.params.id)},//where clause at this id
        //     {$set:req.body}
            const result=await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
            res.json(result)
        //(req.params.id)
          
        }catch(err){
            res.status(500).json(err)
        }
     },

    delete: async function (req,res) {
            try{
        
                // const result=await db.collection('user').deleteOne({    //(req.params.id)
               
                const result =await User.findByIdAndDelete(req.params.id)
                res.json(result)
            }catch(err){
                res.status(500).json(err)
            }
        },

    friendCount: async function(req,res) {
        try{
        const user=await User.findById(req.params.id)
        user.countFriends()
        console.group(user)
        res.json(user)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
 }
}
// UserSchema.methods.countFriends=async function(){
//     this.friendCount=this.friends.length
//     console.log(this.friends.length)
    
//     await this.save()
//      }
            

