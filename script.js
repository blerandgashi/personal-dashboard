const bodyImg = document.querySelector("body");
const userName = document.querySelector("#author");

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    console.log(data.urls.raw);
    bodyImg.style.backgroundImage = `url('${data.urls.raw}')`
    userName.textContent = `By: ${data.user.name}`
  })
  .catch(error => {    
    const myImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
    bodyImg.style.backgroundImage = `url(${myImg})`
  })


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then(response => {
    if (!response.ok) {
      throw Error("Something went wrong!")
    }
    return response.json()
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("The datas are not available, please come again soon!");
  })


//.catch is used when the promise is rejected in .then blocks
//.catch uses a photo I choosed after the promise is rejected ONLY if it was rejected
//crypto: https://www.coingecko.com/api/documentations/v3#/