<template>
  <header class="header">
    <div class="logo">📚 Educonnect</div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <a href="#">About</a>
    </nav>
   </header>
</template>

<script setup>

</script>

<style scoped>
.header {
 position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: #221358;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  gap:950px;
  width: 97%;
  /* margin-left:-208px;
  margin-top:-440px; */
  top:0;
  left:0;
  right:0
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-left:-70px;
}

.nav a {
  margin-left: 30px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  gap:100px;
  font-size: 15px;
}

.nav a:hover {
  text-decoration: underline;
}

</style>
