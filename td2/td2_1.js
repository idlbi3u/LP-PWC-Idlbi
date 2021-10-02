//1.1
let body = document.querySelector("body");
console.log(body)

let articles = document.querySelectorAll("p");
console.log(articles);

let new_p = document.createElement('p');
new_p.innerText = 'Il est interdit de vous doubler, sous peine de disqualification';
let new_h2 = document.createElement('h2');
new_h2.innerText = 'Article 0 - Interdiction';


body.insertBefore(new_p, body.firstChild);
body.insertBefore(new_h2, body.firstChild);



//1.2.a

let titres = document.getElementsByTagName('h2');

for (let index = 0; index < titres.length; index++) {
    titres[index].innerText = titres[index].innerText.toUpperCase();
}

//1.2.b

for (let index = 0; index < titres.length; index++) {
    titres[index].setAttribute('style','text-transform: uppercase');
}

//1.3

let h2 = document.querySelectorAll("h2");
console.log(h2);

for (let i = 0; i < h2.length; i++) {
    titre_para = h2[i].innerText.split(" ");

    titre_para[1] = i+1;
    
    titre_modifie = titre_para.join(" ");

    h2[i].innerText = titre_modifie;
}


//1.4
let AllBodyElements = document.getElementsByTagName('body');
    let elements = [];
    for (let i = 0; i < AllBodyElements[0].children.length; i++) {
        elements[i] = AllBodyElements[0].children[i].tagName;
   }

   console.log("les balises dans le body: ",elements);

    let compteur = 0;
    for (let i=0; i<elements.length; i++) {

        

        if (elements[i] === 'H2') {
            compteur++;
        }
        if (compteur % 2 === 0) {
            AllBodyElements[0].children[i].style.backgroundColor = 'lightblue';
        }
    }

//1.5

