import path from 'node:path';
import fs from 'node:fs/promises';
import {sendResponse}from './sendResponse.js';
export async function serverStatic(req,res,baseDir){
    const filepath=path.join(baseDir, 'public','index.html')
    try{
        const content=await fs.readFile(filepath)
        sendResponse(res,200,)
    }
    catch(err){
        console.log(err)
    }
}