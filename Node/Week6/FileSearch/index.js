#!/usr/bin/env node
/*
Create a CLI file search application using Node.js. 
The application takes the file name and a query string as parameters, and prints the line which contains this string. 
If the string can't be found, the application should print "THAT'S NOT FUNNY".
*/

// Importing required modules
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to search for a query string in a file
function searchInFile(fileName, query) {
    try{
        const filePath = path.resolve(__dirname, fileName);
        if (!fs.existsSync(filePath)) {
            console.log(`Error: File ${fileName} does not exist.`);
            return false;
        }
        let found = false;
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n');
        const matchedLines = lines.filter(line => line.includes(query));
        if (matchedLines.length > 0) {
            found = true;
            matchedLines.forEach((line, index) => {
                console.log(`Line ${index + 1}: ${line}`);
                
            });
            return found;
        } 
        return found;
    } catch (error) {
        console.log('Error reading file:', error.message);
    }

}

// Performing the search based on user input
function performSearch() {
    console.log('File Search CLI Tool');
    console.log('='.repeat(30));
    rl.question('Enter the filename to search in: ', (filename) => {
    if (!filename.trim()) {
        console.log('Please enter a valid filename.');
        rl.close();
        return;
    }
    
    const cleanFilename = filename.trim();
    
    rl.question('Enter the search query: ', (query) => {
        if (!query.trim()) {
            console.log('Please enter a valid search query.');
            rl.close();
            return;
        }
        
        const cleanQuery = query.trim();
        console.log(`\nSearching for '${cleanQuery}' in '${cleanFilename}'...\n`);
        
      // Perform the search
        const found = searchInFile(cleanFilename, cleanQuery);
        
      // Print the result message if nothing was found
        if (!found) {
            console.log('THAT\'S NOT FUNNY');
        }
        
        console.log('\n' + '='.repeat(30));
        rl.close();
        });
    });
}

rl.on('close', () => {
    console.log('\nExiting application.');
    process.exit(0);
});

// Handle command line arguments
if (process.argv.length >= 4) {
    // If arguments are provided via command line
    const filename = process.argv[2];
    const query = process.argv[3];
    console.log(`🔍 Searching for '${query}' in '${filename}'...\n`);
    const found = searchInFile(filename, query);
    if (!found) {
    console.log('THAT\'S NOT FUNNY');
    }
    process.exit(0);
} else {
  // If no arguments, start interactive mode
    performSearch();
}