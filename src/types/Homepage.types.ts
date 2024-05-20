import type { ButtonProps } from '@mui/material';

export interface ILFXCardElement {
  icon: string;
  title: string;
  description?: string;
  backgroundCover?: string;
}

export interface IBlogCardElement {
  cover: string;
  title: string;
  description: string;
  date?: string;
}

export interface IInfoCard {
  title: string;
  subtitle: string;
  description?: string;
  buttonProps?: Partial<ButtonProps>;
  cover?: string;
}

export interface IHeaderMenuItem {
  label: string;
  path: string;
  menu?: IHeaderMenuItem[];
}
