import type { IHeaderMenuItem } from '@/types/Homepage.types';

export interface IMenuItemProps {
  item: IHeaderMenuItem;
  anchorEl?: HTMLElement | null;
  handlePopoverOpen?: (arg: any) => void;
  handlePopoverClose?: (arg: any) => void;
}
