<template>
    <div class="background">
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

export default {
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
  .background {
    background-image: url('../assets/background.jpeg');
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    width: 100%;
  }
  
  .container {
    width: 300px;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #3056b6;
    justify-content: center;
    align-items: center;
  }
  
  .form-group {
    margin: 20px 0;
    justify-content: center;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 90%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    align-items: center;
  }
  
  button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
  }
  </style>