// const mongoose= require ('mongoose');
const {Schema,model}= require ('mongoose');



const UserSchema=new Schema({

    username:{ 
    type:  String,
    required: true,
    unique: true, 
    trim: true,
    },
    email:{
    type:String,
    required: true,
    unique: true, 
    match:[ /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,'email is required'],
          },
    thoughts: [
      {
       type :Schema.Types.Objectid,
       ref:'Thoughts',//referencing Thoughts model
      },
      ],
     friends: [
      {
      type:Schema.Types.objectId,
     ref:'User',//referencing User model
      },
    ],
  },
  {
    toJSON:{
    virtuals:true,
    getters:true,
  },
  id:false,
 })
  // friendCount=friends.length

const User=model('User',UserSchema)

module.exports=User



//one user has many thoughts

