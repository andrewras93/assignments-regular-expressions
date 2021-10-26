'use strict'

import { text1 }        from "./8fdmf10.js";
import { text2 }        from "../assignment-js-regex-3/17192_8.js";
import { TextAnalysis } from "./TextAnalysis.js";

const body          = document.getElementById('body');
const ul            = document.createElement('ul');
const regex         = /\b[a-zæøå]+\b/gi;
const chosenText    = new TextAnalysis(text1);
const matches       = chosenText.string.match(regex);

chosenText.setWordList(matches);

const numberOfWords = document.createElement('li');
numberOfWords.appendChild(document.createTextNode(`The referred text contains ${matches.length} words.`));
ul.appendChild(numberOfWords);
body.appendChild(ul);

const textStripped  = chosenText.string.replace(/[,.!_\[\]\-\"\'\;\:\*\(\)\?\s\d\&\<]/g, ' ');
const words         = textStripped.toLowerCase().split(' ');
const wordTimesUsed = {};

chosenText.getTimesUsed(words, wordTimesUsed);

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

chosenText.getTimesUsed(characters, characterTimesUsed);

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