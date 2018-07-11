const express = require('express');
const app = express();
console.log(`app object gets created`);
 app.get('/api/author',(req,res)=>{
 //res.sendStatus(200);
 res.send('<h1>Author : Rajit juyal</h1>');
 res.end();
 });

 var genres =
 [
     {name:"action"},
     {name:"adventure"},
     {name:"comdey"},
     {name:"sci-fie"},
 ];
 
 app.get('/api/genre',(req,res)=>{
   // res.sendStatus(200);
    res.send(genres);
    res.end();
    });
   

    app.put('/api/genre/:name',(req,res)=>{
        // res.sendStatus(200);
        let name =app.param.name;
        //need to think
         res.send(genres);
         res.end();
         });
    

const port = 38080;
 app.listen(port,()=> {console.log( `Node app is listening to ${port}`);});
 //app.listen(port);

