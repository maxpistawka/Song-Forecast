import Navbar from "@/scenes/navbar";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AudioFeatures } from "@spotify/web-api-ts-sdk";
import OpenWeatherMap from 'openweathermap-ts';
import { WeatherData } from "@/weather";
import { playlistToCode, currentWeatherBuilder } from "@/shared/helpers.ts"
import HText from '@/shared/HText';
import WeatherIcon from '@/WeatherApi/CurrWeatherIcon.tsx'
import Check from '@/assets/check.png'
import Footer from "@/scenes/footer";
import {weatherKey, idKey, secretKey} from "@/apis.ts"



const openWeather = new OpenWeatherMap({
  apiKey: weatherKey
});
const CLIENT_ID = idKey
const CLIENT_SECRET = secretKey


var ada: WeatherData

function App() {
 
  const [validPlaylist, setValidPlaylist] = React.useState(false);
  const [playlist, setPlaylist] = React.useState('');
  var playlistID = ""

  const [validCity, setValidCity] = React.useState(false);
  const [city, setCity] = React.useState('');
  const [visible, setVisible] = useState(false);

  const [accessToken, setAccessToken] = useState('');

  const [songFullName, setSongFullName] = React.useState('');
  const [artistFullName, setArtistFullName] = React.useState('');

  const [imgLink, setImgLink] = React.useState('https://cdn.discordapp.com/attachments/325762404879433738/1132476182672191649/image.png');

  var magicNumber = 100;


  useEffect(() => {
    var authParamaters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParamaters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))

  }, [])




  async function verifyWeatherData() {
    playlistID = playlistToCode(playlist)!

    try {
      await fetchWeatherData()
    } catch (error) {
      console.error('Error is ', error);
      return
    }

    setValidCity(true);
    console.log(validCity)
    if (validPlaylist) {
      validPlaylistCheck()
    }
  };

  async function fetchWeatherData() {
    ada = await openWeather
      .getCurrentWeatherByCityName({
        cityName: city
      }).then((response) => { return currentWeatherBuilder(response) })
    console.log(ada)
  };



  async function findMagic() {
    magicNumber = Math.abs(ada.main.temp - 50) * 5 / 9 * 15
    console.log("magic num: " + String(magicNumber))

  };

  async function tryValidPlaylistCheck() {
    playlistID = playlistToCode(playlist)!
    console.log("Search for " + playlistID)
    var artistParameters = {
      methos: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      }
    }
    const response = await fetch('https://api.spotify.com/v1/playlists/' + playlistID + '/tracks?limit=50', artistParameters)
    console.log(response.ok)
    if (response.ok) {
      setValidPlaylist(true);
      if (validCity) {
        validPlaylistCheck()
      }
    } else {
      setValidPlaylist(false);

    }
  }

  async function validPlaylistCheck() {

    fetchWeatherData()

    console.log("Search for " + playlistID)


    var artistParameters = {
      methos: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,

      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/playlists/' + playlistID + '/tracks?limit=50', artistParameters)
      .then(response => response.json())
      .then(data => { return data.items })


    var arr_names: string[] = new Array(artistID.length)

    for (var i = 0; i < artistID.length; i++) {
      2
      arr_names[i] = artistID[i].track.id
    }

    var songs: AudioFeatures[] = new Array(artistID.length)

    for (var i = 0; i < artistID.length; i++) {
      2
      songs[i] = await fetch('https://api.spotify.com/v1/audio-features/' + arr_names[i], artistParameters)
        .then(response => response.json())
        .then(data => { return data })
    }

    await fetchWeatherData()
    await findMagic()

    let result = [0, 1000]
    for (var i = 0; i < artistID.length; i++) {
      let currSong = songs[i]
      let index = currSong.danceability + currSong.energy + currSong.loudness + currSong.speechiness +
        currSong.instrumentalness + currSong.liveness + currSong.tempo + currSong.valence
      if (Math.abs(index - magicNumber) < result[1]) {
        result = [i, Math.abs(index - magicNumber)]
      }
    }
    let FINALSONG = songs[result[0]].id

    var wowww = await fetch('https://api.spotify.com/v1/tracks/' + FINALSONG, artistParameters)
      .then(response => response.json())
      .then(data => { return data })

    let artistNameFinal = wowww.artists[0].name
    let songNameFinal = wowww.name
    console.log(artistNameFinal + ":" + songNameFinal)

    setImgLink(wowww.album.images[0].url)
    setArtistFullName(artistNameFinal)
    setSongFullName(songNameFinal)
    console.log(imgLink)

    setVisible(true);

  }


  return (
    <div className="  app">
      <Navbar></Navbar>
      {!visible ? (
          
            <div className="grid py-32  ">
             
            <div className=" input__wrapper">
              
              <HText>Playlist Link:</HText>
              <div>
              <input
                type="text"
                placeholder="Enter Link"
                value={playlist}
                onChange={(e) => setPlaylist(e.target.value)}
                maxLength={100}
              >
              </input>
              <button onClick={tryValidPlaylistCheck}>Submit</button>
              </div>
              {validPlaylist && (
                <img src={Check} ></img>
              )
              }
              
            </div>
            <div className=" input__wrapper  split">
              <HText>Location:</HText>
              <input
                type="text"
                placeholder="Enter Location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                maxLength={30}
              ></input>
              <button onClick={verifyWeatherData}>Submit</button>
              {validCity && (
                <img src={Check} ></img>
              )
              }
             
            </div>
           
          </div>
      
          
            ) : (
              <div className="grid grid-cols-1 mt-10">
                <div className=" md:flex items-center gap-4  ">
                  <div className = "grid grid-cols-1  mt-16">
                    <h1 className="  text-gray-200 basis-3/5 font-serif  text-3xl ">
                      {songFullName}
                    </h1>
                    <h1 className=" text-gray-200 basis-3/5  font-serif text-2xl ">
                      {artistFullName}
                    </h1>
                  </div>
                  <img height={400} width={400} src={imgLink} ></img>
                </div>
                <div className=" md:flex items-center justify-between gap-8 mt-5">
                  <div >
                    <div>
                    <HText>Current Weather in:</HText>
                    </div>
                    <div>
                    <HText>{ada.name}</HText>
                    </div>
                    <div className="md:flex items-center justify-between gap-8 mt-5">
                      <WeatherIcon code={ada.weather.id} ></WeatherIcon>
                      <HText>{ada.main.temp}° C</HText>
                    </div>
                    <div className="mt-5">
                      <HText>{ada.weather.description}</HText>
                    </div>
                  </div>
                  <div className="grid-cols-1 space-y-4 ">
                    <div>
                      <HText>Feels Like: {ada.main.feels_like}° C</HText>
                    </div>
                    <div>
                      <HText>High: {ada.main.max}° C</HText>
                    </div>
                    <div>
                      <HText>Low: {ada.main.min}° C</HText>
                    </div>
                    <div>
                      <HText>Humidity: {ada.main.humidity} %</HText>
                    </div>
                  </div>
                </div>
              </div>
            ) }
          
         
          
          
            
        
        <Footer></Footer>
        </div>
      
    
  )
}

export default App
