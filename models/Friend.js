const mongoose=require('mongoose')

const friendSchema = new  mongoose.Schema({
    // reactionId:{ type:String, required:true},
    //   * Default value is set to a new ObjectId
    //   * Use Mongoose's ObjectId data type
      username:{
        type:String,
        required:true,
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
   
  })
  const Friend=mongoose.model('Friend',friendSchema)

  module.exports=Friend