const inputValue = document.querySelector(".input-Val")
const submitBtn = document.querySelector(".submit-btn")
const inputCity = document.querySelector(".city")
const temparature = document.querySelector(".temparature")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const haze = document.querySelector(".haze")


let apiKey = "6be4c3452c94f96ba7c1787db4c5d75d"
let apiKey2 = "b7bca44ebb33cc21f4756906629575a0"
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


function getData(city){
  let weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
    if(!response.ok){
      throw new Error("Network response was not ok")
    }
    return response.json()
  })
  .then(data =>{
    // console.log("fetched data", data)

    temparature.innerText = data.main["temp"]
    humidity.innerText = data.main["humidity"]
    wind.innerText = data.wind["speed"]
    haze.innerText = data.weather[0].main

  })
  .catch(error =>{
    console.error("error fetching data:", error)
  })

  
}

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  let city = inputValue.value

  inputCity.innerText = city
  getData(city)

})





