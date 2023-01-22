require('./config/connection')//require in mongoose connection
const express = require ('express')
const {User, Reaction, Thoughts}=require("./models")//this will go to index automatically-which is exporting all the models
const routes=require('./routes')


// User.create({
//     username:'BJB',
//     email:'bajebi@mac.com',
//     body:'how you doin?'
// }).then(newUser=>console.log(newUser))

const app= express()
// const { MongoClient,ObjectId } = require('mongodb');//dont need with mongoose
const port=3001 

//dont need with mongoose:
// const client=new MongoClient('mongodb://localhost:27017')   
// console.log(client)

// const dbName='19noSql_db'
// let db

app.use(express.json())
app.use(routes)


// Express.js for routing,
//  a MongoDB database,
// and the Mongoose ODM. 
// In addition to using the [Express.js]
//   you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.


///////////create users---prob need create comments
// app.post('/create', async(req,res)=>{
//     try{
//     // const result=  await db.collection('users').insertOne(req.body)
//     const result =await User.create(req.body)
//         res.json(result)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// app.post('/create', async(req,res)=>{
//     try{
//     // const result=  await db.collection('users').insertOne(req.body)
//     const result =await Thoughts.create(req.body)
//         res.json(result)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })


///////////read users---prob need read comments
// app.get('/read', async(req,res)=>{
//     try{
//         // const users= await db.collection('users').find().toArray()
//         const users=await User.find()
//         res.json(users)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// app.get('/read', async(req,res)=>{
//     try{
//         // const users= await db.collection('users').find().toArray()
//         const thoughts=await Thoughts.find()
//         res.json(thoughts)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })


///////////update users---prob need update comments
// app.put('/update/:id', async(req,res)=>{
//     try{
//         // const result= await db.collection('users').updateOne(
//         //     {_id:ObjectId(req.params.id)},
//         //     {$set:req.body}
//         // )

//         const result=await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
//         res.json(result)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// app.put('/update/:id', async(req,res)=>{
//     try{
//         // const result= await db.collection('users').updateOne(
//         //     {_id:ObjectId(req.params.id)},
//         //     {$set:req.body}
//         // )

//         const result=await Thoughts.findByIdAndUpdate(req.params.id, req.body,{new:true})
//         res.json(result)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

//////////  ADD/DELETE COMMENTS AND FRIENDS

///////////delete users---prob need delete comments
// app.delete('/delete/:id', async(req,res)=>{
//     try{
//         // const result= await db.collection('users').deleteOne({
//         //     _id:ObjectId(req.params.id)
//         // })
//         const result =await User.findByIdAndDelete(req.params.id)
//         res.json(result)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// app.delete('/delete/:id', async(req,res)=>{
//     try{
//         // const result= await db.collection('users').deleteOne({
//         //     _id:ObjectId(req.params.id)
//         // })
//         const result =await Thoughts.findByIdAndDelete(req.params.id)
//         res.json(result)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })
//dont need with mongoose
// const init =async()=>{
    //dont need with mongoose:
    // await client.connect()
    // db=client.db(dbName)

   
    /////////////////NEW ROUTES /////////////////////////////////

    // app.put('/add-reaction/:id', async(req,res)=>{
    //     const user=await User.findById(req.params.id)
    //     user.
    //     res.end()


    // })

    // app.put('/add-friend/:id', async(req,res)=>{
    //     const user=await User.findById(req.params.id)
    //     console.log(user)
    //     res.end()


    // })

/////////////  AGGREGATE FRIENDS COUNT AND REACTIONS COUNT
// app.get('/aggregate-friends',async(req,res)=>{
//     const results=await User.aggregate([
//         {
//             $group:{
//                 _id:"FRIENDS COUNT",
//               sum:{$max: '$username'}  
//             }
//         }
//     ])
//     res.json(results)

// })

// app.get('/aggregate-reactions',async(req,res)=>{
//     const results=await User.aggregate([
//         {
//             $group:{
//                 _id:"REACTIONS COUNT",
//               sum:{$max: '$username'}  
//             }
//         }
//     ])
//     res.json(results)
// })




    app.listen(port, ()=>{
        console.log(`noSQL homework app listening on port: ${port}`)
    })
//dont need with mongoose :   
//}


//dont need with mongoose
// init()