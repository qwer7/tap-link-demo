<template lang="pug">
    .wrapper
        PageSelector(v-if="state===pageStatus.select"
                    @choise="onChoiceNewBlock")
        PageEditor(v-if="state===pageStatus.edit" :block="currentBlock" :new="isFirstEdit"
                    @close="onCloseEditor"  @save="onSaveAndCloseEditor")
        PageBuilder(v-if="state===pageStatus.build" :page="page"
                    @choise="onChoiseEdit" @add="startAddBlock")
        PageViewer(v-if="state===pageStatus.view"  :page="page")
        div.stycky( v-if="state!==pageStatus.edit&&state!==pageStatus.select")
            a.switch_mode( @click="switchScreen" href="#")
                fa(icon='eye' v-if="state===pageStatus.build")
                fa(icon='hammer' v-if="state===pageStatus.view")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import type { IPageBlock, TypePageBlock } from '@/services/types';
import { PageStatus } from '@/services/types';
import factory from '@/services/factory';
import PageBuilder from './PageBuilder.vue';
import PageViewer from './PageViewer.vue';
import PageEditor from './PageEditor.vue';
import PageSelector from './PageSelector.vue';

@Component({
  components: {
    PageBuilder,
    PageViewer,
    PageEditor,
    PageSelector,
  },
})
export default class MainLayout extends Vue {
  state: PageStatus = PageStatus.build;

  pageStatus : unknown = PageStatus;

  page: IPageBlock[] = [];

  isFirstEdit = false;

  currentBlock: IPageBlock | null = null;

  switchScreen() : void {
    this.state = this.state === PageStatus.build ? PageStatus.view : PageStatus.build;
  }

  onChoiseEdit(block:IPageBlock): void {
    this.isFirstEdit = false;
    this.currentBlock = block;
    this.state = PageStatus.edit;
  }

  startAddBlock(): void {
    this.state = PageStatus.select;
  }

  onChoiceNewBlock(type:TypePageBlock): void {
    const el = factory(type);
    this.currentBlock = el;
    this.isFirstEdit = true;
    this.state = PageStatus.edit;
  }

  onSaveAndCloseEditor(): void {
    const block = this.currentBlock;
    if (block && !this.page.includes(block)) {
      this.page.push(block);
    }
    this.onCloseEditor();
  }

  onCloseEditor():void {
    this.isFirstEdit = false;
    this.currentBlock = null;
    this.state = PageStatus.build;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  align-items: stretch;
  height: inherit;
  min-height: inherit;
}
.switch_mode {
  background: rgba($color: #eee, $alpha: 0.8);
  padding: 0.5rem;
  border-radius: 0.7rem;
}
.stycky {
  position: sticky;
  z-index: 1000;
  bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
