var express= require('express');
var fs= require('fs');
var querystring=require('querystring');
module.exports.home = function(res){
  console.log("executing home handler");
  fs.readFile(__dirname + '/review.html', 'utf8', function(err, text){
                res.writeHead(200,{'Content-Type' : "text/html"});
                res.write(text.toString());
                res.end();
                }
              )
};

module.exports.review= function(res,reviewdata){
  console.log("executing review handler");
  var htmldata="";
  htmldata=fs.readFileSync(__dirname + '/review2.html');
  res.writeHead(200,{'Content-Type' : "text/html"});
  reviewdata=querystring.parse(reviewdata).text;
  htmldata=htmldata.toString().replace("some data here" , reviewdata);
  res.write(htmldata);
  res.end();
}
