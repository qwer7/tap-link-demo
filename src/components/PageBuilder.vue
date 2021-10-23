<template lang="pug">
    div.flex-row
      draggable.block_list(:list="page" tag="ul" handle=".handle")
        li.block(v-for="(block, index) in page" :key="index")
          component.block__element(:is="block.type" :block="block" )
          .block__control
            a.handle(href="#" )
              fa(icon="bars")
            a.block__edit(href="#" @click="$emit('choise', block)")
              fa(icon="pencil-alt")
      a.add_block(href="#" @click="$emit('add')")
        fa(icon="plus")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import blockComponents from './blocks';
import type { IPageBlock } from '@/services/types';

@Component({
  components: {
    ...blockComponents,
    draggable,
  },
})
export default class PageBuilder extends Vue {
  @Prop() private page!: IPageBlock[];
}
</script>

<style scoped lang="scss">
.block_list {
  width: 100%;
  .block {
    display: flex;
    border-radius: 1rem;
    border: 1px solid $borderColor;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    max-height: 30vh;
    &__element {
      width: calc(100% - 1.6rem);
      overflow: hidden;
    }
    &__control {
      a {
        font-size: 1.5rem;
      }
      .handle {
        cursor: all-scroll;
      }
    }
  }
}

.add_block {
  display: block;
  width: 50%;
  padding: 1rem 0;
  @include hover-link-success;
}
</style>
