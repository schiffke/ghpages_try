const fetch = require('node-fetch');
const fs = require('fs')
require('dotenv').config();

const user = 'schiffke';
const repo = 'ghpages_try';
const sha = 'd25c4bf24ddeda37caf53537fdedd48197e077a8';

const commitDate = [];

function createDateJson() {
    fetch(`https://api.github.com/repos/${user}/${repo}/commits`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${sha}` }
        })
            .then(res => res.json())
            .then(json => {
                commitDate.push(json[0].commit.author.date);           
            
                fs.writeFile('./src/javascript/date.json', JSON.stringify(commitDate), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!')});
    })
}

createDateJson()