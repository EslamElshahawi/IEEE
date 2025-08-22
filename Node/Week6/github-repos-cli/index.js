#!/usr/bin/env node

/*
Create a Node.js CLI application that uses GitHub API to get the repositories of a single user.

The application should take the username from the user input in the console, 
then call GitHub API to get the repositories of this user. Then store the repository names in a file <username>.txt.

GitHub API Endpoint:
https://api.github.com/users/<username>/repos

*/



// Importing required modules
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const readline = require('readline');
const { Console } = require('console');

// Function to get repositories of a user from GitHub API
async function getUserRepos(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        if(response.status !== 200) {
            throw new Error('Failed to fetch repositories');
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error(`User ${username} not found`);
        } else if (error.response && error.response.status === 403) {
            throw new Error('API rate limit exceeded. Please try again later.');
        } else {
            throw new Error('Error fetching repositories:', error.message);
        }
    }
}

// Function to save repository names to a file
function saveReposToFile(username, repos) {
    const repoNames = repos.map(repo => repo.name).join('\n');
    if(repoNames.length === 0) {
        console.log(`No repositories found for user ${username}`);
        return;
    }
    const filePath = path.resolve(__dirname, `${username}.txt`);
    fs.writeFileSync(filePath, repoNames, 'utf-8');
    console.log(`Repository names saved to ${filePath}`);
}


// display repository names

function displayRepoNames(username, repos) {
    console.log(`Repositories of user ${username}:`);
    repos.forEach(repo => {
        console.log(repo.name);
    });
}


async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter GitHub username: ', async (username) => {
        try {
            const repos = await getUserRepos(username);
            if (repos.length === 0) {
                console.log(`No repositories found for user ${username}`);
            } else {
                displayRepoNames(username, repos);
                saveReposToFile(username, repos);
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });

    rl.on('close', () => {
        console.log('\nExiting application.');
        process.exit(0);
    });
}

main();