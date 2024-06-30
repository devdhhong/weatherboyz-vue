import * as WEATHER_ICON from "../assets/data/WEATHER_ICON";
// import * as MUSIC from "../assets/data/MUSIC";

// 날짜 형식 파싱
const getFormmatedDate = function (getDate, format) {
  const date = getDate || new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const hours12 = (hours % 12 || 12).toString().padStart(2, '0'); // 24시간 형식을 12시간 형식으로 변환
  const minutes = date.getMinutes().toString().padStart(2, '0');

  let formatted = "";

  if(format == "yyyymm"){
    formatted = `${year}${month}${day}`;
  }
  else if(format == "mm"){
    formatted = `${month}`;
  }
  else if(format == "mmdd"){
    formatted = `${month}${day}`;
  }
  else if(format == "hhmm"){
    formatted = `${hours}${minutes}`;
  }
  else if(format == "hhmm_12"){
    formatted = `${hours12}${minutes}`;
  }
  else if(format == "mm/dd hh시"){
    formatted = `${month}/${day} ${hours}시`;
  }
  else{
    formatted = `${year}${month}${day}${hours}${minutes}`;
  }

  return formatted;
};

// 날씨 아이콘 이미지 경로 조회
const getWeatherIcon = function(code, time){
    let url = ""; //아이콘 이미지 경로
    let weather = JSON.parse(localStorage.getItem("weather"));
    let sunrise = getFormmatedDate(new Date(weather.daily.sunrise[0]), "hhmm"); //일출시간
    let sunset = getFormmatedDate(new Date(weather.daily.sunset[0]), "hhmm"); //일몰시간
    let hhmm = getFormmatedDate(time, "hhmm"); //현재시간
    let IMG_URL = WEATHER_ICON.IMG_URL;

    const pad = 0; //시간 허용 범위

    //맑음
    if([0,1].indexOf(code) > -1){  
      if(hhmm < (sunrise - pad) || hhmm > (sunset + pad)){
        //밤
        url = IMG_URL["SUNNY_NIGHT"];
      }
      else if(Math.abs(sunrise - hhmm) < pad){
        //일출
        url = IMG_URL["SUNNY_SUNRISE"];
      }
      else if(Math.abs(sunset - hhmm) < pad){
        //일몰
        url = IMG_URL["SUNNY_SUNSET"]; 
      }
      else {
        //낮
        url = IMG_URL["SUNNY_DAY"]; 
      }

    }
    //흐림
    else if([2,3].indexOf(code) > -1){
      url = IMG_URL["CLOUDY"];
    }
    // else if(["2","3"].indexOf(code)){
    //   //바람
    //   url = IMG_URL["WINDY"];
    // }
    //약한 비
    else if([51,56,61,80].indexOf(code) > -1){
      url = IMG_URL["RAINY_LIHGT"];
    }
    //보통 비
    else if([53,63,81].indexOf(code) > -1){
      url = IMG_URL["RAINY_NORMAL"];
    }
    //강한 비
    else if([55,57,65,67,82].indexOf(code) > -1){
      url = IMG_URL["RAINY_HEAVY"];
    }
    //천둥번개
    else if([95,96,99].indexOf(code) > -1){
      url = IMG_URL["THUNDER"];
    }
    //눈
    else if([71,73,77,85].indexOf(code) > -1){
      url = IMG_URL["SNOWY_LIGHT"];
    }
    //폭설
    else if([75,86].indexOf(code) > -1){
      url = IMG_URL["SNOW_HEAVY"];
    }
    //안개
    else if([45,48].indexOf(code) > -1){
      url = IMG_URL["FOGGY"];
    }
    //그 외
    else{
      url = "";
    }

    return url;
};

//미세먼지 상태 조회 
const getAirQualityStatus = function(degree1, degree2){
  let pm10 = ""; //미세먼지
  let pm2_5 = ""; //초미세먼지

  //대한민국 기준
  if(degree1 <= 30){ pm10 = "좋음"; }
  else if(degree1 <= 80){ pm10 = "보통"; }
  else if(degree1 <= 150){ pm10 = "나쁨"; }
  else { pm10 = "매우나쁨"; }
  
  if(degree2 <= 15){ pm2_5 = "좋음"; }
  else if(degree2 <= 35){ pm2_5 = "보통"; }
  else if(degree2 <= 75){ pm2_5 = "나쁨"; }
  else { pm2_5 = "매우나쁨"; }

  return [pm10, pm2_5];
};

