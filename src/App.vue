<template>
  <Header />
</template>

<script>
// import Header2 from '@/components/Header2.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    // Header,
    Header,
  },
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #000000
  background-color: #FFFFFF
</style>

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

<style>
/*全体の設定
---------------------------------------------------------------------------*/
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
