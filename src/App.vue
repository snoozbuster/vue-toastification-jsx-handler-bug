<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <button @click="openGoodToast">Click me for a toast with a working button</button>
    <button @click="openBadToast">Click me for a toast with a broken button</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getJsx() {
      return (
        <button onClick={() => alert('ok!')}>
          Click me!
        </button>
      )
    },
    openGoodToast() {
      const jsx = this.getJsx()
      this.$toast.success({ render: () => jsx })
    },
    openBadToast() {
      this.$toast.error(this.getJsx())
    },
  },
}
</script>

<style lang="scss">
@import "vue-toastification/src/scss/_variables";
@import "vue-toastification/src/scss/_toastContainer";
@import "vue-toastification/src/scss/_toast";
@import "vue-toastification/src/scss/_closeButton";
@import "vue-toastification/src/scss/_progressBar";
@import "vue-toastification/src/scss/_icon";
@import "vue-toastification/src/scss/animations/_bounce";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
