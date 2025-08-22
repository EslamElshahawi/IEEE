# Node JS Fundementals 


### According to your understanding; explain what's the difference between fs.readFile and fs.readFileSync methods.
***
    fs.readFile is an asynchronous method used to read files in Node.js. 
    It takes a callback function that is executed once the file reading operation is complete. 
    This allows other operations to continue while the file is being read, making it non-blocking.
    fs.readFileSync, on the other hand, is a synchronous method that reads files in a blocking manner. 
    When fs.readFileSync is called, it halts the execution of subsequent code until the file reading operation is finished.
***
### Explain with examples the difference between installing a package as a normal dependency vs. as a development dependency with npm.
***
    When using npm (Node Package Manager) to manage your project's dependencies, 
    you can install packages as either normal dependencies or development dependencies. 
    The key difference between the two lies in their intended use and when they are included in your project.
    1. Normal Dependencies:
       - These are packages that your application needs to run in production.
       - They are essential for the core functionality of your application.
       - When you install a package as a normal dependency, it is added to the "dependencies" section of your package.json file.
       
    2. Development Dependencies:
       - These are packages that are only needed during the development and testing phases of your application.
       - They are not required for the application to run in production.
       - When you install a package as a development dependency, it is added to the "devDependencies" section of your package.json file.
       
***
### What is the purpose of the node_modules folder, and why should it typically be excluded from version control systems like Git?
***
    The node_modules folder is where npm (Node Package Manager) stores all the dependencies and packages that a 
    Node.js project requires to run. 
    It contains the actual code for these packages, which can be quite large and numerous.
    Because the contents of node_modules can be easily recreated by running npm install based on the package.json
    and package-lock.json files, it is generally excluded from version control systems like Git to avoid bloating the 
    repository size and to prevent potential conflicts with different versions of packages.
***

### Break through this package.json file and explain its contents.
```json
{
    "name": "url-shortener-app",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "start": "node ./bin/www",
        "start:dev": "nodemon ./bin/www"
    },
    "dependencies": {
        "cookie-parser": "~1.4.4",
        "debug": "~2.6.9",
        "dotenv": "^16.4.4",
        "ejs": "^3.1.9",
        "express": "^4.18.2",
        "http-errors": "~1.6.3",
        "mongodb": "^6.3.0",
        "mongoose": "^8.1.3",
        "morgan": "~1.9.1",
        "shortid": "^2.2.16",
        "valid-url": "^1.0.9"
    },
    "devDependencies": {
        "nodemon": "^3.0.1"
    }
}
```
***
    This is a package.json file for a Node.js project named "url-shortener-app". Here's a breakdown of its contents:
    i. "name": "url-shortener-app" - This specifies the name of the project.
    ii. "version": "0.0.0" - This indicates the current version of the project.
    iii. "private": true - This field indicates that the project is private and should not be published to the npm registry.
    iv. "scripts": - This section defines custom scripts that can be run using npm.
        - "start": "node ./bin/www" - This script starts the application by running the server file located at ./bin/www.
        - "start:dev": "nodemon ./bin/www" - This script starts the application in development mode using nodemon, which automatically restarts the server when file changes are detected.
    v. "dependencies": - This section lists the packages that the project depends on to run.
    vi. "devDependencies": - This section lists the packages that are only needed for development purposes.
***

### 
***
    
***
