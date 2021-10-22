<template lang="pug">
  div
    component(:is="block.type" :block="block" v-for="(block, index) in page" :key="index")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IPageBlock } from '@/services/types';
import blockComponents from './blocks';

@Component({
  components: {
    ...blockComponents,
  },
})
export default class PageViewer extends Vue {
  @Prop() private page!: IPageBlock[];
}
</script>

<style scoped lang="scss"></style>
