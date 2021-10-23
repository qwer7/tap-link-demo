import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import PageEditor from '../../src/components/PageEditor.vue';
import { TypePageBlock } from '@/services/types';
import factory from '@/services/factory';

library.add(fas);
Vue.component('fa', FontAwesomeIcon);

describe('PageEditor.vue', () => {
  it('should have textarea for Text', () => {
    const el = factory(TypePageBlock.Text);
    const wrapper = mount(PageEditor, {
      propsData: {
        block: el,
      },
    });
    expect(wrapper.find('textarea').exists()).toBeTruthy();
  });

  it('should have gallery for Image', () => {
    const el = factory(TypePageBlock.Image);
    const wrapper = shallowMount(PageEditor, {
      propsData: {
        block: el,
      },
    });
    expect(wrapper.find(`${TypePageBlock.Image}-stub`).exists()).toBeTruthy();
  });
});
