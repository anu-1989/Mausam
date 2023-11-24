let weather={
    apiKey: "d92e3b1366c14ac2b7b113403220807",
    fetchWeather: function(city) {
        fetch(
            "http://api.weatherapi.com/v1/current.json?key="+ 
            this.apiKey+ "&q="
            +city+"&aqi=yes"
        ).then((response) => response.json())
        .then((data)=>this.display(data));
        console.log(data);
    },
    display: function(data){
        const { name }= data.location;
        const { temp_c} =data.current;
        const {text,icon} =data.current.condition;
        const { wind_kph, humidity} = data.current;
        const { co, no2, o3, so2, pm2_5, pm10} = data.current.air_quality;
        //console.log(name,temp_c,text,icon,wind_kph,humidity);
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src=icon;
        document.querySelector(".weatherDescription").innerText=text;
        document.querySelector(".temp").innerText=temp_c+ "°C";
        document.querySelector(".humidity").innerText = "Humidity : "+humidity;
        document.querySelector(".windSpeed").innerText = "Wind Speed : "+wind_kph + " km/h";
        document.querySelector(".co").innerText = "CO Level : "+co + " ppm";
        document.querySelector(".no2").innerText = "NO2 Level : "+no2 + " ppm";
        document.querySelector(".o3").innerText = "O3 Level : "+o3 + " ppm";
        document.querySelector(".so2").innerText = "SO2 Level : "+so2 + " ppm";
        document.querySelector(".pm25").innerText = "PM 2.5 : "+pm2_5;
        document.querySelector(".pm10").innerText = "PM 10 : "+pm10;
        document.querySelector(".details").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +text + "')";
    },
    search: function()
    {
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
};
document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();
});

document.querySelector(".searchBar")
.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

 weather.fetchWeather("Delhi");

