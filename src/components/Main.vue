<template>
  <div class="main">
    <Nav/>
    <Contents/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nav from './Nav.vue';
import Contents from './Contents.vue';

@Options({
  components: {
    Nav,
    Contents,
  },
  props: {},
})

export default class Main extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/style.css';
</style>
