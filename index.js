
var http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(req.url);
    res.end();
}).listen(8083);
console.log("Server running at http://127.0.0.1:8083/Hunter");