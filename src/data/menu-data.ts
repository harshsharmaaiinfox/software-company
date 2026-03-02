interface MenuDataType {
  title: string;
  link: string;
  has_dropdown?: boolean;
  sub_menus?: {
    title: string;
    link: string;
    img?: string;
    buttonText?: string;
  }[];
}

const menu_data: MenuDataType[] = [
  {
    title: 'Home',
    link: '/',
  },

  {
    title: 'Services We Offer',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { title: 'Website Design & Development', link: '/service' },
      { title: 'E-commerce Website Development', link: '/service' },
      { title: 'Shopify Website Development', link: '/service' },
      { title: 'Mobile App Development', link: '/service' },
      { title: 'Android App Development', link: '/service' },
      { title: 'IOS App Development', link: '/service' },
      { title: 'Logo Designing', link: '/service' },
      { title: 'Digital Marketing', link: '/service' },
      { title: 'Search Engine Optimization (SEO)', link: '/service' },
    ],
  },

  {
    title: 'Our Clients',
    link: '/project',
  },

  {
    title: 'About Us',
    link: '/about',
  },

  {
    title: 'Contact Us',
    link: '/contact',
  },
];

export default menu_data;
