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
import { computed } from '@vue/composition-api';
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { IPageBlock, IUrl } from '@/services/types';
import { useNamedLink } from '../../composition/namedLink';

@Component({
  setup(props) {
    const block = props.block as IPageBlock;
    const link: IUrl = block.data as IUrl;
    // link.url = link.url.indexOf('vk.me/') === -1 ? 'ehhh' : 'ddd';
    // todo change to regexp (vk.me / vk.com)
    const prefixVK = (url:string) => url;
    const href = computed(() => link.prefix + link.url);

    return {
      href,
      ...useNamedLink(block, prefixVK),
    };
  },
})
export default class BlockLinkVk extends Vue {
  @Prop() private block!: IPageBlock;

  @Prop() private edit!: boolean;
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
