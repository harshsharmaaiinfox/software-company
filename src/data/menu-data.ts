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
      { title: 'Website Design & Development', link: '/web-development' },
      { title: 'E-commerce Website Development', link: '/ecommerce-development' },
      { title: 'Shopify Website Development', link: '/shopify-development' },
      { title: 'Mobile App Development', link: '/mobile-app-development' },
      { title: 'Android App Development', link: '/android-app-development' },
      { title: 'IOS App Development', link: '/ios-app-development' },
      { title: 'Logo Designing', link: '/logo-designing' },
      { title: 'Digital Marketing', link: '/digital-marketing' },
      // { title: 'Search Engine Optimization (SEO)', link: '/seo-optimization' },
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
