<template lang="pug">
  div
    component(:is="block.type" :block="temp" :edit="true")
    .controlls
      a(href="#" @click="saveChanges")
        fa(icon="check")
      a(href="#" @click="discardChanges")
        fa(icon="ban")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import blockComponents from './blocks';
import type { IPageBlock } from '@/services/types';

@Component({
  components: {
    ...blockComponents,
  },
})
export default class PageViewer extends Vue {
  @Prop() private block!: IPageBlock;

  temp: IPageBlock | null = null;

  created(): void {
    this.temp = { ...this.block };
    console.log(this.temp);
  }

  saveChanges() : void {
    this.block.data = this.temp?.data || this.block.data;
    this.$emit('close');
  }

  discardChanges() : void {
    this.$emit('close');
  }
}
</script>

<style scoped lang="scss">
.controlls {
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 1rem;
  a {
    display: inline-block;
    border: 1px solid $borderColor;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
    min-width: 5rem;
  }
}
</style>
