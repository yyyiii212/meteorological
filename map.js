let meteorological = [];
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-D3F6B23F-6E79-408E-A582-41FEACC9992E')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        meteorological = data;
        console.log(data);
    })
    .then(function (error) {
        console.log(error);
    })

const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")
const div5 = document.querySelector(".div5")
const div6 = document.querySelector(".div6")
const img = document.querySelector("#image")

let text = "";
setTimeout(function () {
    text = `<span>${meteorological.records.location[0].locationName} ${meteorological.records.location[0].weatherElement[0].time[0].parameter.parameterName}</span>
    <p>${meteorological.records.location[0].weatherElement[2].time[1].parameter.parameterName} - ${meteorological.records.location[0].weatherElement[4].time[0].parameter.parameterName} °C</p>
    <p>降雨機率 ${meteorological.records.location[0].weatherElement[1].time[0].parameter.parameterName} %</p>
    <i class="fa-solid fa-cloud"></i>`;
    div1.innerHTML = text;
    div2.innerHTML = text;
    div3.innerHTML = text;
    div4.innerHTML = text;
    div5.innerHTML = text;
    div6.innerHTML = text;
}, 100)

img.addEventListener("click", function () {
    window.location.href = "./index.html";
})