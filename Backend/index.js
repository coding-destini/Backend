const express = require('express');
const bodayParser = require('body-parser')


const app = express();
app.use(bodayParser.json())


let users = [];

// {
//     id : 1,
//     name : " jhon",
//     "email" : "jhon@gmail.com"
// }

app.get('/',(req,res)=>{
res.send("Backend 1st Project")
})

// create a user 
app.post('/create',(req,res)=>{
    const newUser = {
        id : req.body.id,
        name : req.body.name,
        email : req.body.email
    };
    users.push(newUser)
    res.json(201,
        {
        message : "User Craeted sucessfully",
        user : newUser
    })
    console.log(newUser);
//     res.status(200).json({
//     user : newUser
//    })
})

//Get User 
app.get('/alluser',(req,res)=>{
    res.json(200,users)
})

//get specific user
app.get('/user/:id',(req,res)=>{
    const userID = req.params.id;
    // console.log("My user Id ", userID);
    const Getuser = users.filter((u)=>u.id == userID);
    res.json(200,{
        message : "User Found sucessfully",
        user : Getuser
    })
})




const port = 8080;
app.listen(port,()=>{
    console.log(`Server is started at port ${port}`);
})