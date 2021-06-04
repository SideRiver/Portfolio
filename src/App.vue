<template>
  <transition name="message" tag="div">
    <TopPage v-if="toppage" @dblclick="toppagecheck" />
    <div v-else>
      <MyHeader v-show="header" @check="checkheader" />
      <Home v-show="home" />
      <About v-show="about" />
      <Works v-show="works" />
      <Books v-show="books" />
      <Contact v-show="contact" />
    </div>
  </transition>
</template>

<script>
import TopPage from '@/components/TopPage.vue'
import MyHeader from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Books from '@/components/Books.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: {
    TopPage,
    MyHeader,
    Home,
    About,
    Works,
    Books,
    Contact,
  },
  data() {
    return {
      toppage: true,
      header: true,
      home: true,
      about: false,
      works: false,
      books: false,
      contact: false,
    }
  },
  methods: {
    checkheader(...args) {
      for (var i = 0; i < args.length; i++) {
        if (i == 0) {
          this.home = args[i]
        }
        if (i == 1) {
          this.about = args[i]
        }
        if (i == 2) {
          this.works = args[i]
        }
        if (i == 3) {
          this.books = args[i]
        }
        if (i == 4) {
          this.contact = args[i]
        }
      }
    },
    toppagecheck() {
      this.toppage = false
    },
  },
}
</script>

<style>
/* リセットcss */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #000000
  background-color: #FFFFFF
</style>

<style lang="sass" scoped>
// トランジション関係
.message
  &-enter
    &-from
      opacity: 0
      // transform: translateX(-5vw)
    &-to
      opacity: 1
      // transform: translateX(0)
    &-active
      // opacity: 0
      transition: all 4500ms ease

  &-leave
    &-from
      opacity: 1
    &-to
      opacity: 0
      // transform: translateX(10vw)
    &-active
      transition: all 1000ms ease
</style>
<style>
/*全体の設定
---------------------------------------------------------------------------*/
::selection {
  background: #000000;
  color: #ffffff;
}

/* for Firefox */
::-moz-selection {
  background: #000000;
  color: #ffffff;
}

body {
  margin: 0px;
  padding: 0px;
  color: rgb(255, 255, 255); /*全体の文字色*/
  font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ',
    Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; /*フォント種類*/
  font-size: 16px; /*文字サイズ*/
  line-height: 2; /*行間*/
  background: #e7eff6; /*背景色*/
  -webkit-text-size-adjust: none;
}
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
dl,
dt,
dd,
form,
figure,
form {
  margin: 0px;
  padding: 0px;
  font-size: 100%;
  font-weight: normal;
}
html {
  background-color: white;
}
ul {
  list-style-type: none;
}
ol {
  padding-left: 40px;
  padding-bottom: 15px;
}
img {
  border: none;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  /* 追記 */
  /* pointer-events: none; */
}
table {
  border-collapse: collapse;
  font-size: 100%;
  border-spacing: 0;
}
video {
  max-width: 100%;
}
iframe {
  width: 100%;
}
</style>
