<template>
  <img src="../assets/header.png" alt="" class="slide0" />
  <img src="../assets/header1.png" alt="" class="slide1" />
  <img src="../assets/header2.png" alt="" class="slide2" />
  <img src="../assets/header3.png" alt="" class="slide3" />
  <div class="header" :class="{ isfixtop: isfix }">
    <nav class="menubar">
      <img src="../assets/logo.png" alt="" id="logo" />
      <a @click="homeclick" :class="{ selectcolor: home }">
        HOME
        <!-- <span>ホーム</span> -->
      </a>
      <a @click="aboutclick" :class="{ selectcolor: about }">
        ABOUT
        <!-- <span>SideRiverについて</span> -->
      </a>
      <a @click="worksclick" :class="{ selectcolor: works }">
        WORKS
        <!-- <span>作品・実績</span> -->
      </a>
      <a @click="booksclick" :class="{ selectcolor: books }">
        BOOKS
        <!-- <span>読んだ本のまとめ</span> -->
      </a>
      <a @click="contactclick" :class="{ selectcolor: contact }">
        CONTACT
        <!-- <span>お問い合わせ</span> -->
      </a>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isfix: false,
      lastUpdated: Date.now(),
      header: true,
      home: true,
      about: false,
      works: false,
      books: false,
      contact: false,
    }
  },
  emits: ['check'],
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', () => {
      // console.log('scroll', window.pageYOffset)
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
      // console.log(cr.top)
      this.isfix = cr.top <= 0
    },
    allfalse() {
      this.home = false
      this.about = false
      this.works = false
      this.books = false
      this.contact = false
    },
    send() {
      this.$emit(
        'check',
        this.home,
        this.about,
        this.works,
        this.books,
        this.contact
      )
      // console.log(this.home, this.about, this.works, this.books, this.contact)
    },
    homeclick() {
      this.allfalse()
      this.home = true
      this.send()
    },
    aboutclick() {
      this.allfalse()
      this.about = true
      this.send()
    },
    worksclick() {
      this.allfalse()
      this.works = true
      this.send()
    },
    booksclick() {
      this.allfalse()
      this.books = true
      this.send()
    },
    contactclick() {
      this.allfalse()
      this.contact = true
      this.send()
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
/*リンク（全般）設定---------------------------------------------------------------------------*/
a {
  color: rgb(199, 199, 199); /*リンクテキストの色*/
  transition: 0.2s; /*マウスオン時の移り変わるまでの時間設定。0.2秒。*/
}
a:hover {
  color: #42d7eb; /*マウスオン時の文字色*/
  text-decoration: none; /*マウスオン時に下線を消す設定。残したいならこの１行削除。*/
  cursor: pointer;
}
.selectcolor {
  color: #42d7eb;
}
.header {
  background: rgb(0, 0, 0, 0.99);
  width: 100%;
  height: 105px;
  position: sticky;
  z-index: 1000;
  transition: all 0.5s;
}
.isfixtop {
  top: 0;
  height: 64px;
}
.spacer2 {
  width: 100%;
  height: 3000px;
  background: white;
}

/*ロゴ画像*/
.header #logo {
  width: 200px; /*画像幅*/
  height: auto;
  display: none;
}
.menubar a {
  text-decoration: none;
  display: block;
  height: 105px; /*メニューブロックの高さ。ここの「85」と、下の行の「20」を合計した「105」の数字と、上の「#menubar」の「height」および下のfixmenu設定に２箇所ある「margin-top」の数字を合わせて下さい。*/
  float: left; /*左に回り込み*/
  width: 20%; /*幅。今回は５個なので、100÷5=20。*/
  font-size: 20px; /*文字サイズ*/
  line-height: 105px;
}
.isfixtop .menubar a {
  height: 64px;
  font-size: 15px; /*文字サイズ*/
  line-height: 64px;
}
/*飾り文字*/
/* .menubar span {
  display: block;
  font-size: 10px;
  color: #999;
  letter-spacing: 0.2em;
} */
/*スマホ用メニューを表示させない*/
#menubar-s,
#menubar-s2 {
  display: none;
}
/*３本バーアイコンを表示させない*/
#menubar_hdr {
  display: none;
}
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
