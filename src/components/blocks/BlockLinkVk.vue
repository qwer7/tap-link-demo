<template lang="pug">
    div
      a(v-if="!edit" :href="href" target="_blank")
        fa.icon(icon="comment-dots")
        span {{urlText}}
      div.form(v-if="edit")
        input( v-model.trim="url" placeholder='login in vk')
        input( v-model.trim="link.name" placeholder='Your name')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { IPageBlock } from '@/services/types';
import { useNamedLink } from '../../composition/namedLink';

@Component({
  setup(props) {
    const block = props.block as IPageBlock;

    return {
      ...useNamedLink(block, (url) => url),
    };
  },
})
export default class BlockLinkVk extends Vue {
  @Prop() private block!: IPageBlock;

  @Prop() private edit!: boolean;
}
</script>

<style scoped lang="scss">
@include block-link-base
</style>
