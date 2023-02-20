// const express = require("express");
// const app = express();

// const mongoose = require("mongoose")
// app.use(express.json());

// // DB CONNECTION --->f
// mongoose.connect("mongodb://localhost:27017/ShahinUni", {
//     useNewUrlParse: true,
//     useUnifiedTopology: true
// }, (err) => {
//     if (!err) {
//         console.log("connected to db")
//     } else {
//         console.log("error")
//     }
// }) 


// app.listen(3000, () => {
//     console.log("on port 3000")
// })


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const ObjectId = require('mongodb').ObjectId;
// const MongoClient = require('mongodb').MongoClient;
// require('dotenv').config();


// const app = express()
// app.use(bodyParser.json());
// app.use(cors());

// const port = process.env.PORT || 3001;

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wqbxu.mongodb.net/?retryWrites=true&w=majority`;


// app.get('/', (req, res) => {
//   res.send("Welcome!")
// })

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//     const userDataCollection = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION_NAME}`);
  
//     console.log('db connected')






// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   });

const mongoose = require('mongoose')
const express = require('express');
const app = express();



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shahinbhuiyan:P4Ie9raXeHH7rpzI@cluster0.yzoberz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connected")
  client.close();
});



// const DB ='mongodb+srv://shahinbhuiyan:P4Ie9raXeHH7rpzI@cluster0.yzoberz.mongodb.net/electricaluserDb?retryWrites=true&w=majority' 

// mongoose.connect(DB, {
//     useNewUrlParser: true, 
//     useCreateIndex: true, 
//     useUnifiedTopology: true, 
//     useFindAndModify: false
// }).then(() => {
//     console.log("connected");
// }).catch((err) => {
//     console.log("no connection")
// })

app.get('/', (req, res) => {
  res.send("Welcome!")
})

// app.post('/post', (req, res) => {
//     console.log('hitted')
//     const data = req.body;
//     userDataCollection.insertOne(data)
//       .then(result => {
//         res.send(result.insertedCount > 0)
//         console.log("inserted")
//       })
//   })

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001`)
  });
