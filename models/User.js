const {Schema,model}= require ('mongoose');
const UserSchema=new Schema({

    username:  String, 
    email: String,
    body:   String,
    // thoughts: [ 'Thoughts-Model'],
    // friends: Array,
})
const User=model('User',UserSchema)

module.exports=User



//one user has many thoughts








//Database/collection(table)/document(BSON object/field(key)-are on documents/data



// Express.js for routing,
//  a MongoDB database,
// and the Mongoose ODM. 
// In addition to using the [Express.js]
//   you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.


// const Users=mongoose.model('Users',{username:String,email:String,thoughts:Array(Thoughts-Model), friends:Array(User-Model)})


// const blogSchema = new Schema({
//     username:  String, // String is shorthand for {type: String}
//     email: String,
//     body:   String,
//     thoughts: [ 'Thoughts-Model'],
//     friends: Array,
    
//   });

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)


// friendCount=friends.length

//db.friends.find().count()
//const count=db.friends.find().count()