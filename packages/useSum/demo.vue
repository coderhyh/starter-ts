<template>
  <div>
    <input type="number" v-model="val1" /> &nbsp;
    <input type="number" v-model="val2" />
    <br /><br />
    result: {{ sum }}
  </div>
</template>

<script setup lang="ts">
import { useSum } from '.'
import { ref, computed } from 'vue'

const val1 = ref(1)
const val2 = ref(1)

const sum = computed(() => useSum(val1.value, val2.value))
</script>

<style scoped>
input {
  box-shadow: 0 0 5px 1px #eee;
}
</style>
