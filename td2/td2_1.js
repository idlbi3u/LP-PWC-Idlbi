//1.1
let body = document.querySelector("body");

let h2 = document.querySelector("h2");

let new_p = document.createElement('p');
new_p.innerHTML = '<p>Il est interdit de vous doubler, sous peine de disqualification</p>';
let new_h2 = document.createElement('h2');
new_h2.innerHTML = '<h2>Article 0 </h2>';

console.log(body.firstChild);

body.insertBefore(new_p, body.firstChild);
body.insertBefore(new_h2, body.firstChild);


//1.2.a

let titres = document.getElementsByTagName('h2');

for (let index = 0; index < titres.length; index++) {
    titres[index].innerText = titres[index].innerText.toUpperCase();
}

//1.2.b

for (let index = 0; index < titres.length; index++) {
    titres[index].setAttribute(style,'text-transform: capitalize');
}