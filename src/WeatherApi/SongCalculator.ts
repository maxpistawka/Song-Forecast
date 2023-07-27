
export function songCalculator(code: number, feels_like: number, songs: any): string {

  let hashMap = new Map<number, string[]>();
  let min = 1000
  //  currSong.valence


  // 0:   Innocently Happy
  // 1: 	Despair, Wailing, Weeping 
  // 2:   Triumphant, Victorious War-Cries
  // 3:   Deep Distress, Existential Angst
  // 4: Quarrelsome, Boisterous, Incomplete Pleasure, Restless
  // 5: Furious, Quick-Tempered, Passing Regret
  // 6: Conquering Difficulties, Sighs of Relief ||	Gloomy, Passionate Resentment
  // 7: Serious, Magnificent, Fantasy || Discontent, Uneasiness
  // 8: Death, Eternity, Judgement ||	Grumbling, Moaning, Wailing
  // 9: Joyful, Pastoral, Declaration of Love
  // 10: Joyful, Quaint, Cheerful ||	Terrible, the Night, Mocking
  // 11: Harsh, Strong, Wild, Rage || Solitary, Melancholic, Patience
  

  function rain(song: any){
    let key = song.key
    var result = 0
    if (song.mode == 0) {
      result +=30
    }
    if (key == 1 || key == 3 || key == 6 || key == 8){
      result += 10
    } else {
      result -= 10
    }
    if (song.tempo <= 95) {
      result +=10
    }
    if (song.tempo >= 130) {
      result -=10
    }
    if (song.loudness + feels_like <= 10) {
      result +=10
    }
    if (song.energy - feels_like <= 20) {
      result +=10
    }
    if (song.valence <= 25) {
      result +=10
    }
    if (result < min) {
      min = result
    }
    console.log(result)

    const item = hashMap.get(result)
    if (item !== undefined) {
      item.push(song.id)
    }
    else {
      hashMap.set(result, [song.id])
    }

    }
  

  function sunny(song: any){
    let key = song.key
    var result = 0
    if (song.mode == 1) {
      result +=30
    }
    if (key == 0 || key == 2 || key == 6 || key == 9 || key == 10){
      result += 10
    }
    if (song.tempo <= 95) {
      result -=10
    }
    if (song.tempo >= 130) {
      result +=10
    }
    if (song.loudness + feels_like >= 20) {
      result +=10
    }
    if (song.energy - feels_like >= 32) {
      result +=10
    }
    if (song.valence >= 55) {
      result +=10
    }
    console.log(result)
    if (result < min) {
      min = result
    }

    const item = hashMap.get(result)
    if (item !== undefined) {
      item.push(song.id)
    }
    else {
      hashMap.set(result, [song.id])
    }
  }
  function gloomy(song: any){
    let key = song.key
    var result = 0
    if (song.mode == 0) {
      result +=30
    }
    if (key == 1 || key == 3 || key == 6 || key == 8){
      result += 10
    }
    if (song.tempo <= 95) {
      result +=10
    }
    if (song.tempo >= 130) {
      result -=10
    }
    if (song.loudness + feels_like <= 10) {
      result +=10
    }
    if (song.energy - feels_like <= 20) {
      result +=10
    }
    if (song.valence <= 25) {
      result +=10
    }
    console.log(result)
    if (result < min) {
      min = result
    }
    
    const item = hashMap.get(result)
    if (item !== undefined) {
      item.push(song.id)
    }
    else {
      hashMap.set(result, [song.id])
    }
    
  }

  function thunderstorm(song: any){
    let key = song.key
    var result = 0
    if (song.mode == 0) {
      result +=30
    }
    if (key == 1 || key == 3 || key == 6 || key == 8 || key == 11){
      result += 10
    }
    if (song.tempo <= 95) {
      result +=10
    }
    if (song.tempo >= 130) {
      result -=10
    }
    if (song.loudness + feels_like <= 10) {
      result +=10
    }
    if (song.energy - feels_like <= 20) {
      result +=10
    }
    if (song.valence <= 25) {
      result +=10
    }

    if (result < min) {
      min = result
    }
    console.log(result)
    const item = hashMap.get(result)
    if (item !== undefined) {
      item.push(song.id)
    }
    else {
      hashMap.set(result, [song.id])
    }
  }

  function snow(song: any){
    let key = song.key
    var result = 0
    if (song.mode == 0) {
      result +=30
    }
    if (key == 1 || key == 3 || key == 6 || key == 8){
      result += 10
    }
    if (song.tempo <= 95) {
      result +=10
    }
    if (song.tempo >= 130) {
      result -=10
    }
    if (song.loudness + feels_like <= 10) {
      result +=10
    }
    if (song.energy - feels_like <= 20) {
      result +=10
    }
    if (song.valence <= 25) {
      result +=10
    }

    if (result < min) {
      min = result
    }
    console.log(result)
    const item = hashMap.get(result)
    if (item !== undefined) {
      item.push(song.id)
    }
    else {
      hashMap.set(result, [song.id])
    }
  }

  console.log(code)
  switch (code) {
    
    // Clear
    case 800:

    // Cloud
    case 801:
      for (var i = 0; i < songs.length; i++) {
        sunny(songs[i])
      }

      break;
    case 802:
    case 803:
    case 804:
      for (var i = 0; i < songs.length; i++) {
        gloomy(songs[i])
      }
      break;
      
    // Rain
    case 500:
    case 501:
    case 520:
    case 521:
    case 511:
      for (var i = 0; i < songs.length; i++) {
        rain(songs[i])
      }
      break;
     
    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      for (var i = 0; i < songs.length; i++) {
        rain(songs[i])
      }
      break;
      

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      
    // Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      for (var i = 0; i < songs.length; i++) {
        thunderstorm(songs[i])
      }
      break;
      

    // Snow
    case 600:
    case 601:
    case 602:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
    case 611:
      for (var i = 0; i < songs.length; i++) {
        snow(songs[i])
      }
      break;
   
      

    // Atmosphere
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      for (var i = 0; i < songs.length; i++) {
        gloomy(songs[i])
      }
      break;

    default:
      for (var i = 0; i < songs.length; i++) {
        sunny(songs[i])
      }
      
  }



  let minSongs = hashMap.get(min)
  if (minSongs !== undefined) {
    return minSongs[Math.floor(Math.random() * minSongs.length)]
  }
  else {
    return "ewqwe"
  }
  
};

