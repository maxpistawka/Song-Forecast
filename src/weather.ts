export type WeatherData = {
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      max: number,
      min: number,
    };
    wind: {
      speed: number;
      
    };
    clouds: {
      all: number;
    },
    name: string;
  }
  
