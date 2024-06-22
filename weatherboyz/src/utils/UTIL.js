import * as WEATHER_ICON from "../assets/data/WEATHER_ICON";
// import * as WEATHER_ICON from "../utils/WEATHER_ICON.js";

// 날짜 형식 파싱
const getFormmatedDate = function (getDate, format) {
  const date = getDate || new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  let formatted = "";

  if(format == "yyyymm"){
    formatted = `${year}${month}${day}`;
  }
  else if(format == "hhmm"){
    formatted = `${hours}${minutes}`;
  }
  else{
    formatted = `${year}${month}${day}${hours}${minutes}`;
  }

  return formatted;
};

// 날씨 아이콘 이미지 경로 조회
const getWeatherIcon = function(code){
    let url = ""; //아이콘 이미지 경로
    let weather = JSON.parse(localStorage.getItem("weather"));
    let sunrise = getFormmatedDate(new Date(weather.daily.sunrise[0]), "hhmm"); //일출시간
    let sunset = getFormmatedDate(new Date(weather.daily.sunset[0]), "hhmm"); //일몰시간

    let time = getFormmatedDate("", "hhmm"); //현재시간

    //맑음
    if(["0"].indexOf(code)){      
      if(time < (sunrise-30) || time > (sunset+30)){
        //밤
        url = WEATHER_ICON["SUNNY_NIGHT"];
      }
      else if(Math.abs(sunrise-time) < 30){
        //일출
        url = WEATHER_ICON["SUNNY_SUNRISE"];
      }
      else if(Math.abs(sunset-time) < 30){
        //일몰
        url = WEATHER_ICON["SUNNY_SUNRISE"]; 
      }
      else {
        //낮
        url = WEATHER_ICON["SUNNY_DAY"]; 
      }
    }
    else if()




      //

}

export {
    getFormmatedDate,
    getWeatherIcon
};
