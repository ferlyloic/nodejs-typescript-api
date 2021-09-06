import * as http from "http";
import express, {Express} from "express";
console.log("Hello World!");
//create a server object:

const app: Express = express();

const server = http.createServer(app);
server.listen(8080); //the server object listens on port 8080
app.get('/',(req,res)=> {
    res.json('Hello World')
})