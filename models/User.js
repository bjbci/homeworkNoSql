const {Schema,model}= require ('mongoose');



const UserSchema=new Schema({

    username:{ 
    type:  String,
    required: true,
    unique: true, 
    // { $trim: { input: <string>,  chars: <string> } }
    },
    email:{
    type:String,
    required: true,
    unique: true, 
     validate: {
          validator: function(v) {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
          },
          message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'email is required']
      },
    //  * Must match a valid email address (look into Mongoose's matching validation)
    
  
    // thoughts: [_id],----referencing Thoughts model
    // friends: [friendSchema],----ids referncing User model
     
  })
  // friendCount=friends.length

const User=model('User',UserSchema)

module.exports=User



//one user has many thoughts

