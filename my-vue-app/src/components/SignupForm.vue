<template>
    <div class="background">
      <BacktoLogin/>
        <div class="container">
        <h2>Signup</h2>
        <form @submit.prevent="signup">
            <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" v-model="email" required>
            </div>
            <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group">
            <button type="submit">Signup</button>
            </div>
        </form>
        </div>
    </div>
  </template>

<script>
import axios from 'axios';
import BacktoLogin from './BackToLogin.vue';

export default {
  components: {
    BacktoLogin
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      const headers = {
        'Content-Type': 'application/json',
      };

      axios
        .post('http://localhost:3000/users', userData, { headers: headers })
        .then(response => {
          console.log('Signup successful:', response.data);
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
};
</script>

  
<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  padding: 0;
}

.container {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #ff0000;
  margin-top: 10px;
}

.signup-button {
  text-align: center;
  text-decoration: none;
  color: #007bff;
  margin-top: 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
</style>