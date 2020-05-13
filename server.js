const express= require('express');
const mongoose=require('mongoose')
const app=express();
//init middelware
app.use(express.json())

//connect to DB
const db="mongodb+srv://rahma123:rahma123@monga-iejy2.mongodb.net/test?retryWrites=true&w=majority"
 
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
    if (err) throw err
    else
    console.log('Database connected...')
})


app.use('/api/reservation',require('./routes/reservation1'))
app.use('/api/user',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/annonce',require('./routes/annonce'))


app.listen(4000,(err)=>{
    if (err) throw err
    else
    console.log("server runnig on port 4000")
})