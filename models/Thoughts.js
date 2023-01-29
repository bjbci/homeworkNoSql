const mongoose=require('mongoose')

const ThoughtsSchema=new mongoose.Schema({
    
    username: {
        type: String,
        required: true,//"a username is required",
        //   ref:'User'
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
    // reaction: [ReactionSchema],
    // * `reactions` (These are like replies)
},
{
    //   toJSON:{
        //   virtuals:true,
        //   getters:true,
        // },
        // id:false,
    })
    
    
    //   reactionsCount=reaction.length
    // Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query
    
    //   thoughtsSchema.virtual('reactionCount').get(function()
    //   {
        //     return this.reaction.length
        //   })
        
        //friend and reactions calculators
        // ReactionSchema.methods.countReactions=async function(){
        //     this.reactionCount=this.reactions.length
        //     console.log(this.reactions.length)
        //     await this.save()
            
        // }
        
       
        const Thoughts=mongoose.model('Thoughts',ThoughtsSchema)
        module.exports=Thoughts
        
