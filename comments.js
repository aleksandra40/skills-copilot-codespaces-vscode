// Create web server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
client.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Define the database and collection
const dbName = 'commentsDB';
const collectionName = 'comments';

// API endpoint to get comments
app.get('/comments', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const comments = await collection.find({}).toArray();
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving comments');
    }
});