<template>
  <div class="main">
    <h2>main: {{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="counterStore.changeCounterAction(999)">修改counter</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()
//可以直接在@click后面调用 store 的方法
// function changeCounter() {
//   counterStore.changeCounterAction(999)
// }
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
