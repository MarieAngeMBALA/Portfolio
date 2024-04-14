const express = require('express');
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const contentRoute = require('./routes/contentRoute');
const connectDB = require('./config/database');

connectDB();

const app = express();

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/contents', require('./routes/contentRoute'));
app.use('/api/auth', require('./routes/authRoute'));

app.get('/', (req,res)=>{
    res.send('Hello Word');
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
});