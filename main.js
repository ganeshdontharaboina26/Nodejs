const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("hi am ganesh")
    res.end

});
server.listen("2220",()=>{console.log("server running")})