'use strict'

const main      = document.getElementById('main');
const string    = `Can Regular Expression find the words, Ræv, Rød and Ønsker.`;
const button    = document.getElementById('button');
const wordList  = document.getElementById('wordList');

const p = document.createElement('p');
p.appendChild(document.createTextNode(string));

main.appendChild(p);

function checkExpression() {

    wordList.innerHTML = ``;

    const regex = /\w*[æøå]\w*/gi;
    const matches = string.match(regex);

    if (matches) {

        matches.forEach(element => {

            const li = document.createElement('li');
            li.appendChild(document.createTextNode(element));

            wordList.appendChild(li);

        });

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Are æ, ø and å, part of the Regular Expression concept of characters? ${regex.test(string)}`));

        wordList.appendChild(li);

    } else {
        console.log(`Something went wrong.`);
        console.log(matches);
    }

}

button.addEventListener('click', checkExpression);