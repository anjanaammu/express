const express=require('express');
const app=express();
const port=1400;
const cors=require('cors');
const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(cors());


//Database connection
mongoose.connect('mongodb://localhost:27017/Backend')
.then(()=>{
    console.log('MongoDB connected successfully');
    
})
.catch((err)=>{
    console.error('MongoDB connection error:',err);
});



app.listen(port,()=>{
    console.log(`Server running on port ${port} `);
    
});

