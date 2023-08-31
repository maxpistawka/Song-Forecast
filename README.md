# What is Song Forecast?

Song Forecast is a web application I developed meant to suggest the perfect song to fit the weather in your current area. Unlike other applications, song forecast allows you to input your own playlist so that the song recommended by the application is already your taste.

The application can be visited at: https://www.songforecast.com/

# How Song Forecast Works

Song Forecast is based on a plethora of principles in musicology, biomusicology, and the weathers impact on human mood and behaviour. The OpenWeatherMap API is used to initially find the weather information for the inputted city. This includes, but is not limited to: cloudyness, general weather, temperature, humidity, and wind-speed. The application will be able to detect whether there is a current thunderstorm, a blizzard, downpours, sprinkles, or sun within an instant.

With the weather data collected, the application parses all of the songs in the inputted Spotify playlist link for their music traits. This includes but is not limited to the song's key, mode, tempo, loudness, valence, and energy. Utilizing this information with the gathered weather data, the application begins to calculate which song would ensure the best listening experience.

Each song is given a score, depending on how well it matches with the weather, comparing a variety of these different musical and weather aspects. As referenced before, a plethora of different principles from research papers, and general musicology principles were used in doing so. One example of this was with the songs key. Each key is associated with a range of emotions that it typically conveys, which can be seen in many writings such as:
https://blog.flat.io/choose-the-right-key/#:~:text=C%3A%20evokes%20innocence%2C%20happiness%2C,well%20as%20grief%20and%20despair. This knowledge was leveraged with the knowledge of multiple research articles on the affects of weather on mood. If you wish to read more about this research to learn more, I suggest reading this paper about the effects of weather on mood and cognition: https://www.jstor.org/stable/40064300.

The song with the highest score is then chosen and displayed to the user. To ensure best results, try to use a playlist with upwards of 100 songs.

# Why?

One of my closest friends and I have shared our love for music together for multiple years now, talking about music almost any time we see eachother. We both talked about how we wish there was an application like this, and one time we even searched to find one. However, all of the results were for apps that didn't pick out of user inputted songs, just random ones from Spotify. Since our taste in music deviates quite far from the average Spotify singer, using any sort of these apps wasn't even worth the try. Yet, I was motivated and set out to code this project to completition by myself (with the odd non-technical tips from my friend).

# Technical Aspects

The language used for this project was TypeScript, although the program was initially coded and designed for a Python Discord bot. React was used aswell, which proved specifically helpful in building this application due to the constant requirement of accessing and updating client-side object states. Both the Spotify and OpenWeatherMap RESTful APIs were utilized for all of the song and weather information obtaining. For styling, TailwindCSS and pure CSS was used to ensure simplistic code for a visually pleasent user interface. Vite was used as a starter pack, and the application was deployed using Vercel (a hosting service).
