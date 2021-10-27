let input = localStorage.getItem('code');
let APIurl = 'http://api.openweathermap.org/data/2.5/weather?q='+input+'&lang=fr&appid=9199c585719c3776366405a178106d86';

document.getElementById('commune').innerHTML = input.toUpperCase();

let temperature = document.getElementById('temperature');
let ressenti = document.getElementById('ressenti');
let temps = document.getElementById('temps');
let mini = document.getElementById('mini');
let maxi = document.getElementById('maxi');
let humidite = document.getElementById('humidite');

function getWeather(e){
    let weather = e.split(" ");

    for (var i = 0; i < weather.length; i++) {
        weather[i] = weather[i].charAt(0).toUpperCase() + weather[i].slice(1);
    }
    e = weather.join(" ");

    return e;
}


function getWeatherInfo(){
    
    fetch(APIurl)
            .then(function (reponse){
                return reponse.json();
            }).then(function (data){
                console.log('Data : ',data);
                let Temperatures = data.main;
                console.log(Temperatures);
                let Weather = data.weather[0];
                console.log(Weather);
                
                temperature.innerHTML = 'Température ' +convertKtoC(Temperatures['temp'])+'°c';
                ressenti.innerHTML ='Ressenti '+convertKtoC(Temperatures['feels_like'])+'°c';
                humidite.innerHTML = 'Humidité '+Temperatures['humidity'] +'%';
                mini.innerHTML = 'Température Minimale '+convertKtoC(Temperatures['temp_min'])+'°c';
                maxi.innerHTML = 'Température Maximale '+convertKtoC(Temperatures['temp_max'])+'°c';
                temps.innerHTML = getWeather(Weather['description']);


                
            }).catch(function (error){
                alert('Error : '+error);
            });

}

function convertKtoC(K){
    let C = K -273.15;
    
    return parseInt(C);
}

getWeatherInfo();