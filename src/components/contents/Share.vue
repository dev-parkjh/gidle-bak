<template>
  <h2>공유된 항목</h2>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {}
})

export default class Share extends Vue {
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-weight: normal;
  margin-left: 12px;
}
</style>
