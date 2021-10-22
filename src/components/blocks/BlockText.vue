<template lang="pug">
    div.flex
      p(v-if="!edit") {{block.data}}
      textarea(v-if="edit" v-model="block.data" ref="editor")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { IPageBlock } from '@/services/types';

@Component
export default class BlockText extends Vue {
  @Prop() private block!: IPageBlock;

  @Prop() private edit!: boolean;

  mounted() : void {
    const editor : HTMLElement = this?.$refs.editor as HTMLElement;
    if (editor) {
      editor.focus();
    }
  }
}
</script>

<style scoped lang="scss">
p {
  text-align: justify;
  padding: 0.3rem 0;
}
textarea {
  border: 1px solid $borderColor;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  resize: none;
  width: 100%;
  height: 30vh;
}
</style>
