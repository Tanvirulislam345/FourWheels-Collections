const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.845tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("FourWheel-Car-Collection");
        const users = database.collection("All-Users");
        const ourProduct = database.collection("Our-Product");
        const booking = database.collection("booking");
        const customerReview = database.collection("Customer-Review");

        // post and get users
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await users.insertOne(user);
            // console.log(result);
            res.json(result);
        });

        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await users.findOne(query);
            let isAdmin = false;
            if (user?.role == 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        })

        //using upsert for update google signIn
        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await users.updateOne(filter, updateDoc, options);
            // console.log(result);
            res.json(result);
        });

        //make users admin
        app.put('/users/admin', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const updateDoc = { $set: { role: 'admin' } };
            const result = await users.updateOne(filter, updateDoc);
            // console.log(result);
            res.json(result);
        });


        //get and post products
        app.post('/ourcollection', async (req, res) => {
            const product = req.body;
            const result = await ourProduct.insertOne(product);
            console.log(result);
            res.json(result);
        });
        app.get('/ourcollection', async (req, res) => {
            const cursor = ourProduct.find({});
            const result = await cursor.toArray();
            // console.log(result);
            res.json(result);
        });
        app.get('/ourcollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await ourProduct.findOne(query);
            res.json(result);
        });
        app.delete('/ourcollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const deleteProduct = await ourProduct.deleteOne(query);
            // console.log('delete from database ',  deletePackage);
            console.log('delete from database');
            res.json(deleteProduct);
        })

        //get and post reviews
        app.post('/customerReview', async (req, res) => {
            const product = req.body;
            const result = await customerReview.insertOne(product);
            // console.log(result);
            res.json(result);
        });
        app.get('/customerReview', async (req, res) => {
            const cursor = customerReview.find({});
            const result = await cursor.toArray();
            // console.log(result);
            res.json(result);
        });


        //get and post booking
        app.post('/booking', async (req, res) => {
            const bookproduct = req.body;
            const result = await booking.insertOne(bookproduct);
            // console.log(result);
            res.json(result);
        })
        app.get('/booking', async (req, res) => {
            const cursor = booking.find({});
            const result = await cursor.toArray();
            // console.log(result);
            res.json(result);
        })
        app.get('/booking/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const cursor = booking.find(query);
            const result = await cursor.toArray();
            // console.log(result);
            res.json(result);
        })
        //update clear
        app.put('/booking/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const updateDoc = { $set: { status: 'shipped' } };
            const options = { upsert: true };
            const result = await booking.updateOne(query, updateDoc, options);
            res.send(result);
        });
        app.delete('/booking/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const deleteProduct = await booking.deleteOne(query);
            // console.log('delete from database ',  deletePackage);
            console.log('delete from database');
            res.json(deleteProduct);
        })



    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`localhost started ${port}`)
})