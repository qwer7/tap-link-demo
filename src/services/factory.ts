import { IPageBlock, TypePageBlock } from './types';

export default (type: TypePageBlock): IPageBlock | null => {
  let element: IPageBlock | null = null;
  if (type === TypePageBlock.Text) element = { type, data: 'enter your text' };
  if (type === TypePageBlock.Image) {
    element = {
      type,
      data: 'https://via.placeholder.com/300.png/909/fff',
    };
  }
  if (type === TypePageBlock.URL) {
    element = {
      type,
      data: { url: 'https://tap.link/', name: '', prefix: 'http://' },
    };
  }
  if (type === TypePageBlock.VK) {
    element = {
      type,
      data: { url: 'durov', name: '', prefix: 'http://vk.me/' },
    };
  }
  return element;
};
