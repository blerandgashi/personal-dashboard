const bodyImg = document.querySelector("body");
const userName = document.querySelector("#author");

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
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

    const valueImg = data.image.small;
    document.querySelector("#cryptoImg").src = valueImg
    document.querySelector("#crypto").textContent = data.name

    document.querySelector("#price").textContent = `🎯: ${data.market_data.current_price.usd}`
    document.querySelector("#all-time-high").textContent = `👆: ${data.market_data.high_24h.usd}`
    document.querySelector("#all-time-low").textContent = `👇: ${data.market_data.low_24h.usd}`
  })
  .catch(err => {
    console.log("The datas are not available, please come again soon!");
  })

function getCurrentTime(){
  const getHourData = new Date();
  const currentTime = getHourData.toLocaleTimeString("en-us", {timeStyle: "short"});
  document.querySelector(".time").textContent = currentTime
}
setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(async position => {
    console.log(position);

    try{
      const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
      if (!res.ok) {
        throw Error("No datas found")
      }
      const data = await res.json();
      console.log(data)

      const iconURL = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      document.querySelector("#weather-part").innerHTML = `
        <img src="${iconURL}" class="icon">
        <p class="temp">${Math.round(data.main.temp)}º</p>
        <p class="city">${data.name}</p>
      `
    }catch{
      console.log("datas not found");
    }
});

//.catch is used when the promise is rejected in .then blocks
//.catch uses a photo I choosed after the promise is rejected ONLY if it was rejected
//crypto: https://www.coingecko.com/api/documentations/v3#/
