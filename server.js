const express = require ('express')
const { MongoClient } = require('mongodb');
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


app.post('/create', (req,res)=>{


})

app.get('read', (req,res)=>{


})


const init =async()=>{
    await client.connect()
    db=client.db(dbName)

    const users= await db.collection('users').find().toArray()
    console.log(users)


    app.listen(port, ()=>{
        console.log(`noSQL homework app listening on port: ${port}`)
    })
}

init()