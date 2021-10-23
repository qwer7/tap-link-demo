import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import MainLayout from '../../src/components/MainLayout.vue';
import { PageStatus, TypePageBlock } from '@/services/types';

Vue.component('fa', FontAwesomeIcon);

describe('MainLayout.vue', () => {
  /* eslint-disable */
  let wrapper: any;
  let vm: any;
  /* eslint-enable */
  beforeEach(() => {
    wrapper = shallowMount(MainLayout);
    vm = wrapper.vm as MainLayout;
  });

  it('by start default have eve button', () => {
    expect(wrapper.find('[icon="eye"]').exists()).toBeTruthy();
  });

  it('after click switchScreen have hummer button', async () => {
    const input = wrapper.find('a.switch_mode');
    await input.trigger('click');
    expect(wrapper.find('[icon="hammer"]').exists()).toBeTruthy();
  });

  it('should change state after switchScreen call', async () => {
    vm.switchScreen();
    expect(vm.state).toBe(PageStatus.view);
    vm.switchScreen();
    expect(vm.state).toBe(PageStatus.build);
  });

  it('should increase page element after onChoiceNewBlock call', async () => {
    expect(vm.page.length).toBe(0);
    vm.onChoiceNewBlock(TypePageBlock.Text);
    vm.onSaveAndCloseEditor();
    expect(vm.page.length).toBe(1);
    vm.onChoiceNewBlock(TypePageBlock.URL);
    vm.onSaveAndCloseEditor();
    expect(vm.page.length).toBe(2);
  });
});
