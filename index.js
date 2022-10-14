require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');

const app = express();
const departmentRouter = require('./routes/department')
const noteRouter = require('./routes/note')
const userRouter = require('./routes/user');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('PERSON DATA')
});

app.use('/api/v1', userRouter);
app.use('/api/v1', noteRouter);
app.use('/api/v1', departmentRouter);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000, () => {
            console.log('Sever is listening on port 5000...')
        })
    } catch (error) {
        console.log(error)
        
    }
}

start()