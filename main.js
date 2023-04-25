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

const sel1 = document.querySelector("#sel1")
const li1 = document.querySelector(".li1")
const li2 = document.querySelector(".li2")
const li3 = document.querySelector(".li3")
const li4 = document.querySelector(".li4")
const back4 = document.querySelector(".back4")
const back3 = document.querySelector(".back3")

sel1.addEventListener("change", function (i) {
    // back4.innerHTML = "";
    const result = i.target.value;
    const num = sel1.selectedIndex - 1;
    if (sel1.selectedIndex == 0) {
        let lis = document.querySelectorAll('.back3 li');
        lis.forEach(li => li.innerHTML = '');
        back4.innerHTML = "";
    }
    let contant = "";
    // 地區
    contant = `<li>${result}</li>`;
    li1.innerHTML = contant;
    // 天氣
    let contant1 = "";
    contant1 = `${meteorological.records.location[num].weatherElement[0].time[0].parameter.parameterName}`
    li2.innerHTML = contant1;
    // 溫度
    let contant2 = "";
    contant2 = `<li>${meteorological.records.location[num].weatherElement[2].time[1].parameter.parameterName} - ${meteorological.records.location[num].weatherElement[4].time[0].parameter.parameterName} °C</li>`;
    li3.innerHTML = contant2;
    // 降雨機率
    let contant3 = "";
    contant3 = `降雨機率 ${meteorological.records.location[num].weatherElement[1].time[0].parameter.parameterName} %`;
    li4.innerHTML = contant3;

    if (contant1 === "多雲") {
        back4.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    } else if (contant1 === "多雲短暫雨") {
        back4.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;

    } else if (contant1 === "陰短暫雨") {
        back4.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;

    } else if (contant1 === "多雲時陰短暫雨") {
        back4.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;

    } else if (contant1 === "晴時多雲") {
        back4.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;

    }
})