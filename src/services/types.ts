export enum TypePageBlock {
  Text = 'BlockText',
  Image = 'BlockImage',
}

export interface IPageBlock {
  readonly type: TypePageBlock;
  data: string;
}

export const BlocksDescription = [
  { type: TypePageBlock.Text, name: 'Text / Текст', icon: 'font' },
  { type: TypePageBlock.Image, name: 'Image / Картинка', icon: 'image' },
];

export default { TypePageBlock };
