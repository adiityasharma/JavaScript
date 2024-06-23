const rollBtn = document.querySelector(".roll-btn")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const winningMsg = document.querySelector(".winning-msg")

rollBtn.addEventListener('click', ()=>{
  const randNum = Math.floor(Math.random() *6 ) + 1
  const randNum2 = Math.floor(Math.random() * 6) +1
  // for player one
  if(randNum == "1"){
    img1.setAttribute("src", "images/1.png")
  }
  if(randNum == "2"){
    img1.setAttribute("src", "images/2.png")
  }
  if(randNum == "3"){
    img1.setAttribute("src", "images/3.png")
  }
  if(randNum == "4"){
    img1.setAttribute("src", "images/4.png")
  }
  if(randNum == "5"){
    img1.setAttribute("src", "images/5.png")
  }
  if(randNum == "6"){
    img1.setAttribute("src", "images/6.png")
  }
  // for player two
  if(randNum2 == "1"){
    img2.setAttribute("src", "images/1.png")
  }
  if(randNum2 == "2"){
    img2.setAttribute("src", "images/2.png")
  }
  if(randNum2 == "3"){
    img2.setAttribute("src", "images/3.png")
  }
  if(randNum2 == "4"){
    img2.setAttribute("src", "images/4.png")
  }
  if(randNum2 == "5"){
    img2.setAttribute("src", "images/5.png")
  }
  if(randNum2 == "6"){
    img2.setAttribute("src", "images/6.png")
  }

  // winning Statement
  if(randNum == randNum2)(
    winningMsg.innerText = "Draw!"
  )
  if(randNum > randNum2)(
    winningMsg.innerText = "Player 1 won the game!"
  )
  if(randNum < randNum2)(
    winningMsg.innerText = "Player 2 won the game!"
  )
  winningMsg.style.display = "block"
})