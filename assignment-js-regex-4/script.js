'use strict'

const body      = document.getElementById('body');
const ul        = document.createElement('ul');
const regex     = /\b[a-zæøå]+\b/gi;
const matches   = text1.match(regex);

const numberOfWords = document.createElement('li');
numberOfWords.appendChild(document.createTextNode(`The referred Danish text from the late 19th century, contains ${matches.length} words.`));
ul.appendChild(numberOfWords);

body.appendChild(ul);

const textStripped  = text1.replace(/[,.!_\[\]\-\"\'\;\:\*\(\)\?\s\d\&\<]/g, ' ');
const words         = textStripped.toLowerCase().split(' ');
const wordTimesUsed = {};

words.forEach(element => {
    wordTimesUsed[element] = (wordTimesUsed[element] || 0) + 1;
});

const wordsOrdered = Object.keys(wordTimesUsed).sort().reduce(
    (obj, key) => {
      obj[key] = wordTimesUsed[key];
      return obj;
    },
    {}
);

for (let key in wordsOrdered) {

    if (wordsOrdered[key] === wordsOrdered['']) {
        // Don't count
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`"${key}" is used ${wordsOrdered[key]} time(s).`));

        ul.appendChild(li);
    }

}

const characters            = textStripped.toLocaleLowerCase().split('');
const characterTimesUsed    = {};

characters.forEach(element => {
    characterTimesUsed[element] = (characterTimesUsed[element] || 0) + 1;
});

const ordered = Object.keys(characterTimesUsed).sort().reduce(
    (obj, key) => {
      obj[key] = characterTimesUsed[key];
      return obj;
    },
    {}
);

for (let key in ordered) {

    if (ordered[key] === ordered[' ']) {
        // Don't count
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Character "${key}" is used ${ordered[key]} time(s).`));

        ul.appendChild(li);
    }

}

// Sources
// https://stackoverflow.com/questions/62088924/check-the-repeated-words-in-a-string-and-keep-a-count-in-javascript
// https://stackoverflow.com/questions/54851645/how-to-display-both-key-and-value-in-object-using-javascript/54851680
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key/31102605