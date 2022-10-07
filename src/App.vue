<template>
  <div id="app">
    <h1 style="color: greenyellow; font-weight: 900;">Idris's Calculator</h1>
      <calculator></calculator>
  </div>
</template>

<script>
  import calculator from './calculator.vue';
export default {
  components:{
    calculator:calculator
  },
  name: 'app',
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