//메인화면 메세지 조회
const getMainMsg = function(){
  let msg = "";
  let mmdd = getFormmatedDate("", "mmdd");
  let hhmm = getFormmatedDate("", "hhmm");
  let hhmm_12 = getFormmatedDate("", "hhmm_12");
  
  let birthday = ["1104", "0530", "0808", "0917", "0115", "0223", "0426", "1105", "0309", "0412", "1222", "1206", "0403"];
  let weather = JSON.parse(localStorage.getItem("weather"));
  let airQuality = JSON.parse(localStorage.getItem("airQuality"));
  
  //평균량
  let rain_6hours = (weather.hourly.rain.slice(0,6).reduce((acc, num) => acc + num, 0))/6;
  let showers_6hours = (weather.hourly.showers.slice(0,6).reduce((acc, num) => acc + num, 0))/6;
  let snowfall_6hours = (weather.hourly.snowfall.slice(0,6).reduce((acc, num) => acc + num, 0))/6;
  let temp_6hours = (weather.hourly.temperature.slice(0,6).reduce((acc, num) => acc + num, 0))/6;

  let pm10 = airQuality.current.pm10;
  let pm2_5 = airQuality.current.pm2_5;
  
  //날짜 관련
  //시간
  if(birthday.indexOf(hhmm_12) > -1){
    if(hhmm_12 == "1104"){
      msg = "🐶 상연시 🐶";
    }
    else if(hhmm_12 == "0530"){
      msg = "🍐 제이콥시 🍐";
    }
    else if(hhmm_12 == "0808"){
      msg = "🍞 영훈시 🍞";
    }
    else if(hhmm_12 == "0917"){
      msg = "🎁 현재시 🎁";
    }
    else if(hhmm_12 == "0115"){
      msg = "🐱 주연시 🐱";
    }
    else if(hhmm_12 == "0223"){
      msg = "🌙 케빈시 🌙";
    }
    else if(hhmm_12 == "0426"){
      msg = "🐧 차니시 🐧";
    }
    else if(hhmm_12 == "1105"){
      msg = "🐿️ 창민시 🐿️";
    }
    else if(hhmm_12 == "0309"){
      msg = " 🍊 학년시 🍊";
    }
    else if(hhmm_12 == "0412"){
      msg = "☀️ 선우시 ☀️";
    }
    else if(hhmm_12 == "1222"){
      msg = "🦄 영재시 🦄";
    }
  }
  //생일
  else if(birthday.indexOf(mmdd) > -1){
    if(mmdd == "1104"){
      msg = "🎉 🎂 🥳 HAPPY 상연 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0530"){
      msg = "🎉 🎂 🥳 HAPPY 제이콥 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0808"){
      msg = "🎉 🎂 🥳 HAPPY 영훈 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0917"){
      msg = "🎉 🎂 🥳 HAPPY 현재 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0115"){
      msg = "🎉 🎂 🥳 HAPPY 주연 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0223"){
      msg = "🎉 🎂 🥳 HAPPY 케빈 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0426"){
      msg = "🎉 🎂 🥳 HAPPY 뉴 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "1105"){
      msg = "🎉 🎂 🥳 HAPPY 큐 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0309"){
      msg = "🎉 🎂 🥳 HAPPY 학년 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0412"){
      msg = "🎉 🎂 🥳 HAPPY 선우 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "1222"){
      msg = "🎉 🎂 🥳 HAPPY 에릭 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "1206"){
      msg = "🎉 🎂 🥳 HAPPY 더보이즈 BIRTHDAY 🥳 🎂 🎉";
    }
    else if(mmdd == "0403"){
      msg = "🎉 🎂 🥳 HAPPY 더비 BIRTHDAY 🥳 🎂 🎉";
    }
  }
  //정기 이벤트
  else if(mmdd == "0101"){
    msg = "Happy New Year 🧧";
  }
  else if(mmdd == "1225"){
    msg = "Merry Christmas 🎄 🎅🏻 ⛄️";
  }
  //1회성 이벤트
  else if(mmdd == "0712"){
    msg = "더러분 🤍 첫콘 🤍 더비봉 꼬옥 챙기세요 📢";
  }
  else if(mmdd == "0713"){
    msg = "더러분 🌀 중콘 🌀 더비봉 꼬옥 챙기세요 📢";
  }
  else if(mmdd == "0714"){
    msg = "더러분 💞 막콘 💞 더비봉 꼬옥 챙기세요 📢";
  }
  //날씨 관련
  else if(rain_6hours || showers_6hours){
    msg = "☔️ 더러분 우산 챙기세요 ☔️";
  }
  else if(snowfall_6hours){
    msg = "❄️ 더러분 우산 챙기세요 ❄️";
  }
  else if(pm10 > 80 || pm2_5 > 35){
    msg = "😷 더러분 마스크 챙기세요 😷";
  }
  else if(temp_6hours > 28){
    msg = "🌀 더러분 손풍기 챙기세요 🌀";
  }
  else if(temp_6hours > 33){
    msg = "🔥 폭 염 주 의 🔥";
  }
  else if(temp_6hours < 0){
    msg = "🧣 더러분 목도리 챙기세요 🧣";
  }
  else if(temp_6hours < -10){
    msg = "🥶 한 파 주 의 🥶";
  }
  else if(weather.current.uv_index > 5){
    msg = " ☀️ 더러분 양산 챙기세요 ☀️";
  }
  //기타
  else if(hhmm > 2200 &&hhmm < 2400){
    msg = "더비이이 오늘 하루도 수고했어 빵담빵담";
  }
  //기타
  else{
    msg = "🐶 🍐 🍞 🎁 🐱 🌙 🐧 🐿️ 🍊 ☀️ 🦄";
  }
  
      //비, 눈 => 우산
    //기온 높 => 손풍기, 부채
    //기온 낮 => 목도리
    //미세먼지 => 마스크
    //자외선 => 양산

  return msg;
};

