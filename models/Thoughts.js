const {Schema,model, default: mongoose}= require ('mongoose');


const reactionSchema=new Schema({
  reactionId:{ type:String, required:true},
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






const ThoughtsSchema=new Schema({

    thoughtText:{
      type: String,
      required: "Text between 1 and 280 characters is required ",
    },
    username: {
      type: String,
      required: "a username is required",
    },
    reaction: [reactionSchema],
  
    // meta: {
    //   reactionsCount: Number,
//}
})

const Thoughts=model('Thoughts',ThoughtsSchema)

module.exports=Thoughts



//many thoughts have one user






//Database/collection(table)/document(BSON object/field(key)-are on documents/data


// Express.js for routing,
//  a MongoDB database, and 
//  the Mongoose ODM. 
//  In addition to using the [Express.js], you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.

// const Thoughts=mongoose.model('Thoughts',{thoughtText:String,createdAt:DATE,username:String, reactions:Array(reactionSchema)})


// const blogSchema = new Schema({
//     thoughtText:  String, // String is shorthand for {type: String}
//     username: String,
//     reactions: Array(reactionSchema),
//     comments: [{ body: String, date: Date }],
//     createdAt: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       reactionsCount: Number,
     
//     }
//   });

// **Thought**:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`


//db.thoughts.find().count()
//const count=db.thoughts.find().count()
