<template>
<div>
    <div id="HeaderView">
        <div class="cityInfo">
            <p>OOTBZ</p>
        </div>
        <div class="btnClose" @click="btnClose"><i class="fa-solid fa-xmark fa-xl"></i></div>
    </div>
    <div id="OOTDView">
        <!-- <img src="https://placehold.co/1000x1200" alt=""> -->
        <!-- <img src="https://pokemonkorea.co.kr/img/sub/img_compay_info.png" alt=""> -->
        <img src="https://pokemoncard.co.kr/info/images/renew/1_0-1.png" alt="">
        <div id="SpecialView">
            <p class="blinking">오늘의 필수템 ☂️</p>
        </div>
    </div>
    <div id="LuckyView">
        <div class="infoView" @click="toggleClass1" :class="{ flipped: isFlipped1 }">
            <div class="front">🎨 행운의 컬러 🎨</div>
            <div class="back">빨강</div>
        </div>
        <div class="infoView" @click="toggleClass2" :class="{ flipped: isFlipped2 }">
            <div class="front">🍀 행운의 아이템 🍀</div>
            <div class="back">목도리</div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            isFlipped1: false,
            isFlipped2: false,
        }
    },
    components: {
    },
    methods: {
        btnClose: function () {
            this.$router.back();
        },
        toggleClass1: function () {
            this.isFlipped1 = !this.isFlipped1;
        },
        toggleClass2: function () {
            this.isFlipped2 = !this.isFlipped2;
        }

    }
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 768px;
    }
    
    #HeaderView {
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10%;
    
        .cityInfo {
            p {
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
    }
    
    #OOTDView {
        width: 100%;
        height: 60vh;
        position: fixed;
        top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    
        img {
            max-width: 100%;
            max-height: 75%;
        }
    }
    
    // 이벤트 메세지
    #SpecialView {
        width: 100%;
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: center;
    
        p {
            font-size: 1rem;
            font-weight: 600;
            color: #130e50;
        }
    }
    
    //행운 카드
    #LuckyView {
        width: 100%;
        height: 15vh;
        position: fixed;
        top: 70vh;
        display: flex;
    
        .infoView {
            flex: 1;
            box-sizing: border-box;
            border-radius: 15px;
            margin: 0 5%;
            background-color: #c0deff79;
            perspective: 1000px;
            transition: transform 0.6s;
            transform-style: preserve-3d;
    
            &.flipped {
                transform: rotateY(180deg);
            }
    
            .front,
            .back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
            }
    
            .front {

            }
    
            .back {
                transform: rotateY(180deg);
            }
    
        }

      .infoView:nth-child(2) {
        margin-left: 0;
      }

}
</style>