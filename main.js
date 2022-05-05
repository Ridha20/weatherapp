
    var weather = {
      apiKey: "0ec869963832a0b03f67703e48e2c584",
      fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
          .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" + name + "')";
          
    

              var d = new Date();
              var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
              
              function CheckDay(day)
              {
                  if(day + d.getDay() > 6)
                  {
                      return day + d.getDay() - 7;
                  }
                  else
                  {
                      return day + d.getDay();
                  }
              }
              
                  for(i = 0; i<5; i++)
                  {
                      document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
                  }
                  var a= fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=0ec869963832a0b03f67703e48e2c584')
                  .then(response => response.json())
                  .then(data => 
                      {
                   
                      for(i = 0; i<5; i++)
                      {
                          document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
                          
                      }
                  
                      for(i = 0; i<5; i++)
                      {
                          document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
                      }
                  
                       for(i = 0; i<5; i++)
                       {
                          document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
                          data.list[i].weather[0].icon
                          +".png";
                      }
                  
                  
                  })

      },
      search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();

    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });


