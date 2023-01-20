const { json } = require('body-parser');
const express = require ('express')
const { MongoClient,ObjectId } = require('mongodb');
const app= express()
const port=process.env.PORT||3001

const client=new MongoClient('mongodb://localhost:27017')
console.log(client)

const dbName='19noSql_db'
let db

app.use(express.json())


// Express.js for routing,
//  a MongoDB database,
// and the Mongoose ODM. 
// In addition to using the [Express.js]
//   you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.


///////////create users---prob need create comments
app.post('/create', async(req,res)=>{
    try{
    const result=  await db.collection('users').insertOne(req.body)
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
})


///////////read users---prob need read comments
app.get('/read', async(req,res)=>{
    try{
        const users= await db.collection('users').find().toArray()
        res.json(users)
    }catch(err){
        res.status(500).json(err)
    }
})

///////////update users---prob need update comments
app.put('/update/:id', async(req,res)=>{
    try{
        const result= await db.collection('users').updateOne(
            {_id:ObjectId(req.params.id)},
            {$set:req.body}
        )
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
})

//////////  ADD/DELETE COMMENTS AND FRIENDS

///////////delete users---prob need delete comments
app.delete('/delete/:id', async(req,res)=>{
    try{
        const result= await db.collection('users').deleteOne({
            _id:ObjectId(req.params.id)
        })
        res.json(result)
    }catch(err){
        res.status(500).json(err)
    }
})

const init =async()=>{
    await client.connect()
    db=client.db(dbName)

    
    app.listen(port, ()=>{
        console.log(`noSQL homework app listening on port: ${port}`)
    })
}

init()