<template>
  <div>
    <!-- <div class="spacer"></div> -->
    <img src="../assets/header.png" alt="" class="slide0" />
    <img src="../assets/header1.png" alt="" class="slide1" />
    <img src="../assets/header2.png" alt="" class="slide2" />
    <img src="../assets/header3.png" alt="" class="slide3" />
    <div class="header" :class="{ isfixtop: isfix }">
      <img src="../assets/logo.png" alt="" id="logo" />
      <nav class="menubar">
        <ul class="inner">
          <li>
            <a href="index.html">HOME<span>ホーム</span></a>
          </li>
          <li>
            <a href="about.html">ABOUT<span>SideRiverについて</span></a>
          </li>
          <li>
            <a href="javascript:void(0)" class="cursor-default"
              >WORKS<span>作品・実績</span></a
            >
          </li>
          <li>
            <a href="recruit.html">BOOKS<span>読んだ本のまとめ</span></a>
          </li>
          <li>
            <a href="contact.html">CONTACT<span>お問い合わせ</span></a>
          </li>
        </ul>
        <!-- <a href="about.html">
          ABOUT
          <span>SideRiverについて</span>
        </a>
        <a href="about.html">
          WORKS
          <span>作品・活動</span>
        </a>
        <a href="recruit.html">
          BOOKS
          <span>読んだ本のまとめ</span>
        </a>
        <a href="contact.html">
          CONTACT
          <span>お問い合わせ</span>
        </a> -->
      </nav>
    </div>
    <div class="spacer2"></div>
  </div>
</template>
<script>
export default {
  name: 'Header2',
  data() {
    return {
      isfix: false,
      lastUpdated: Date.now(),
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', () => {
      console.log('scroll', window.pageYOffset)
    })
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // 現在時刻から100秒以内にisfixがfalseからtrueに切り替わっていた場合(=チカチカしていた場合)無視する
      if (Date.now() - this.lastUpdated < 100) return
      const cr = document.querySelector('.header').getBoundingClientRect()
      console.log(cr.top)
      this.isfix = cr.top <= 0
    },
  },
  // watchはdataを監視して、変更があったときに対応する関数が呼ばれる
  watch: {
    // 第一引数は新しい値、第2引数は古い値
    isfix(val) {
      if (val) {
        // isfixがfalseからtrueになったときに、lastUpdateに現在時刻を入れる
        this.lastUpdated = Date.now()
      }
    },
  },
}
</script>

<style scoped>
.spacer2 {
  width: 100%;
  height: 1000px;
  background: blue;
}

.header {
  background: black;
  width: 100%;
  height: 105px;
  position: sticky;
  transition: all 0.2s;
}
.isfixtop {
  top: 0;
  height: 64px;
  background: red;
}

/*リンク（全般）設定
---------------------------------------------------------------------------*/
a {
  color: #999; /*リンクテキストの色*/
  transition: 0.8s; /*マウスオン時の移り変わるまでの時間設定。0.2秒。*/
}
a:hover {
  color: #70b0eb; /*マウスオン時の文字色*/
  text-decoration: none; /*マウスオン時に下線を消す設定。残したいならこの１行削除。*/
}
/*inner
---------------------------------------------------------------------------*/
.inner {
  max-width: 1400px; /*サイトの最大幅*/
  margin: 0 auto;
  padding-left: 2%;
  padding-right: 2%;
}
/*ロゴ画像*/
.header #logo {
  width: 200px; /*画像幅*/
  display: none; /* スライドショーの邪魔なので非表示に */
}
/*メインメニューのブロック
---------------------------------------------------------------------------*/
/*メニューブロック*/
.menubar {
  position: relative;
  z-index: 10;
  text-align: center; /*文字を中央に*/
  background: black; /*背景色*/
  font-family: 'Questrial', sans-serif; /*冒頭で読み込んだGoogle Fontsを適用する指定*/
}
/*メニュー１個あたりの設定*/
.menubar ul li {
  float: left; /*左に回り込み*/
  width: 20%; /*幅。今回は５個なので、100÷5=20。*/
  font-size: 20px; /*文字サイズ*/
}
.menubar ul li a {
  text-decoration: none;
  display: block;
  height: 85px; /*メニューブロックの高さ。ここの「85」と、下の行の「20」を合計した「105」の数字と、上の「#menubar」の「height」および下のfixmenu設定に２箇所ある「margin-top」の数字を合わせて下さい。*/
  padding-top: 20px; /*メニューブロックの高さプラス、上に空ける余白。メニューテキストの上下の配置バランスをここで調整して下さい。※変更の際は、上の行の注意書きもしっかり読んで下さい。*/
  float: left; /*左に回り込み*/
  width: 20%; /*幅。今回は５個なので、100÷5=20。*/
  font-size: 20px; /*文字サイズ*/
}
/*飾り文字*/
.menubar ul li span {
  display: block;
  font-size: 10px; /*文字サイズ*/
  color: #999; /*文字色*/
  letter-spacing: 0.2em; /*文字間隔を少し広くとる設定*/
}
/*スマホ用メニューを表示させない*/
#menubar-s,
#menubar-s2 {
  display: none;
}

/*３本バーアイコンを表示させない*/
#menubar_hdr {
  display: none;
}
/* .isfixtop .menubar a {
  line-height: 60px;
} */
</style>

<style scoped>
/*CSSスライドショー設定
---------------------------------------------------------------------------*/
img {
  border: none;
  max-width: 100%;
  height: 400px;
  vertical-align: middle;
}
/*１枚目*/
@keyframes slide1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  35% {
    opacity: 1;
  }
  45% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
/*２枚目*/
@keyframes slide2 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
/*３枚目*/
@keyframes slide3 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

/*mainimg
---------------------------------------------------------------------------*/
#mainimg {
  clear: left;
  width: 100%;
  position: relative;
}
.slide1,
.slide2,
.slide3 {
  animation-duration: 15s; /*アニメーションを実行する時間*/
  animation-iteration-count: infinite;
  position: absolute;
  left: 0px;
  /* top: 0px; */
  width: 100%;
  height: auto;
  animation-fill-mode: both; /*アニメーションの待機中は最初のキーフレームを維持、終了後は最後のキーフレームを維持。*/
  animation-delay: 2s; /*出現するタイミング（秒後）*/
}
.slide0 {
  position: relative;
  width: 100%;
  height: auto;
  /* z-index: -1; */
}
.slide1 {
  animation-name: slide1;
}
.slide2 {
  animation-name: slide2;
}
.slide3 {
  animation-name: slide3;
}
</style>
