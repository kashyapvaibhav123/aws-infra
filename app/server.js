require('dotenv').config();

const express=require('express');
const app =express();
const PORT = process.env.PORT || 3000;
const fs=require('fs');
const MESSAGE=process.env.MESSAGE || "CLOUD IS RUNNING"
const LOG_FILE="/var/log/myapp.log";
function logMessage(message) {
    const log = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(LOG_FILE,log);
}

app.get('/',(req,res)=>{
    logMessage("Root endpoint accessed");
    res.send(MESSAGE);
});

app.get('/health',(req,res)=>{
    logMessage("endpoint accessed");
    res.json({status:"OK"});
});
app.listen(80,()=>{
    console.log("Server Start on port 80")
});
app.listen(PORT, () => {
    logMessage(`Server started on port ${PORT}`);
    console.log(`Server started on port ${PORT}`);
});