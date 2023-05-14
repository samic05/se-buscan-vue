<template>
  <div class="badge">
    <button class="button"><i class="gg-coffee"></i>Dona Un Cafe!</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/coffee.css");
.badge {
  position: fixed;
  left: 85%;
  bottom: 5%;
}
.button {
  border-color: #ff9800;
  color: orange;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  align-items: center;
  border: 2px solid #ff9800;
  background-color: white;
}
.button:hover {
  background: #ff9800;
  color: white;
}
.gg-coffee {
  margin: 1%;
}
</style>
