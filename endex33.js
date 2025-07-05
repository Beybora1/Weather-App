//

let txt1 = document.getElementById("txt1");
let result = document.getElementById("result");
let btn1 = document.getElementById("btn1");

function havaDurumu(){
    let apiKey = '[your API Key]';
    let city = txt1.value;

    if(city == ""){
        result.textContent = "";
        result.style.margin = "10px 0";
        result.textContent = "Lütfen bir şehir ismi giriniz.";
    }

    
    
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            try{
                if(data.cod == 200){
                    //console.log(data);
                    let temp = data.main.temp;
                    let description = data.weather[0].description;
                    let humudity = data.main.humidity;
                    let pressure = data.main.pressure;
                    let windSpeed = data.wind.speed;
                    let cityname = data.name;
                    let countryCode = data.sys.country;
                    let weatherIcon = data.weather[0].icon;
                    let iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                    let iconCountry = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    
    
                    result.innerHTML = `
                <div class="div1">
                    <span>${cityname}</span>
                    <img src="${iconCountry}">
                    
                </div>
    
                <div class="div2">
                    <img src="${iconUrl}" alt=""><br>
                    <div>${description}</div>
                </div>
    
                <div class="div3">
                    ${temp} °C
                </div>
                
                <div class="div4" id="alt">
                    <span class="span1">
                        <span>Nem</span>
                        <span>${humudity}%</span>
                    </span>
                    <span class="span2">
                        <span>Basınç</span>
                        <span>${pressure}fit</span>
                    </span>
                    <span class="span3">
                        <span>Rüzgar</span>
                        <span>${windSpeed}km/s</span>
                    </span>
                </div>
                    
                    `;
                    
                    console.log(data);

                }
    
                else{
                    result.innerHTML = "Şehir bulunamadı.";
                }
            }
            
            catch{
                result.innerHTML = "Hava durumu verisi bulunamadı.";
            }
        })
    }
    


}


function fonksiyon(){


    let apiKey = '056bea034162d59129c21156c80e66a6';
    let city = 'İstanbul';

    if(city == ""){
        result.textContent = "";
        result.style.margin = "10px 0";
        result.textContent = "Lütfen bir şehir ismi giriniz.";
    }

    
    
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            try{
                if(data.cod == 200){
                    //console.log(data);
                    let temp = data.main.temp;
                    let description = data.weather[0].description;
                    let humudity = data.main.humidity;
                    let pressure = data.main.pressure;
                    let windSpeed = data.wind.speed;
                    let cityname = data.name;
                    let countryCode = data.sys.country;
                    let weatherIcon = data.weather[0].icon;
                    let iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                    let iconCountry = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    
    
                    result.innerHTML = `
                <div class="div1">
                    <span>${cityname}</span>
                    <img src="${iconCountry}">
                    
                </div>
    
                <div class="div2">
                    <img src="${iconUrl}" alt=""><br>
                    <div>${description}</div>
                </div>
    
                <div class="div3">
                    ${temp} °C
                </div>
                
                <div class="div4" id="alt">
                    <span class="span1">
                        <span>Nem</span>
                        <span>${humudity}%</span>
                    </span>
                    <span class="span2">
                        <span>Basınç</span>
                        <span>${pressure}fit</span>
                    </span>
                    <span class="span3">
                        <span>Rüzgar</span>
                        <span>${windSpeed}km/s</span>
                    </span>
                </div>
                    
                    `;
                    
                }
    
                else{
                    result.innerHTML = "Şehir bulunamadı.";
                }
            }
            
            catch{
                result.innerHTML = "Hava durumu verisi bulunamadı.";
            }
        })
    }

}

btn1.addEventListener("click", () => {
    havaDurumu();
    
})

fonksiyon();

//#ffd480
