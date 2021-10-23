<template lang="pug">
    div
      a(v-if="!edit" :href="link.url" target="_blank")
        fa.icon(icon="external-link-alt")
        span {{link.name || link.url}}
      div.form(v-if="edit")
        input( v-model="link.url" placeholder='url')
        input( v-model="link.name" placeholder='label for url')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { IPageBlock, IUrl } from '@/services/types';

@Component
export default class BlockUrl extends Vue {
  @Prop() private block!: IPageBlock;

  @Prop() private edit!: boolean;

  link! : IUrl

  created() :void {
    this.link = this.block.data as IUrl;
  }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    border: 1px solid $borderColor;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 80%;
    margin-bottom: 1rem;
  }
}
a {
  display: inline-block;
  padding: 0.5rem;
  width: 80%;
  @include hover-link-success;
}
.icon {
  margin-right: 1rem;
}
</style>
