<template>
  <div class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #ffffff;
  padding: 8px,10px
  background-color:rgba(0, 0,0,.75)
}
</style>
