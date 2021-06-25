var http = require("http");
var date = require("./myDate");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Curent date and time are " + date.myDate()); //write a response to the client
    response.end();// end the response 
}).listen(8082);
console.log("Server running at http://127.0.0.1:8082/");

