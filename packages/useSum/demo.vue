<template>
  <div>
    <input v-model="val1" type="number"> &nbsp;
    <input v-model="val2" type="number">
    <br><br>
    result: {{ sum }}
  </div>
</template>

<script setup lang="ts">
import { useSum } from 'starter-ts'
import { computed, ref } from 'vue'

const val1 = ref(1)
const val2 = ref(1)

const sum = computed(() => useSum(val1.value, val2.value))
</script>

<style scoped>
input {
  box-shadow: 0 0 5px 1px #eee;
}
</style>
