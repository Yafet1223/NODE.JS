// console.log("we have a package.json file");


// import http from "node:http";

// const PORT = 8000;

// const server = http.createServer((req, res) => {
//   res.end("Hello Worldm",);
//   res.write("this is From the server\n")
// });

// server.listen(PORT, () => 
//   console.log(`server running on port: ${PORT}`)
// );


// import http from "http";

// const PORT = 3000;

// let yafet = [
//     {quote: "The only way to do great work is to love what you do.", author: "Yafet Getachew"},
//     {quote: "Success is not the key to happiness. Happiness is the key to success", author: "Yafet Getachew"},
//     {quote: "Don't watch the clock; do what it does", author: "Unknown"}
// ];

// const server = http.createServer((req, res) => {
//     const reqUrl = new URL(req.url, `http://${req.headers.host}`);
//     const method = req.method;

//     // ✅ Add CORS (IMPORTANT)
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if(method === "GET" && reqUrl.pathname === "/yafet") {
//         const author = reqUrl.searchParams.get('author')?.toLowerCase();
//         let results = yafet;

//         if(author) {
//             results = yafet.filter(q => (q.author || "unknown").toLowerCase() === author);
//         }

//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(results));
//         return;
//     }

//     res.writeHead(404, {"Content-Type": "application/json"});
//     res.end(JSON.stringify({ message: "Route not found" }));
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
// 
import http from "http";
import path from "node:path";
import { serverStatic } from "./serverStatic.js";

const PORT = 8000;

// Fix __dirname for ESM
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    await serverStatic(req, res, __dirname);
});

server.listen(PORT, () => console.log(`connected on port: ${PORT}`));
