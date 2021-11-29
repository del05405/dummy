const express=require('express');
const app=express();

app.get('/',function(req, res){
    res.json('Hi');
});

app.listen(3000);