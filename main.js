// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.write("hi am ganesh");
//     res.end();

// });

// server.listen("2220",()=>{console.log("server running")})
// const {ganesh,a}=require("./set1")
// const {umesh,x}=require("./set2")
// console.log("hi ganesh")
// console.log(ganesh())
// console.log(a)
// console.log(umesh())
// console.log(x)
// const http=require("http")
// const server =http.createServer((req,res)=>{
//     if(req.method =="post"){
//         let body ="";
//         req.on("data",(x)=>{
//             body +=x.toString();
//             console.log.(body)
//         })
//     }
// })
// console.log("sdfghkjl")
// console.log("hhbjnkm")
// console.log("fgvhbjnm")

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.write("hello ganesh")
//     res.end("creating a server.....")
// })
// server.listen("3101",()=>{
//     console.log("server is running.......")
// })
// const http=require("http")
// const server=http.createServer((req,res) => {
//     res.write("thank you ")
//     res.end("sathish")
// }
// );
// server.listen("4004",()=>{
//     console.log("sever is running")
// })
// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.write("hello  ")
//     res.end("battu")
// })""
// server.listen("5001",()=>{
//     console.log("hello running")
// })
const http=require("http")
const server=http.createServer((req,res)=>{
    
   if(req.method == "POST"){
    res.write("ganesh")
    res.end(" D")
   }
    else {
        res.write("a")
        res.end("b")
    }
    
});
server.listen("2005",()=>{
    console.log("it is post server")
})

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     if (req.method === "POST"){
//         res.write("pawan kumar ")
//         res.end(" sh")
//     }
//     else{
//     res.write("ganesh")
//     res.end(" raj")}
// })
// server.listen("4004",()=>{
//     console.log("aakashu")
// })