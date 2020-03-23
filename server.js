var http = require('http');
var url = require('url');

 module.exports.startServer = function starserver(handle,route){
  function onRequest(req, res){
    var reviewdata="";
    req.setEncoding('utf8');

    var pathname=url.parse(req.url).pathname;
    req.addListener("data",function(chunk){

      reviewdata+=chunk;
    });
    req.addListener('end',function(){

      console.log(reviewdata);
      route(handle,pathname,res,reviewdata);

    });
    console.log("Request  recieved for" + pathname);

  }
  http.createServer(onRequest).listen(3000);
  console.log("server started on localhost port  3000");
}
