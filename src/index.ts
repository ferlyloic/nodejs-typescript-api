import * as http from "http";
import express, {Express} from "express";
console.log("Hello World!");
//create a server object:

const app: Express = express();

const server = http.createServer(app);

app.get('/',(req,res)=> {
    res.status(200).json({response: 'Hello World'})
})

//the server object listens on port 8080
server.listen(8080);
