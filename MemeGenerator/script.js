const btn = document.querySelector('.gen-btn')
const img = document.querySelector("img")

const apiUrl = "https://meme-api.com/gimme"

btn.addEventListener('click', generateMemes)

function generateMemes(){
  fetch(apiUrl)
  .then(response =>{
    if(!response.ok){
      throw new Error("Can not access the data from api")
    }
    return response.json()
  })
  .then(data => {
    console.log('fetched data:', data.url);
    img.style.display = "block"
    img.setAttribute("src", `${data.url}`)
  })
  // .catch(error=>{
  //     console.error("Error:", error)
  // })
}