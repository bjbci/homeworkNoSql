const {Schema,model}= require ('mongoose');
const ThoughtsSchema=new Schema({

    thoughtText:  String, // String is shorthand for {type: String}
    username: String,
    // reactions: Array(reactionSchema),
    // comments: [{ body: String, date: Date }],
    // createdAt: { type: Date, default: Date.now },
    
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
