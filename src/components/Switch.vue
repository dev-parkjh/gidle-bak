<template>
  <label class="switch">
    <input type="checkbox" @click="chkBoxOnclick">
    <span class="slider round"></span>
  </label>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {}
})

export default class Switch extends Vue {
  chkBoxOnclick(event: PointerEvent): void {
    if (event.target instanceof HTMLInputElement) {
      this.$emit('chkBoxOnclick', event.target.checked);
    }
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 18px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--switch-background-color);
  transition: 300ms;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 3px;
  background-color: var(--switch-slider-color);
  transition: 300ms;
}

input:checked + .slider {
  background-color: var(--switch-active-color);
}

input:focus {
  outline: none;
}

input:checked + .slider:before {
  transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>