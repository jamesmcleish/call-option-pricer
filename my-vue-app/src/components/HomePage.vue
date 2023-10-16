<template>
  <div class="hello">
    <img alt="Vue logo" src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      Login to price derivatives!<br>
    </p>
    <router-link to="/login">
      <button>Login</button>
    </router-link>
    <br>
    <router-link to="/signup">
      <button>Signup</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
  },
  methods: {
    login() {
      null
    },
    signup(){
      null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
