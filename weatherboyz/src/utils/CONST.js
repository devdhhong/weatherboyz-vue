//이미지 경로 
//SY JC YH HJ JY KV NW QQ HN SW ER ALL
//EX- http://via.placeholder.com/가로길이x세로길이/바탕색코드/글자색코드?text=이미지안글자

//케빈
const IMG_URL = {
    "T0" : {
        HOT : "https://via.placeholder.com/800x1000/000000/ffffff?text=TBZ-HOT",
        CLOUD : "https://via.placeholder.com/800x1000/000000/ffffff?text=TBZ-CLOUD",
        RAIN : "https://via.placeholder.com/800x1000/000000/ffffff?text=TBZ-RAIN",
    },
    "T6" : { //케빈
        HOT : "https://via.placeholder.com/800x1000/000000/ffffff?text=KV-HOT",
        CLOUD : "https://via.placeholder.com/800x1000/000000/ffffff?text=KV-CLOUD",
        RAIN : "https://via.placeholder.com/800x1000/000000/ffffff?text=KV-RAIN",
    },
    "T7" : { //뉴
        HOT : "https://via.placeholder.com/800x1000/000000/ffffff?text=NW-HOT",
        CLOUD : "https://via.placeholder.com/800x1000/000000/ffffff?text=NW-CLOUD",
        RAIN : "https://via.placeholder.com/800x1000/000000/ffffff?text=NW-RAIN",
    },
};







/* API URL */
const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/';
const NOW_FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

/* WMO 기상 해석코드 (weather code) */
const WEATHER_CODE = {
    WEATHER_CODE_0 : "맑은 하늘",
    WEATHER_CODE_1 : "대체로 맑음",
    WEATHER_CODE_2 : "부분적으로 흐림",
    WEATHER_CODE_3 : "흐림",
    WEATHER_CODE_45 : "안개",
    WEATHER_CODE_48 : "안개",

    WEATHER_CODE_51 : "약한 비",
    WEATHER_CODE_53 : "비",
    WEATHER_CODE_55 : "강한 비",

    WEATHER_CODE_56 : "약한 비",
    WEATHER_CODE_57 : "강한 비",

    WEATHER_CODE_61 : "약한 비",
    WEATHER_CODE_63 : "비",
    WEATHER_CODE_65 : "강한 비",

    WEATHER_CODE_66 : "약한 눈비",
    WEATHER_CODE_67 : "강한 눈비",
    WEATHER_CODE_71 : "약한 눈",
    WEATHER_CODE_73 : "눈",
    WEATHER_CODE_75 : "강한 눈",

    WEATHER_CODE_77 : "",
    WEATHER_CODE_80 : "약한 소나기",
    WEATHER_CODE_81 : "소나기",
    WEATHER_CODE_82 : "강한 소나기",
    WEATHER_CODE_85 : "눈",
    WEATHER_CODE_86 : "강한 눈",
};

export {
    IMG_URL,
    NOMINATIM_BASE_URL,
    NOW_FORECAST_URL,
    WEATHER_CODE,
}