// 날씨 메인 이미지 경로 조회
const getWeatherMain = function(code){
  let theme = localStorage.getItem("theme");
  let status = "";
    //맑음
  if([0,1].indexOf(code) > -1){  
    status = "CLEAR";
  }
  //흐림
  else if([2,3].indexOf(code) > -1){
    status = "CLOUD";
  }
  //약한 비
  else if([51,56,61,80].indexOf(code) > -1){
    status = "LIGHT_RAIN";
  }
  //보통 비
  else if([53,63,81].indexOf(code) > -1){
    status = "LIGHT_RAIN";
  }
  //강한 비
  else if([55,57,65,67,82].indexOf(code) > -1){
    status = "HEAVY_RAIN";
  }
  // //천둥번개
  // else if([95,96,99].indexOf(code) > -1){
  //   url = IMG_URL["THUNDER"];
  // }
  // //눈
  // else if([71,73,77,85].indexOf(code) > -1){
  //   url = IMG_URL["SNOWY_LIGHT"];
  // }
  // //폭설
  // else if([75,86].indexOf(code) > -1){
  //   url = IMG_URL["SNOW_HEAVY"];
  // }
  // //안개
  // else if([45,48].indexOf(code) > -1){
  //   url = IMG_URL["FOGGY"];
  // }
  //그 외
  else{
    status = "CLOUD";
  }


  // return "../assets/images/" + status + "/" + theme + ".png";
  return "/images/" + status + "/" + theme + ".png";
}

// 추천 노래 조회
// const getMusicData = function(code, time){
//   let mm = getFormmatedDate("", "mm");
  
//   //봄 (3,4,5)
//   if([3,4,5].indexOf(Number(mm)) > -1){
//   }
//   //여름(6,7,8)
//   else if([6,7,8].indexOf(Number(mm)) > -1){

//   }
//   //가을(9,10,11)
//   else if([9,10,11].indexOf(Number(mm)) > -1){
//   }
//   //겨울(10,11,12)
//   else{

//   }

// };

export {
    getFormmatedDate,
    getWeatherIcon,
    getAirQualityStatus,
    getMainMsg,
    getWeatherMain
};
