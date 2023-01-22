// const {Schema,model}= require ('mongoose');
const mongoose=require('mongoose')
const { Timestamp } = require("mongodb");



const reactionSchema=new mongoose.Schema({
    // reactionId:{ type:String, required:true},
    //   * Default value is set to a new ObjectId
    //   * Use Mongoose's ObjectId data type
      username:{
        type:String,
        required:true,
      },
      reactionBody:{
        type:String,
        required:true,
        //   * 280 character maximum
      },
      createdAt:{
        date: { type: Date, default: Date.now },
        //   * Use a getter method to format the timestamp on query
      }
  })
 
  const Reaction=mongoose.model('Reaction',reactionSchema)

module.exports=Reaction

