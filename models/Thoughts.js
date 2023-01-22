const {Schema,model}= require ('mongoose');
const reactionSchema=require('./Reaction')



const ThoughtsSchema=new Schema({

    thoughtText:{
      type: String,
      required: true,//"Text between 1 and 280 characters is required ",
      // {max:1, min:280}
      minlength:1,
      maxlength:280,
    },
    username: {
      type: String,
      required: true,//"a username is required",
      ref:'User'
    },
    createdAt:{
      type:Date,
      default: Date.now,
      // date: { type: Date, default: Date.now },
      //   * Use a getter method to format the timestamp on query
      get: (date)=>{
        let options={weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric'}
        return date.toLocalDateString('en-US',options)
      },
    },
    
      // * Array of nested documents created with the `reactionSchema`
     reaction: [reactionSchema],
    // * `reactions` (These are like replies)
  },
  {
      toJSON:{
      virtuals:true,
      getters:true,
    },
    id:false,
   })


 //   reactionsCount=reaction.length
  // Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query

  thoughtsSchema.virtual('reactionCount').get(function()
  {
    return this.reaction.length
  })

  // .get(function(){
  //   return reaction.length
  // })
  



const Thoughts=model('Thoughts',ThoughtsSchema)//this is where the model is actually created

module.exports=Thoughts



//many thoughts have one user

