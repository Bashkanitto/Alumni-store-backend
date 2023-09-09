const express = require('express');
const mongoose = require("mongoose")
const morgan = require('morgan');


const app = express();
app.use(express.json());



const PORT = 8000

const startServer = ()=>{
  app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
  });
}


app.use(express.urlencoded({ extended: false }));




app.get('/', (req, res) => {
  res.write(`<h1>Hello World</h1>`);
});


startServer()
// PS C:\Users\Asus\Downloads\Alumni-store-backend> npm init 
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (alumni-store-backend)
// version: (1.0.0)
// description:
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author:
// license: (ISC)
// About to write to C:\Users\Asus\Downloads\Alumni-store-backend\package.json:

// {
//   "name": "alumni-store-backend",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC"


// Is this OK? (yes)
// PS C:\Users\Asus\Downloads\Alumni-store-backend> npm i express mongoose nodemon

// added 115 packages, and audited 116 packages in 14s

// 12 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\Asus\Downloads\Alumni-store-backend> npm run dev

// > alumni-store-backend@1.0.0 dev
// > nodemon index.js

// [nodemon] 3.0.1
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node index.js`
// C:\Users\Asus\Downloads\Alumni-store-backend\index.js:1
// const


// SyntaxError: Unexpected end of input
//     at wrapSafe (node:internal/modules/cjs/loader:1177:20)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at node:internal/main/run_main_module:23:47
// Node.js v20.3.1
// [nodemon] app crashed - waiting for file changes before starting...
// PS C:\Users\Asus\Downloads\Alumni-store-backend> node -v
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git branch init-project
//   init-project
// Switched to branch 'init-project'
// Switched to branch 'main'
// Your branch is up to date with 'origin/main'.
// git: 'branch-init-project' is not a git command. See 'git --help'.
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git branch -d init-project
// Deleted branch init-project (was 15901c7).
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git checkout -b init-project
// Switched to a new branch 'init-project'
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git add .
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git branch -d init-project
// error: Cannot delete branch 'init-project' checked out at 'C:/Users/Asus/Downloads/Alumni-store-backend'      
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git checkout main 
// Your branch is up to date with 'origin/main'.
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git pull upstream 
// remote: Enumerating objects: 1, done.
// remote: Counting objects: 100% (1/1), done.
// remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
// Unpacking objects: 100% (1/1), 636 bytes | 318.00 KiB/s, done.
// From https://github.com/Bashkanitto/Alumni-store-backend
//    15901c7..683aace  main       -> upstream/main
// You asked to pull from the remote 'upstream', but did not specify
// a branch. Because this is not the default configured remote
// for your current branch, you must specify a branch on the command line.
// PS C:\Users\Asus\Downloads\Alumni-store-backend> git pull upstream main
// From https://github.com/Bashkanitto/Alumni-store-backend
//  * branch            main       -> FETCH_HEAD
// Updating 138ddb4..683aace
// Fast-forward
//  index.js | 2 +-
//  1 file changed, 1 insertion(+), 1 deletion(-)
// PS C:\Users\Asus\Downloads\Alumni-store-backend>
