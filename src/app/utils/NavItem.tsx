type NavItem = {
  key: number;
  item: string;
  link?: string;
};

const navbar: NavItem[] = [
  {
    key: 1,
    item: 'Tentang',
    link: 'https://www.instagram.com/',
  },
  {
    key: 2,
    item: 'Kompetisi',
  },
  {
    key: 3,
    item: 'Timeline',
  },
];

export default navbar;
