// let citiesData = {
//     tehran : {city: "Tehran" , temp : 12 , weather : 'sunny' ,humidity : 25 ,windSeed:45 },
//     mashhad : {city: "Mashhad" , temp : 22 , weather : 'windy' ,humidity : 5 ,windSeed:25 },
//     shiraz : {city: "Shiraz" , temp : 38 , weather : 'clody' ,humidity : 17 ,windSeed:42 },
//     tabriz : {city: "Tabriz" , temp : 42 , weather : 'rainy' ,humidity : 31 ,windSeed:17 },
//     Esfahan : {city: "Esfahan " , temp : 5 , weather : 'snowy' ,humidity : 7 ,windSeed:13 },
//     qazvin : {city: "Qazvin" , temp : 45 , weather : 'sunny' ,humidity : 15 ,windSeed:23 },
// }
// let $ = document

// let searchBtn = $.querySelector(".search-btn")
// let searchBar = $.querySelector(".search-bar")


// searchBtn.addEventListener('click' , function(){
//     let searchBarValue = searchBar.value
//     let mainCitiesData = citiesData[searchBarValue]
//     if (mainCitiesData){
//         $.querySelector('.city-name').innerHTML = "Weather in" + mainCitiesData.city 
//         $.querySelector('.city-temp').innerHTML =  mainCitiesData.temp + "C" 
//         $.querySelector('.city-weather').innerHTML = mainCitiesData.weather
//         $.querySelector('.city-humidity').innerHTML = "humidity : " + mainCitiesData.humidity
//         $.querySelector('.city-windSeed').innerHTML =  "windSeed : " + mainCitiesData.windSeed + "Km / h "
//         $.querySelector('.new').classList.remove('lodding')

//     }else{
//         alert("enter the value city !!!")
//     }
// })

let $ = document
const inputElem = $.querySelector('input')

let data = {
    URL : 'https://api.openweathermap.org/data/2.5/weather?q=',
    key : '26c4d8ad14b57209671494df9bd9fcb9'
}


function fetchData (){
    let countryValu = inputElem.value
    fetch(`${data.URL}${countryValu}&appid=${data.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);

            showData(data)
        })
}

function showData(data){
    let cityElem = $.querySelector('.city-name')
    cityElem.innerHTML = ` ${data.name} ,  ${data.sys.country}`
    let tempElem = $.querySelector('.city-temp')
    tempElem.innerHTML = `temp : ${Math.floor(data.main.temp - 273.15) } °C`
    let weatherElem = $.querySelector('.city-weather')
    weatherElem.innerHTML = `weather : ${data.weather[0].main}`
    let humidityElem = $.querySelector('.city-humidity')
    humidityElem.innerHTML = `humidity : ${data.main.humidity}`
    let winsspeedElem = $.querySelector('.city-windSeed')
    winsspeedElem.innerHTML = `windSeed : ${data.wind.speed} KM/h`
}


inputElem.addEventListener('keypress' , (event) => {
    if(event.keyCode === 13 ){
        fetchData()
    }
})