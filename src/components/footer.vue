<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left Section -->
      <div class="footer-section">
        <h2>Educonnect</h2>
        <div class="social-icons">
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>

      <!-- Center Section -->
      <div class="footer-section">
        <h3>Location</h3>
        <p>123 Demo Street<br />New York, NY 12345</p>
      </div>

      <!-- Right Section -->
      <div class="footer-section">
        <h3>Contact</h3>
        <p>email@example.com<br />(555) 555-5555</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed for this static footer component
</script>

<style scoped>
.footer {
    position: absolute;
  background-color: #1d0b53;
  color: white;
  padding: 40px 60px;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 2700px;
  width: 92%;
  margin-left: -180px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-section h2,
.footer-section h3 {
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-section p {
  margin: 0;
  line-height: 1.6;
  font-size: 16px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icons a {
  color: white;
  background-color: #0077b6;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.3s;
}

.social-icons a:hover {
  background-color: #023e8a;
}
</style>
