<template>
  <div class="TopPage">
    <div class="gradientCircle abs"></div>
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
  position: fixed;
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
</style>
