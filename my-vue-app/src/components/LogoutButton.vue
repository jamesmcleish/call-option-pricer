<template>
    <button @click="logout" class="logout-button">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('token');
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