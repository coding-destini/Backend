const http = require('http');


// Create a server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
   //sending responser
    res.end('Hello Node Js');
})


// start the server
const port = 3000

server.listen(port,()=>{
    console.log(`Server is Started at port ${port}`);
})


