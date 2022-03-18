let number = document.querySelector("input").value

document.querySelector("button").addEventListener("click", fetchPoke)

function fetchPoke(){
fetch(`https://api.jikan.moe/v4/anime/${number}`)

  .then(res => res.json())
  .then(data => {
        console.log(data)

  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}