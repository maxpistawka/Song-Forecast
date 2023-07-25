
export function toCelsius(temp: number) {
    return Math.round((temp - 32) * 500 / 9) / 100
}
export function capitalizeFirsts(word: string) {
    const words = word.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

export function playlistToCode(playlist: string) {
    let rightIndex = 0
    for (var i = playlist.length - 1; i >= 0; i--) {
        if (playlist[i] == "?") {
            rightIndex = i
        }
        else if (playlist[i] == "/") {
            return playlist.substring(i + 1, rightIndex)
        }
    }
}

export function currentWeatherBuilder(response: any) {
    let weatherMain = response.weather[0]
    return {
        weather: {
            id: weatherMain.id,
            main: weatherMain.main,
            description: capitalizeFirsts(weatherMain.description),
            icon: weatherMain.main.icon
        },
        main: {
            temp: toCelsius(response.main.temp),
            feels_like: toCelsius(response.main.feels_like),

            humidity: response.main.humidity,
            max: toCelsius(response.main.temp_max),
            min: toCelsius(response.main.temp_min),
        },
        clouds: {
            all: response.clouds.all
        },
        wind: {
            speed: response.wind.speed,

        },
        name: response.name

    }
}