import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'your'];
  let adj = ['great', 'happy','genius'];
  let noun = ['dog', 'cat','cow'];
  let extension = ['.com','.net','.org'];

  let listElements = document.querySelector('.domain');
  let listofItems = []

  for (let i = 0; i < pronoun.length; ++i) { // outer loop
    for (let j = 0; j < adj.length; ++j) { // inner loop
      for (let k = 0; k < noun.length; ++k) { // inner loop
        for (let l = 0; l < extension.length; ++l) { //inner loop

        let temp = document.createElement('li');
        temp.innerHTML = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
        listElements.appendChild(temp);
      }
    }
  }
 }
          
 };
