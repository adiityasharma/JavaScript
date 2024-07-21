const month = document.querySelector(".month")
const day = document.querySelector(".day")
const date = document.querySelector(".dat")
const year = document.querySelector(".year")
const currentTime = document.querySelector(".currentTime")




let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]





setInterval(function updateDate(){
  const today = new Date()

  date.textContent = today.getDate()
  day.textContent = weekDay[today.getDay()]
  year.textContent = today.getFullYear()
  month.textContent = monthName[today.getMonth()]
  currentTime.textContent = `
  Current Time: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}
  `
},1000)