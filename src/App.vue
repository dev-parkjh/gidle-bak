<template>
  <Main/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Main from './components/Main.vue';
import store from "@/store";

@Options({
  components: {
    Main,
  },
  store
})

export default class App extends Vue {
}
</script>

<style>
</style>