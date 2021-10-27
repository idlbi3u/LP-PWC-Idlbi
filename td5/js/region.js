const URLreg = 'https://geo.api.gouv.fr/regions';
const URLcom = 'https://geo.api.gouv.fr/departements';
const URLcominfo = 'https://geo.api.gouv.fr/communes';

let RegionsSelect = document.getElementById('reg');
let DepSelect = document.getElementById('dep');
let ComSelect = document.getElementById('com');
let DivPopulation = document.getElementById('population');
let table = document.getElementById('info');
let codeDep;
let codeCom;
let codeVille;
let code;


function getRegions(){
    fetch(URLreg)
            .then(function (reponse){
                return reponse.json();
            }).then(function (data){
                console.log('REGIONS : ',data);
                data.forEach(region => {
                    let option = document.createElement('option');
                    option.setAttribute('value', region.code);
                    option.innerText = region.nom;
                    RegionsSelect.appendChild(option);
                });
                getDepartements(RegionsSelect.options[0].code);
            }).catch(function (error){
                alert('Error : '+error);
            });
}

function getDepartements(codeReg){
    if(codeReg === undefined){
        codeReg = RegionsSelect.value;
    }
    DepSelect.innerHTML = '';
    fetch(URLreg+'/'+codeReg+'/departements')
            .then(function (reponse){
                return reponse.json();
            }).then(function (data){
                console.log('DEPARTEMENTS : ',data);
                data.forEach(dep => {
                    let Newdep = document.createElement('option');
                    Newdep.setAttribute('value', dep.code);
                    Newdep.innerText = dep.nom;
                    DepSelect.appendChild(Newdep);
                });
                getCommunes(DepSelect.options[0].code);
            }).catch(function (error){
                alert(error);
            });
}

function getCommunes(codeDep){
    if(codeDep === undefined){
        codeDep = DepSelect.value;
    }
    let population = 0;

    ComSelect.innerHTML = '';
    fetch(URLcom+'/'+codeDep+'/communes')
            .then(function (reponse){
                return reponse.json();
            }).then(function (data){
                console.log('COMMUNES : ',data);
                table.innerHTML = '';
                let titre = `<tr>
                            <th>Nom</th>
                            <th>Codes Postaux</th>
                            <th>Population</th>
                            </tr>`;
                table.innerHTML += titre;            
                // dataFiltered = data.filter(commune => data.codesPostaux)

                data.forEach(com => {
                    //options
                    let NewCom = document.createElement('option');
                    NewCom.innerText = com.nom;
                    NewCom.setAttribute('value', com.code);
                    ComSelect.appendChild(NewCom);


                    //tables
                    const ligne = table.insertRow();
                    ligne.setAttribute('id', com.code);
                    ligne.addEventListener('click', ()=> onclick(com.nom));
                    let template = `<td>${com.nom}</td>
                                    <td>${com.codesPostaux}</td>
                                    <td>${com.population}</td>`;

                    ligne.innerHTML += template;

                    population = population + parseInt(com.code);
                    
                    
                });
            
                const footer = table.insertRow();
                footer.innerHTML  += `<tfoot>Population totale : ${population}</tfoot>`
                getCommunesInfo(ComSelect.options[0].code);
            }).catch(function (error){
                alert(error);
            });
}

function getCommunesInfo(code){
    if(code === undefined){
        code = ComSelect.value;
    }
    DivPopulation.innerHTML= '';
    fetch(URLcominfo+'/'+code)
            .then(function (reponse){
                return reponse.json();
            }).then(function (data){
                console.log('Info Commune : ', data);
                let NewPopulation = document.createElement('p');
                NewPopulation.innerHTML = 'Population : '+ data.population;
                DivPopulation.appendChild(NewPopulation);
                return data.population;

            }).catch(function (error){
                alert(error);
            });
}

function getPopulation(codeVille){
    fetch(URLcominfo+'/'+codeVille)
            .then(function (reponse){
                return reponse.json();
            }).then(function (data){

                return data.population;
            }).catch(function (error){
                alert(error);
            });
}

function onclick(id){
    console.log('code : ', id);
    if(id !== null ?? ''){
        localStorage.setItem('code', id);
        window.open('../vue/meteo.html');
    }
    
}

function onLoad(){
    getRegions();
}

function onChangeReg(){
    getDepartements(codeDep);
}

function onChangeDep(){
    getCommunes(codeCom);
}

function onChangeCom(){
    getCommunesInfo(code);
}


