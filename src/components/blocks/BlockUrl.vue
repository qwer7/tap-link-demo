<template lang="pug">
    div
      a(v-if="!edit" :href="href" target="_blank")
        fa.icon(icon="external-link-alt")
        span {{urlText}}
      div.form(v-if="edit")
        input( v-model.trim="url" placeholder='url')
        input( v-model.trim="link.name" placeholder='label for url')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { IPageBlock } from '@/services/types';
import { useNamedLink } from '../../composition/namedLink';

@Component({
  setup(props) {
    const withHttp = (url: string) => (!/^https?:\/\//i.test(url) ? `http://${url}` : url);

    const block = props.block as IPageBlock;
    return {
      ...useNamedLink(block, withHttp),
    };
  },
})
export default class BlockUrl extends Vue {
  @Prop() private block!: IPageBlock;

  @Prop() private edit!: boolean;
}
</script>

<style scoped lang="scss">
@include block-link-base
</style>
