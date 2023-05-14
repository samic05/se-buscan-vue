<template>
  <div class="newsletter">
    <div class="row">
      <div class="column-one">
        <h3>Suscribete a las noticias de Se Buscan</h3>
        <p>
          Subscribete para recibir información sobre nuevas desapariciones o de
          nuevas entradas en el blog.
        </p>
        <p>No te enviaremos mensajes de spam.</p>
      </div>
      <div class="column-two">
        <div class="input-container">
          <form @submit="registerEmail">
            <input
              type="email"
              required
              placeholder="Escribe tu correo eléctronico"
              v-model="email"
            />
            <input class="newsletter-button" type="submit" value="Continuar" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { email: null };
  },
  methods: {
    registerEmail(event) {
      event.preventDefault();
      console.log(this.email);
    },
  },
};
</script>

<style scoped>
.column-one {
  box-sizing: border-box;
  padding: 50px;
  float: left;
  width: 50%;
}

.column-two {
  box-sizing: border-box;
  float: left;
  width: 50%;
}
.input-container {
  margin: 90px 0px 0px 150px;
  position: relative;
  width: 50%;
}

.input-container input[type="email"] {
  margin: auto;
  display: block;
  margin-top: 90px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  padding-left: 30px;
  border: none;
}

.newsletter-button {
  background-color: #c88e68;
  color: white;
  text-decoration: none;
  border: 1px solid #c88e68;
  border-radius: 26px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  position: absolute;
  top: 0px;
  border-radius: 10px;
  right: 0px;
  z-index: 2;
  cursor: pointer;
  transform: translateX(2px);
  padding: 10px;
  margin: 5px -25px 0 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 13px;
}

.column-one h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: 30px;
}

.column-one p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row {
  background-color: #c88e68;
  color: white;
  margin: 100px;
  border-radius: 15px;
}
.newsletter {
  background-color: white;
}
</style>
