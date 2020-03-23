function route(handle,pathname,res,reviewdata)
{
  console.log("routing a request for" + pathname);
  if(typeof handle[pathname] === 'function')
  {
    handle[pathname](res,reviewdata);
  }
  else {
    console.log("no handler for"+ pathname);
    res.writeHead(404, {'Content-Type':"text/plain"});
    res.end();
  }

}
module.exports.router = route;
