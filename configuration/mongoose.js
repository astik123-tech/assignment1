const mongoose = require('mongoose')
const DB = process.env.MONGODB_URL || 'mongodb://localhost:27017/demo100'

mongoose.connect('mongodb://localhost:27017/demo100', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then((resolve) => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Can not connect to database : " + err);
})

mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected");
})

process.on('SIGINT', async() => {
    mongoose.connection.close() 
    process.exit(0)
})