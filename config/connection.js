const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/19noSql_db');


module.exports=mongoose.connection

// API routes
//USER USER USER ROUTESS

// /api/user 
// -Get all users 
// -Post a new user 

// /api/user/:userid
// -Get a single user 
// -Put update a user by id 
// -Delete a user by Id

// /api/user/userId/friend/:friendId
// -Post to add new friend
// -Delete to remove friend


//THOUGHT THOUGHT ROUTES

// /api/thought
// -Get to get all thoughts
// -Post to create new thought and push to Array

// /api/thought/:thoughtId
// -Get to get a single thought by Id
// -Put to update a thought by Id
// -Delete to remove a thought by Id

// /api/thoughts/;thoughtId/reaction/:reactionId
// -Delete to remove a reaction by id



