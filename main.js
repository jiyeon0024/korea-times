window.addEventListener("DOMContentLoaded", async (event) => {
  const container = document.querySelector(".weatherContainer");
  const weatherList = document.querySelectorAll(".weatherWrap");
  console.log(weatherList);
  weatherList[0].style.display = "flex";
  setInterval(() => {
    weatherList[0].style.display =
      weatherList[0].style.display == "flex" ? "none" : "flex";
    weatherList[1].style.display =
      weatherList[1].style.display == "flex" ? "none" : "flex";
  }, 3000);
});
