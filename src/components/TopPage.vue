<template>
  <div class="TopPage">
    <p class="click abs">DoubleClick</p>
    <h1 class="abs">SideRiver's Website</h1>
    <div class="gradientCircle abs"></div>
    <img src="../assets/text.png" alt="" class="abs ixd" />
  </div>
</template>

<script>
export default {
  name: 'TopPage',
}
</script>

<style>
.TopPage {
  background-color: white;
  width: 100%;
  height: 100vh;
}
.abs {
  position: absolute;
}
.TopPage .ixd {
  width: 80vw;
  height: auto;
  right: 1vw;
  bottom: 0;
  /* 選択不可 */
  pointer-events: none;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
}
.TopPage h1 {
  top: 15vh;
  left: 0px;
  right: 0px;
  margin: auto;
  z-index: 10;
  font-size: 8vw;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 5px;
  /* 選択不可 */
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
}
.click {
  font-size: 3vh;
  top: 15px;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  animation: TextAnimation 3s linear 0s infinite alternate running;
  /* 選択不可 */
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
}
.gradientCircle {
  width: 95vw;
  height: 95vh;
  right: 0vw;
  bottom: 0vh;
  /* width: 100vw;
  height: 100vh;
  right: -5vw;
  bottom: -5vh; */
  border-radius: 130% 0 0 0;
  background: linear-gradient(
    135deg,
    #f3177e,
    #7923e2 33.3333%,
    #1a70f1 66.6666%,
    #00ffa4
  );
  background-size: 200% 200%;
  animation: AnimationName 8s linear 0s infinite alternate running;
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  /* 10% {
    background-position: 10% 50%;
  }
  20% {
    background-position: 20% 50%;
  }
  30% {
    background-position: 30% 50%;
  }
  40% {
    background-position: 40% 50%;
  }
  50% {
    background-position: 90% 100%;
  } */
  100% {
    background-position: 100% 50%;
  }
}

@keyframes TextAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
}
</style>
