'use strict'

const a             = document.getElementById('a');
const button        = document.getElementById('button');
const anchorList    = document.getElementById('anchorList');

function printAnchorText() {

    const regex     = /(?<=<a\s*href=[\'"](.+?)[\'"].*?>).+(?=<\/a>)/g;
    const matches   = a.outerHTML.match(regex);

    if (matches) {

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${matches[0]}`));

        anchorList.appendChild(li);

    } else {
        console.log(`Something went wrong.`);
        console.log(matches);
    }

}

button.addEventListener('click', printAnchorText);