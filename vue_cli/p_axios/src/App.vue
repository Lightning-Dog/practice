<template>
  <div></div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted(){
    let api = '/myApi/' + 'wd = 1'
    this.axios.get(api).then((response) => {
      console.log(response)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
