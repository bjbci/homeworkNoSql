// const {Schema,model}= require ('mongoose');
// const {objectId}=require('mongoose').Types//?why doesnt this work??
// const mongoose=require('mongoose')
const { Timestamp } = require("mongodb");
const {Schema,model, Types}=require('mongoose')



const reactionSchema=new Schema({
      reactionId:{
         type:Schema.Types.ObjectId,
        default:()=> new Types.ObjectId(),
      },
    //   * Default value is set to a new ObjectId
    //   * Use Mongoose's ObjectId data type
      username:{
        type:String,
        required:true,
      },
      reactionBody:{
        type:String,
        required:true,
        maxlength: 280,// character maximum
      },
      createdAt:{
        // date: { type: Date, default: Date.now },
        //   * Use a getter method to format the timestamp on query
        get: (date)=>{
          let options={weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric'}
          return date.toLocalDateString('en-US',options)
        },
      },
    },{
      toJSON:{
        virtuals:true,
        getters:true,
      },
      id:false,
      
  })
    //   reactionsCount=reaction.length
  // Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query

  // reactionSchema.virtual('reactionCount')
  // .get(function(){
  //   return reaction.length
  // })

  const Reaction= model('Reaction',reactionSchema)

module.exports=Reaction

