/*
Implement a cloud calculator using the HTTP module.

The request url form will be: /[operation]?a=[num1]&b=[num2]

The calculator must support the following operations:

add: send 
a
+
b
subtract: send 
a
−
b
multiply: send 
a
∗
b
divide: send 
a
/
b
Example
GET http://localhost:3000/add?a=3&b=6
Response
9
*/

// Importing required modules
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const PORT = 3000;

// Function to perform calculations
function calculate(operation, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) {
        return 'Error: Both a and b must be valid numbers.';
    }
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                return 'Error: Division by zero is not allowed.';
            }
            return a / b;
        default:
            return 'Error: Unsupported operation. Supported operations are add, subtract, multiply, divide.';
    }
}

// Creating HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const operation = parsedUrl.pathname.slice(1); // Remove leading '/'
    const queryParams = querystring.parse(parsedUrl.query);
    const { a, b } = queryParams;

    const result = calculate(operation, a, b);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result.toString());
});

// Starting the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});