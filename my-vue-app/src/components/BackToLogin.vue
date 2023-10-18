<template>
    <button @click="BackToLogin" class="logout-button">Back to login</button>
  </template>
  
  <script>
  export default {
    methods: {
      BackToLogin() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .logout-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>