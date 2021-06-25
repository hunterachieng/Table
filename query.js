var http = require("http");
var file = require("fs");
http.createServer((req,res)=>{
    file.readFile("index.html",function (err, data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(data)
        return res.end();
    });
}).listen(8084);
console.log("Server running at http://127.0.0.1:8084/");