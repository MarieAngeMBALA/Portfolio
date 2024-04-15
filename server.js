const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const connectDB = require('./config/database');

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

// Routes
app.use('/api/users', userRoute);

app.get('/', (req,res)=>{
    res.send('Hello Word');
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
});