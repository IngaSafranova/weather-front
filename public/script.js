


const enter = document.querySelector('.btn');
//console.log(enter)
const locationElement = document.querySelector('.location');
//console.log(locationElement)
    const dateElement = document.querySelector('.date');
   const weatherElement = document.querySelector('[data-weather]');
   //console.log(weatherElement)
    const temperatureElement = document.querySelector('[data-temperature]');
    //console.log(temperatureElement)
    const humidityElement = document.querySelector('[data-humidity]');
// //console.log(humidityElement)

   
  

const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

enter.addEventListener('click',(event)=>{

    //prevents page reload when submitting a form
    event.preventDefault();

    //get value of input for city
    const city = document.querySelector('.search').value;

    //to clear the Input field
   document.querySelector('.search').value ='';


fetch ('/weather',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({city})
})
.then(res => { if(res.ok){ return res.json();
} else{
    throw new Error("Network response Error");
}
}).then(data =>{console.log(data)



getWeather(city,data)

  

})
.catch((error)  => console.log("Fetch error:", error));
})

function getWeather(city,data){
     const weather = data.current.weather[0].description
 console.log(weather)

 const temperature = Math.floor(data.current.temp)
 console.log(temperature)
 const humidity = `${data.current.humidity }%`
 console.log(humidity)
    locationElement.textContent = city
    dateElement.textContent =dateBuilder(new Date())
    weatherElement.textContent = weather;
    temperatureElement.textContent = temperature;
    humidityElement.textContent = humidity;
    
    
        if (temperature >= 17)
            {document.body.style.backgroundColor = "#daa520"}
            else 
            document.body.style.backgroundColor = "#4682b4"
           // document.body.style.backgroundImage = "url('/pexels-photomix-company-96627.jpg')"
        
}

