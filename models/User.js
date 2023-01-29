const {Schema,model}= require('mongoose');//deconstructed version of const mongoose=require('mongoose')
const mongoose= require ('mongoose');


//REACTION REACTION  ?? REACTION REACTION //REACTION REACTION  ?? REACTION REACTION

const ReactionSchema= new Schema({
  reactionId:{
    // type: ObjectId,
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
// meta:{
//     reactions:Number,
},
{
toJSON:{
  virtuals:true,
  getters:true,
},
id:false,
})

ReactionSchema.virtual('number-of-reactions')
.get(function(){
 return this.reactions.length

})


//REACTION REACTION  ?? REACTION REACTION //REACTION REACTION  ?? 


//THOUGHTS THOUGHTS //THOUGHTS THOUGHTS //THOUGHTS THOUGHTS //THOUGHTS THOUGHTS
const ThoughtsSchema=new Schema({

  username: {
    type: String,
    required: "a username is required",//"a username is required",
    // ref:'User'
  },
  thoughtText:{
    type: String,
    required: "A comment is required",//"Text between 1 and 280 characters is required ",
    // {max:1, min:280}
    minlength:1,
    maxlength:280,
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
   reaction: [ReactionSchema],
 
},
{
  //   toJSON:{
  //   virtuals:true,
  //   getters:true,
  // },
  // id:false,
 })


//THOUGHTS THOUGHTS //THOUGHTS THOUGHTS //THOUGHTS THOUGHTS //THOUGHTS THOUGHTS

//////////////////////////////////////////////////////////////////
const UserSchema=new Schema({

    username:{ 
    type:  String,
    required: "a username is required",
    unique: true, 
    trim: true,
    },
    email:{
    type:String,
    required:"An email address is required",
    unique: true, 
    match:[ /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,'email is required'],
    },
    friends: [
      {
        type:Array,
      // type:Schema.Types.ObjectId,
     ref:'User',//referencing User model
      },
    ],
      friendCount:{
        type:Number,
      },
      thoughts:ThoughtsSchema,
    },
    {
    toJSON:{
    virtuals:true,
    getters:true,
  },
  id:false,
 })
  
 //friend and reactions calculators
 UserSchema.methods.countFriends=async function(){
this.friendCount=this.friends.length
console.log(this.friends.length)

await this.save()
 }

 UserSchema.virtual('number-of-friends')
 .get(function(){
  return this.friends.length

 })


  const User= model('User',UserSchema)
module.exports=User

