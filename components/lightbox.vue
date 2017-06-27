<template lang="pug">
  div.lightbox-wrap(v-if="show" @click="hidePop")
    img(:src="src")
</template>


<script>
  export default {
    props: ['src', 'show', 'hide'],
    methods: {
      hidePop: function () {
        this.hide()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lightbox-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
