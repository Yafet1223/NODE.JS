// import http from "http";

// const PORT = 3000;

// // In-memory "database"
// let yafet = [
//     {quote: "The only way to do great work is to love what you do.", author: "Yafet Getachew"},
//     {quote: "Success is not the key to happiness. Happiness is the key to success", author: "Yafet Getachew"},
//     {quote: "Don't watch the clock; do what it does", author: "Nathan Getachew"}
// ];

// const server = http.createServer((req, res) => {
//     const reqUrl = new URL(req.url, `http://${req.headers.host}`);
//     const method = req.method;

//     // GET /yafet → return all quotes
//     if(method === "GET" && reqUrl.pathname === "/yafet") {
//         // Optional: filter by author query parameter
//         const author = reqUrl.searchParams.get('author')?.toLowerCase();
//         let results = yafet;

//         if(author) {
//             results = yafet.filter(q => (q.author || "unknown").toLowerCase() === author);
//         }

//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(results));
//         return;
//     }

//     // Route not found
//     res.writeHead(404, {"Content-Type": "application/json"});
//     res.end(JSON.stringify({ message: "Route not found" }));
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
// import http from "http";
// import {parse} from "url";
// const PORT=3000;
// let yafet=[
//     {
//   "id": 1,
//   "title": "My first post",
//   "content": "This is my blog...",
//   "author": "Yafet",
//   "createdAt": "2026-03-20"
// }
// ]
// function getRequestBody(req) {
//     return new Promise((resolve, reject) => {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             try {
//                 resolve(JSON.parse(body || '{}'));
//             } catch (err) {
//                 reject(err);
//             }
//         });
//     });
// }
// //Create the Server
// 
import http from "http";
import path from "node:path";
const PORT=8000;
const __dirname=import.meta.dirname;
const server=http.createServer(async(req,res)=>{
        await serverStatic(req,res, __dirname)
}
{
    
})
server.listen(PORT,()=>console.log(`connected on port:${PORT}`))