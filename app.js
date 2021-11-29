const express=require('express');
const app=express();

app.get('/',function(req, res){
    res.json('App is running');
});

app.get('/hello',function(req, res){
    res.json('Hello');
});

app.listen(80);