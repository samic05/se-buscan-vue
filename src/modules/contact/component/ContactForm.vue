<template>
  <div class="container">
    <form>
      <label for="fname">Nombre</label>
      <input type="text" id="fname" name="nombre" required />

      <label for="lname">Email</label>
      <input type="email" id="lname" name="email" required />

      <label for="subject">Mensaje</label>
      <textarea
        required
        id="subject"
        name="subject"
        style="height: 200px"
      ></textarea>
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
input[type="email"],
s select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  border: none;
  background-color: #f7f7f7;
  font-family: "Poppins";
  font-style: normal;
}

/* Style the submit button with a specific background color etc */
input[type="submit"] {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 13px 246px;
  gap: 10px;
  cursor: pointer;
  background: #dc7000;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  border: none;
  width: 100%;
  justify-content: center;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: #f7f7f7;
  color: #dc7000;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  padding: 20px;
}
label {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #dc7000;
}
</style>
