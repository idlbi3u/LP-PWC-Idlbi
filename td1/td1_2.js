//2.1 let x ne permet d'utiliser la variable avant sa déclaration;
console.log('Exo 2.1 Utilisation des différent type de variable');
console.log(typeof x);


x ='blabla';
console.log(typeof x);

x ="blabla";
console.log(typeof x);

x =`blabla{$x}`;
console.log(typeof x);

x = 9;
console.log(typeof x);

x = 2.5;
console.log(typeof x);

x = true;
console.log(typeof x);

x = undefined;
console.log(typeof x);

x = null;
console.log(typeof x);

x = [1,2,3];
console.log(typeof x);

x = new Array();
console.log(typeof x);

x = {};
console.log(typeof x);

x = {"Promo":"lpwmce","nb":25};
console.log(typeof x);

x = new Date();
console.log(typeof x);

x = function() {
    alert('toto');
}
console.log(typeof x);

x = 42n;
console.log(typeof x);

var x; // 2.2 Une variable VAR peut être utilisé n'importe où dans le code!


function TypeVariable(x) {
    return typeof x
}
console.log('Fonction type donne : ',TypeVariable(x));

// 2.3 Conversion String, entier et float
console.log('Exo 2.3 Conversion String, entier et float');

function Convertir_EntierToString(variable){
    console.log('Type initiale : ', typeof variable);
    variable = toString(variable);
    return typeof variable;
}
console.log('Type après conversion Entier->String :',Convertir_EntierToString(12));

function Convertir_StringToFloat(variable){
    console.log('Type initiale : ', typeof variable,' ',variable);
    variable = parseFloat(variable);
    return variable;
}
console.log('Après conversion String->Float :',Convertir_StringToFloat("12.32"));

function Convertir_StringToEntier(variable){
    console.log('Type initiale : ', typeof variable,' ',variable);
    variable = parseInt(variable);
    return variable;
}
console.log('Après conversion String->Entier :',Convertir_StringToEntier("12.32"));


//2.4 Tests d'égalité(==) et d'égalité stricte(===)
console.log('Exo 2.4 Tests d\'égalité(==) et d\'égalité stricte(===)');

let b=false;
let n=0;
let s='0';
let tab = [];
let o = {};
let c = false;

function ComparerVariable(Var1, Var2){
    let resultat;
    if(Var1 == Var2){
        resultat = "Premier test ok!"
    }

    if(Var1 === Var2){
        resultat += "  Deuxieme Test ok !"
    }
    return resultat;
}

console.log('Comparer b=false et n=0 : ',ComparerVariable(b,n));
console.log('Comparer b=false et s=\'0\' : ',ComparerVariable(b,s));
console.log('Comparer b=false et tab=[] : ',ComparerVariable(b,tab));
console.log('Comparer b=false et o={} : ',ComparerVariable(b,o));
console.log('Comparer b=false et c=false : ',ComparerVariable(b,c));


