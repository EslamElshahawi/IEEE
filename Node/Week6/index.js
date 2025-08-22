/*
Explain using code the difference between using CommonJS modules and the new EcmaScript modules, 
and show how to switch between them.
*/

// CommonJS Module Example (Node.js default before ES modules)
// File: commonjsModule.js
const fs = require('fs');
const path = require('path');
module.exports = {
    readFile: (filePath) => {
        return fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
    }
};

//of course, you would typically have these in separate files, but for demonstration purposes, they are shown together here.

// Usage of CommonJS Module
const commonjsModule = require('./commonjsModule');
const dataCJS = commonjsModule.readFile('example.txt');
console.log('CommonJS Module Data:', dataCJS);
// To switch to EcmaScript Modules, you need to do the following:
// 1. Change the file extension from .js to .mjs or set "type": "module" in package.json
// 2. Use import/export syntax instead of require/module.exports
// 3. Ensure your environment supports ES modules (Node.js 12+ with --experimental-modules or Node.js 14+ natively)
// 4. Update your import paths accordingly

// EcmaScript Module Example
// File: esModule.mjs
import fs from 'fs';
import path from 'path';
export const readFile = (filePath) => {
    return fs.readFileSync(path.resolve(path.dirname(import.meta.url), filePath), 'utf-8');
}
// Usage of EcmaScript Module
import { readFile } from './esModule.mjs';
const dataESM = readFile('example.txt');
console.log('EcmaScript Module Data:', dataESM);
// CommonJS modules use `require` and `module.exports` for importing and exporting functionalities.
// EcmaScript modules use `import` and `export` keywords for the same purpose.