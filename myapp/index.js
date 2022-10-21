const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', (request, response) => {
    response.json([
       { "coord": {
            "lon": -123.2785,
            "lat": 44.5672
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "base": "stations",
          "main": {
            "temp": 286.6,
            "feels_like": 285.91,
            "temp_min": 285.88,
            "temp_max": 289.25,
            "pressure": 1021,
            "humidity": 73
          },
          "visibility": 10000,
          "wind": {
            "speed": 4.12,
            "deg": 10
          },
          "clouds": {
            "all": 100
          },
          "dt": 1664556726,
          "sys": {
            "type": 2,
            "id": 2040223,
            "country": "US",
            "sunrise": 1664546987,
            "sunset": 1664589370
          },
          "timezone": -25200,
          "id": 5720727,
          "name": "Corvallis",
          "cod": 200
        }
    ]);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})