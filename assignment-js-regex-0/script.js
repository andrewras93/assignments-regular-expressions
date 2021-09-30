'use strict';

const url       = document.getElementById('url');
const urlForm   = document.getElementById('urlForm');
const urlList   = document.getElementById('urlList');
const urlError  = document.getElementById('urlError');

function printUrl(e) {

    e.preventDefault();

    urlError.innerHTML  = ``;
    urlList.innerHTML   = ``;

    const regex     = /\w+\.(com|dk)/g;
    const matches   = url.value.match(regex);

    if (matches) {

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Domain name: ${matches[0]}`));

        urlList.appendChild(li);

    } else {
        urlError.innerHTML = `${url.value} does not end in .com or .dk`;
    }

}

urlForm.addEventListener('submit', printUrl);