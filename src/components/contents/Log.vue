<template>
  <h2>전송내역</h2>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {}
})

export default class Log extends Vue {
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-weight: normal;
  margin-left: 12px;
}
</style>
