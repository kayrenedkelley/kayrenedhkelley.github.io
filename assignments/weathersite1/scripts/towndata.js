var dataObject = new XMLHttpRequest();
dataObject.open('Get', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
console.log("about to send request");
dataObject.send();

dataObject.onload = function () {
    var dataInfo = JSON.parse(dataObject.responseText);
    console.log(dataInfo);

    document.getElementById('town').innerHTML = dataInfo.towns[0].name;
    document.getElementById('motto').innerHTML = dataInfo.towns[0].motto;
    document.getElementById('yrFound').innerHTML = dataInfo.towns[0].yearFounded;
    document.getElementById('curPop').innerHTML = dataInfo.towns[0].currentPopulation;
    document.getElementById('aveRain').innerHTML = dataInfo.towns[0].averageRainfall;


    document.getElementById('town1').innerHTML = dataInfo.towns[1].name;
    document.getElementById('motto1').innerHTML = dataInfo.towns[1].motto;
    document.getElementById('yrFound1').innerHTML = dataInfo.towns[1].yearFounded;
    document.getElementById('curPop1').innerHTML = dataInfo.towns[1].currentPopulation;
    document.getElementById('aveRain1').innerHTML = dataInfo.towns[1].averageRainfall;


    document.getElementById('town3').innerHTML = dataInfo.towns[3].name;
    document.getElementById('motto3').innerHTML = dataInfo.towns[3].motto;
    document.getElementById('yrFound3').innerHTML = dataInfo.towns[3].yearFounded;
    document.getElementById('curPop3').innerHTML = dataInfo.towns[3].currentPopulation;
    document.getElementById('aveRain3').innerHTML = dataInfo.towns[3].averageRainfall;
}
