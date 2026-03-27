import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';

export async function serverStatic(req, res, baseDir) {
    const filepath = path.join(baseDir, 'public', 'index.html'); // serve index.html
    try {
        const content = await fs.readFile(filepath, 'utf-8');
        sendResponse(res, 200, content);
    } catch (err) {
        console.log(err);
        sendResponse(res, 500, "Server Error");
    }
}