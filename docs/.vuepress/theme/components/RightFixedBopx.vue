<template>
    <div class="container">
        <div class="cube">
            <div class="front">
                <a target="_blank" rel="nofollow" title="公众号：vm-321, 点击扫码关注">
                    公众号：vm-321 <br>点击扫码关注
                </a>
            </div>
            <div class="back">
                <a  target="_blank" rel="nofollow" title="公众号：vm-321, 点击扫码关注">
                    公众号：vm-321 <br>点击扫码关注
                </a>
            </div>
            <div class="right">
                <a  target="_blank" rel="nofollow" title="公众号：vm-321, 点击扫码关注">
                    公众号：vm-321 <br>点击扫码关注
                </a>
            </div>
            <div class="left">
                <a  target="_blank" rel="nofollow" title="公众号：vm-321, 点击扫码关注">
                    公众号：vm-321 <br>点击扫码关注
                </a>
            </div>
            <div class="top">
                <a target="_blank" rel="nofollow" title="公众号：vm-321, 点击扫码关注">
                    公众号：vm-321 <br>点击扫码关注
                </a>
                </div>
            <div class="bottom">
                <a  target="_blank" rel="nofollow" title="公众号：vm-321, 点击扫码关注">
                    公众号：vm-321 <br>点击扫码关注
                </a>
            </div>
        </div>

        <div class="block fixed-box">
            <!-- 翻转效果后期再加 -->
            <!-- <div class="block-in"> -->
                <img src="./../../public/personalCard.jpg" />
                <p>分享一些编程过程中的经验、感悟</p>
                <p class="follow">扫码关注我吧</p>
            <!-- </div> -->
       </div>
    </div>
</template>
<script data-ad-client="ca-pub-3533711312489827" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  export default {
    data() {
        return {
            flagQrcode: false
        };
    },
    methods: {
        change() {
            // 点击显示二维码
            this.flagQrcode = !this.flagQrcode;
        },
    }
};
</script>
<style lang="stylus">
    .container {
        cursor: pointer;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        position: fixed;
        z-index: 999;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        right: 0px;
        top: 45%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        .cube {
            width: 100%;
            height: 100%;
            position: absolute;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transform: rotateX(-15deg) rotateY(-20deg) translateZ(-100px);
            transform: rotateX(-15deg) rotateY(-20deg) translateZ(-100px);
            -webkit-transform-origin: center center -100px;
            transform-origin: center center -100px;
            -webkit-animation: around 5s cubic-bezier(0.94, -0.6, 0.45, 1.31) infinite;
            animation: around 5s cubic-bezier(0.94, -0.6, 0.45, 1.31) infinite;

            .front {
                -webkit-transform: rotateY(0deg) translateZ(60px);
                transform: rotateY(0deg) translateZ(60px);
                background-color: rgba(44, 62, 80, 0.7);
                border: 2px solid rgba(44, 62, 80, 0.7);
            }

            .back {
                -webkit-transform: rotateX(180deg) translateZ(60px);
                transform: rotateX(180deg) translateZ(60px);
                background-color: rgba(234, 236, 239, 0.7);
                border: 2px solid rgba(234, 236, 239, 0.7);
            }

            .right {
                -webkit-transform: rotateY(90deg) translateZ(60px);
                transform: rotateY(90deg) translateZ(60px);
                background-color: rgba(170, 170, 170, 0.7);
                border: 2px solid rgba(170, 170, 170, 0.7);
            }

            .left {
                -webkit-transform: rotateY(-90deg) translateZ(60px);
                transform: rotateY(-90deg) translateZ(60px);
                background-color: rgba(207, 212, 219, 0.7);
                border: 2px solid rgba(207, 212, 219, 0.7);
            }

            .top {
                -webkit-transform: rotateX(90deg) translateZ(60px);
                transform: rotateX(90deg) translateZ(60px);
                background-color: rgba(62,175,124, 0.7);
                border: 2px solid rgba(62,175,124, 0.7);
            }

            .bottom {
                -webkit-transform: rotateX(-90deg) translateZ(60px);
                transform: rotateX(-90deg) translateZ(60px);
                background-color: rgba(78, 110, 142, 0.7);
                border: 2px solid rgba(78, 110, 142, 0.7);
            }


        }
        
        @keyframes around {
            100% {
                    -webkit-transform: rotateX(-15deg) rotateY(-380deg) translateZ(-100px);
                    transform: rotateX(-15deg) rotateY(-380deg) translateZ(-100px);
            }
        }

        .cube div {
            width: 120px;
            height: 120px;
            display: block;
            margin: 0;
            position: absolute;
        }
        .cube div a {
            color: white;
            width 95%;
            font-size: 13px;
            text-decoration: none;
            text-align: center;
            position: fixed;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        &:hover {
            .fixed-box {
                display: block;
            }
        }
    }

    .block {
        right: 0;
        position: fixed;
        top: 20%;
        width: 16rem;
        cursor: pointer;
        /* 3D变形 */
        transform-style: preserve-3d;
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -ms-perspective: 1000;
        perspective: 1000;
        
        &-in {
            height: 100%;
            transition: 0.8s;
        }
        
        &:hover .block-in {
            transform: rotateY(180deg);
        }
    }

    .fixed-box {
        display: none;
        background: #fff;
        position: fixed;
        top: 0%;
        z-index: 999;
        right: 0;
        width: 16rem;
        box-sizing: border-box;
        height: 300px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        border-radius: 6px;
        padding-top: 1rem;

        img {
            width: 11rem;
            margin: 0 auto;
            display: block;
            -webkit-transition: 0.2s ease;
            -moz-transition: 0.2s ease;
            -ms-transition: 0.2s ease;
            transition: 0.2s ease;

            &:hover {
                transform: scale(1.1);
            }
        }

        p {
            text-align: center;
        }

        .follow {
            color: #fff;
            width: 150px;
            height: 40px;
            display: block;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
            margin: 0px auto 0px;
            background: #000;
            border-radius: 20px;
            -webkit-transition: 0.2s ease;
            -moz-transition: 0.2s ease;
            -ms-transition: 0.2s ease;
            transition: 0.2s ease;

            &:hover {
                background: #333;
            }
        }
    }

</style>