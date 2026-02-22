const express=require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send("Cloud App Running");
});

app.get('/health',(req,res)=>{
    res.json({status:"OK"});
});
app.listen(80,()=>{
    console.log("Server Start on port 80")
});