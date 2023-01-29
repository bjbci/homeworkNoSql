const {Reactions}=require('../models')


module.exports={

    create: async function (req,res){
         try{
        
            const result =await Reactions.create(req.body)
                res.json(result)
            }catch(err){
                res.status(500).json(err)
            }
     },

     find: async function (req,res) {
        try{
           
            const users=await Reactions.find()
                res.json(users)
            }catch(err){
                res.status(500).json(err)
            }
     },


     update: async function (req,res){
        try{
      
            const result=await Reactions.findByIdAndUpdate(req.params.id, req.body,{new:true})
            res.json(result)
       
          
        }catch(err){
            res.status(500).json(err)
        }
     },

    delete: async function (req,res) {
            try{
        
              const result =await Reactions.findByIdAndDelete(req.params.id)
                res.json(result)
            }catch(err){
                res.status(500).json(err)
            }
        },
        countReactions: async function(req,res) {
            try{
                const reactions=await Reactions.findById(req.params.id)
                reactions.countFriends()
                console.group(reactions)
                res.json(reactions)
                }catch(err){
                console.log(err)
                res.status(500).json(err) 
                }
     }
   
 }
