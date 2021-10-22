<template lang="pug">
  div
    p.h Выберите добавляемый блок
    ul
      li(v-for="(block, index) in list" :key="index" @click="$emit('choise', block.type)")
        fa.icon(:icon="block.icon")
        span {{block.name}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BlocksDescription } from '@/services/types';
import blockComponents from './blocks';

@Component({
  components: {
    ...blockComponents,
  },
})
export default class PageSelector extends Vue {
  list: unknown = BlocksDescription;
}
</script>

<style scoped lang="scss">
.h {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
ul {
  text-align: left;
  font-size: 1.3rem;
  li {
    padding: 0.6rem 0.3rem;
    border-radius: 0.5rem;
    border: 1px solid $borderColor;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .icon {
    margin: 0 1rem;
  }
}
</style>
