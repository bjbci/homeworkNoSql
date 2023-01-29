const mongoose=require('mongoose')

const ReactionSchema= new mongoose.Schema({
    reactionId:{
        // type: ObjectId ,
        // default:() => new ObjectId
    },
    username: {
        type: String,
        required: true,//"a username is required",
        // ref:'User'
    },
    reactionBody:{
        type:String,
        required:true,
        maxLength:280
    },
    createdAt:{
        type:Date,
        default: Date.now,
        date: { type: Date, default: Date.now },
        
    },
    meta:{
        reactions:Number,
    }
})
const Reaction=mongoose.model('Reaction',ReactionSchema)
        module.exports=Reaction


