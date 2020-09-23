<template>
  <div id="app">
    <div id="nav">
       <!-- Ligne a modif avec v-for -->
      <template v-for="(item, index) in items">
        <router-link :key="index" :to="item.path">
        {{item.title}}
        </router-link> |
      </template>
      
      <!-- -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> -->
    </div>
    <router-view/>
    
  </div>
</template>

<script>


export default {
    data(){
      return {
        items: [
          { path: '/', title: 'Home'},
          { path: '/about', title: 'About'},
          { path:'/login', title: 'Login'},
          { path: '/todo', title: 'Todo'}
        ]
      }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
li {
  list-style-type: none;
}
</style>
