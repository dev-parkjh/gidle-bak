<template>
  <h2>사용자 목록</h2>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {}
})

export default class User extends Vue {
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-weight: normal;
  margin-left: 12px;
}
</style>
