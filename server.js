var http = require('http');
var fs = require('fs');
var url = require('url');

//based on https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm

// Domain to port forwarding service
// https://my.noip.com/#!/dynamic-dns
// BE SURE! running No-IP DUC app on this server


// on router : 192.168.0.1
// Port Forwarding
// + Add Service
// Service Name	Type	      Start Port	End Port	  Server IPv4	 
// Node Test	   TCP & UDP	80	         80	     192.168.0.10	[this server comp IP]

// Make sure server is on the same network as router

// Another port forwarding service // https://my.freenom.com/
// http://realityexpander.ml:80/index.html

// Check your current external IP & Open ports
// https://www.yougetsignal.com/tools/open-ports/

// Create a server
http.createServer(function (request, response) {
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;

   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");

   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);

         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, { 'Content-Type': 'text/html' });
      } else {
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, { 'Content-Type': 'text/html' });

         // Write the content of the file to response body
         response.write(data.toString());
      }

      // Send the response body 
      response.end();
   });
}).listen(80);

// Console will print the message
// console.log('Server running at http://127.0.0.1:80/index.html');
console.log('Server running at http://realityexpander.hopto.org:80/index.html');