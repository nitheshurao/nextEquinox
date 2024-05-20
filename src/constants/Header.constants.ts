import type { IHeaderMenuItem } from '@/types/Homepage.types';

export const HEADER_MENU: IHeaderMenuItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About us',
    path: '/',
    menu: [
      {
        label: 'Who we are',
        path: '',
      },
    ],
  },
  {
    label: 'Markets',
    path: '/',
    menu: [
      {
        label: 'Who we are',
        path: '',
      },
    ],
  },
  {
    label: 'Accounts',
    path: '/',
    menu: [
      {
        label: 'Who we are',
        path: '',
      },
    ],
  },
  {
    label: 'Educational Materials',
    path: '/',
    menu: [
      {
        label: 'Who we are',
        path: '',
      },
    ],
  },
  {
    label: 'News',
    path: '/',
  },
];
