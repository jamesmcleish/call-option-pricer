<template>
    <div class="background">
        <div class="container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
            <label for="username">Email:</label>
            <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group">
            <button type="submit">Login</button>
            </div>
        </form>
        </div>
    </div>
  </template>
  
  <style scoped>
  .background {
    background-image: url('../assets/background.jpeg');
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  
  .container {
    width: 300px;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #9d4444;
    justify-content: center;
    align-items: center;
  }
  
  .form-group {
    margin: 20px 0;
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