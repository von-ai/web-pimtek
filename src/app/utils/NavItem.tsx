type NavItem = {
  key: number;
  item: string;
  link?: string;
};

const navbar: NavItem[] = [
  {
    key: 1,
    item: 'Tentang',
    link: '#About',
  },
  {
    key: 2,
    item: 'Kompetisi',
    link: '#Compe',
  },
  {
    key: 3,
    item: 'Timeline',
    link: '#Timeline',
  },
];

export default navbar;
