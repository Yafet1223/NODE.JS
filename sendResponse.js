// import http from 'node:http';
// import { serverStatic } from './serverStatic';
// const PORT=8000;
// const __dirname=import.meta.dirname;
// const server=http.createServer((async (req,res)=>{
//     await serverStatic(req,res, __dirname)
       
// })
// server.listen(PORT, ()=>console.log(`connected on port: ${PORT}`))
export function sendResponse(res, statusCode, content) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
}