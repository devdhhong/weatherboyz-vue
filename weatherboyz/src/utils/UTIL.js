import * as WEATHER_ICON from "../assets/data/WEATHER_ICON";
// import * as MUSIC from "../assets/data/MUSIC";

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
  else if(format == "mmdd"){
    formatted = `${month}${day}`;
  }
  else if(format == "hhmm"){
    formatted = `${hours}${minutes}`;
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
    else if([2,3].indexOf(code) > -1){
      //흐림
      url = IMG_URL["CLOUDY"];
    }
    // else if(["2","3"].indexOf(code)){
    //   //바람
    //   url = IMG_URL["WINDY"];
    // }
    else if([51,56,61,80].indexOf(code) > -1){
      //약한 비
      url = IMG_URL["RAINY_LIHGT"];
    }
    else if([53,63,81].indexOf(code) > -1){
      //보통 비
      url = IMG_URL["RAINY_NORMAL"];
    }
    else if([55,57,65,67,82].indexOf(code) > -1){
      //강한 비
      url = IMG_URL["RAINY_HEAVY"];
    }
    else if([95,96,99].indexOf(code) > -1){
      //천둥번개
      url = IMG_URL["THUNDER"];
    }
    else if([71,73,77,85].indexOf(code) > -1){
      //눈
      url = IMG_URL["SNOWY_LIGHT"];
    }
    else if([75,86].indexOf(code) > -1){
      //폭설
      url = IMG_URL["SNOW_HEAVY"];
    }
    else if([45,48].indexOf(code) > -1){
      //안개
      url = IMG_URL["FOGGY"];
    }
    else{
      //그 외
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
  
  let weatherCode = JSON.parse(localStorage.getItem("weather")).current.weather_code;
  console.log(weatherCode);
  
  //날짜 관련
  //생일
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
  else if(weatherCode == "1"){
    msg = "더러분 ";
    //비, 눈 => 우산
    //기온 높 => 손풍기, 부채
    //기온 낮 => 목도리
    //미세먼지 => 마스크
    //자외선 => 양산

    //어이어이
    //요 미안ㅋ ㅋㅋ
    //살면서 가장 큰 흑역사가 뭐야? 어디가서 말안할게..;;
    //빵담빵담
    //뱌뱌
    //빠빠
    //kevin kevout pceout
  }
  else{
    msg = "🐶 🍐 🍞 🎁 🐱 🌙 🐧 🐿️ 🍊 ☀️ 🦄";
  }
  

  return msg;
};

// const getMusicData = function(code, time){

// };

export {
    getFormmatedDate,
    getWeatherIcon,
    getAirQualityStatus,
    getMainMsg
};
