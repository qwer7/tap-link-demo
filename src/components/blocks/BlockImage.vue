<template lang="pug">
    div.flex
      img(:src="block.data" v-if="!edit")
      div.img_list(v-if="edit")
        p.loading(v-show="loading") Идет загрузка...
        img( :src="img" v-for="img in imgs"
              @click="onSelectImg(img)"
              :class="{ select: img===block.data }" )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { IPageBlock } from '@/services/types';
import api from '@/services/api';

@Component
export default class BlockImage extends Vue {
  @Prop() private block!: IPageBlock;

  @Prop() private edit!: boolean;

  imgs: string[] = [];

  async mounted(): Promise<void> {
    // eslint-disable-next-line no-useless-return
    if (!this.edit) return;

    this.imgs = await api.getImages();
  }

  get loading() : boolean {
    return !this.imgs.length;
  }

  onSelectImg(img:string): void {
    this.block.data = img;
  }
}
</script>

<style scoped lang="scss">
img {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  // max-height: 30vw;
}
.img_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: 30vh;
  width: 100%;

  img {
    width: 46%;
    max-height: 30vh;
    cursor: pointer;
    padding: 0.3rem;
    &.select {
      box-shadow: inset 0px 0px 0px 0.3rem $successColor, inset 0px 0px 0px 0.4rem $borderColor;
      transition: all 0.2s ease 0s;
    }
  }

  .loading {
    align-self: center;
    animation-duration: 0.8s;
    animation-name: fadePuls;
    // animation-timing-function: cubic-bezier(0.71, 0.55, 0.62, 1.57);
    animation-iteration-count: infinite;
  }

  @keyframes fadePuls {
    50% {
      opacity: 0.5;
    }
  }
}
</style>
