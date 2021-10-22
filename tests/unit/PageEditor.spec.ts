import { mount } from '@vue/test-utils';
import PageEditor from '../../src/components/PageEditor.vue';
import { TypePageBlock } from '@/services/types';
import factory from '@/services/factory';

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
    const wrapper = mount(PageEditor, {
      propsData: {
        block: el,
      },
    });
    expect(wrapper.find('.img_list').exists()).toBeTruthy();
  });
});
