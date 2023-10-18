<template>
  <div class="page">
    <div class="container">
      <h2 class="title">Black and Scholes Calculator</h2>
      <form @submit.prevent="login" class="form-group">
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <router-link to="/signup" class="signup-button">Signup</router-link>
      </form>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      // Use this.email and this.password to access the form input values
      const email = this.email;
      const password = this.password;

      // Define the authorization header with Basic Authentication
      const headers = {
        email: `${email}`,
        password: `${password}`
      };
      
      axios.get('http://localhost:3000/users/token', { headers })
        .then((response) => {
          // Handle the response here, which may contain the token
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.$router.push('/projects');
        })
        .catch((error) => {
          // Handle any errors here
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error('Error:', error);
        });
    },
  },
};
</script>


<style scoped>
  /* Component-specific styles here */
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('../assets/background.jpeg') no-repeat center center fixed;
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
