export enum TypePageBlock {
  Text = 'BlockText',
  Image = 'BlockImage',
  URL = 'BlockUrl',
  VK = 'BlockLinkVk'
}

export enum PageStatus {
  build,
  edit,
  view,
  select,
}

export interface IUrl {
  name?: string;
  url: string;
  readonly prefix: string;
}

export interface IPageBlock {
  readonly type: TypePageBlock;
  data: string | IUrl;
}

export const BlocksDescription = [
  { type: TypePageBlock.Text, name: 'Text / Текст', icon: 'font' },
  { type: TypePageBlock.Image, name: 'Image / Картинка', icon: 'image' },
  { type: TypePageBlock.URL, name: 'Link / Ссылка', icon: 'external-link-alt' },
  { type: TypePageBlock.VK, name: 'VK / Вконтакте', icon: 'comment-dots' },
];

export default { TypePageBlock };
