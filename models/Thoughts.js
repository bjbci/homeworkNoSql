const {Schema,model}= require ('mongoose');




const ThoughtsSchema=new Schema({

    thoughtText:{
      type: String,
      required: "Text between 1 and 280 characters is required ",
      // {max:1, min:280}
    },
    username: {
      type: String,
      required: "a username is required",
    },
    createdAt:{
      date: { type: Date, default: Date.now },
      //   * Use a getter method to format the timestamp on query
    }
    
    // reaction: [reactionSchema],
    // * `reactions` (These are like replies)
    // * Array of nested documents created with the `reactionSchema`
    
    //}
  })
  
  //   reactionsCount=reaction.length,

const Thoughts=model('Thoughts',ThoughtsSchema)

module.exports=Thoughts



//many thoughts have one user

