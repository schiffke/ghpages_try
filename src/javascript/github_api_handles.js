const fetch = require('node-fetch');
const fs = require('fs')
require('dotenv').config();

const user = 'schiffke';
const repo = 'ghpages_try';
const sha = 'd25c4bf24ddeda37caf53537fdedd48197e077a8';

const commitDate = [];

fetch(`https://api.github.com/repos/${user}/${repo}/commits`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Authorization': `${sha}` }
    })
        .then(res => res.json())
        .then(json => {
            commitDate.push(json[0].commit.author.date);           
        

        fs.readFile('./index.html', 'utf8', function (err,data) {
        if (err) throw err;

        let finalDate = JSON.stringify(commitDate).replace(/[TZ\]\[\"\""]/g, " ");
        let toReplace = `id="date-footer"> Last Commit: ${finalDate} </p`
        let result = data.replace(/id="date-footer">(.*)<\/p/, toReplace);

        fs.writeFile('./index.html', result, 'utf8', function (err) {
            if (err) throw err;
            console.log("html has been updated")
        });
        });
})
