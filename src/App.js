import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'API_KEY';

  const dummyWeatherData = [
    {
      name: 'City 1',
      main: {
        temp: 25,
        humidity: 60
      },
      wind: {
        speed: 3
      }
    },
    {
      name: 'City 2',
      main: {
        temp: 20,
        humidity: 55
      },
      wind: {
        speed: 4
      }
    },
    {
      name: 'City 3',
      main: {
        temp: 22,
        humidity: 50
      },
      wind: {
        speed: 5
      }
    },
    {
      name: 'City 4',
      main: {
        temp: 18,
        humidity: 65
      },
      wind: {
        speed: 6
      }
    },
    {
      name: 'City 5',
      main: {
        temp: 23,
        humidity: 70
      },
      wind: {
        speed: 7
      }
    },
    {
      name: 'City 6',
      main: {
        temp: 19,
        humidity: 45
      },
      wind: {
        speed: 4
      }
    },
    {
      name: 'City 7',
      main: {
        temp: 24,
        humidity: 55
      },
      wind: {
        speed: 3
      }
    },
    {
      name: 'City 8',
      main: {
        temp: 21,
        humidity: 60
      },
      wind: {
        speed: 5
      }
    },
    {
      name: 'City 9',
      main: {
        temp: 17,
        humidity: 40
      },
      wind: {
        speed: 6
      }
    },
    {
      name: 'City 10',
      main: {
        temp: 26,
        humidity: 75
      },
      wind: {
        speed: 8
      }
    }
  ];
  

  const fetchWeather = () => {
    const foundCity = dummyWeatherData.find((item) => item.name.toLowerCase() === city.toLowerCase());
    if (foundCity) {
      setWeather(foundCity);
      setError(null);
    } else {
      setWeather(null);
      setError('City not found');
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchWeather();
    }
  };

  return (
    <div className="App">
      <h1 className='heading'>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main?.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
