const express = require('express');
const path =require('path')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT|| 3000;

app.use(express.static("public"))
app.listen(PORT,()=>{
    console.log('server is listening '+PORT);
});

app.get('/',(req,res)=>{
    res.send('hello from express')
})
app.get('/about/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`)
})