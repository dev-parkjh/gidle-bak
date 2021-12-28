<template>
  <h2>시스템 정보</h2>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {}
})

export default class Info extends Vue {
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-weight: normal;
  margin-left: 12px;
}
</style>
