import http  from "node:http";

const server=http.createServer((req,res)=>{
    if (req.url === "/a/login" && req.method === "GET") {
        res.end("Hello word");
    }    
});

server.listen(3000);
console.log("server berjalan di http://localhost:3000");