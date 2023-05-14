<template>
  <div id="channels" class="row">
    <div class="column left"><ContactInformation /></div>
    <div class="column"><ContactForm /></div>
  </div>
  <hr class="separator" />
</template>

<script>
import ContactForm from "../component/ContactForm.vue";
import ContactInformation from "../component/ContactInformation.vue";

export default {
  components: { ContactForm, ContactInformation },
};
</script>

<style scoped>
.separator {
  width: 80%;
  height: 0px;
  left: 148px;
  border: 1px solid #dc7000;
}
.column {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 30px 10% 0 0;
}
.left {
  padding: 30px 0 0 10%;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
