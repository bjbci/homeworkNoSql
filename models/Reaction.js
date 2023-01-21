const {Schema,model}= require ('mongoose');
const { Timestamp } = require("mongodb");

const ReactionSchema=new Schema({
    reactionId:{
        type: String,
        default:"new ObjectId",
    },
    username:{
        type: String,
        required: "A username is required",
    },
    reactionBody:{
        type:String,
        required: "maximum character count is 280"
    },
    date: { type: Date, default: Date.now },
   
})

const Reaction=model('Reaction',ReactionSchema)

module.exports=Reaction
// **Reaction** (SCHEMA ONLY)









// const Users=mongoose.model('Users',{reactionId:String,reactionBody:String,username:String, createdAt:Timestamp('use getter method to format timestamp on query')})


// const blogSchema = new Schema({
//     reactionId:String,
//     username: String,
//     reactionBody:String,
    
//     date: { type: Date, default: Date.now },
   
//   });

// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.