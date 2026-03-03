import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeOne from './components/homes/home-1';
import HomeTwo from './components/homes/home-2';
import HomeThree from './components/homes/home-3';
import About from './components/about';
import NotFound from './components/error';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Price from './components/price';
import Project from './components/project';
import ProjectDetails from './components/project-details';
import Faq from './components/faq';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import WebDevelopment from './components/web-development';
import EcommerceDevelopment from './components/ecommerce-development';
import MobileAppDevelopment from './components/mobile-app-development';
import AndroidAppDevelopment from './components/android-app-development/index.tsx';
import LogoDesigning from './components/logo-designing';
import IosAppDevelopment from './components/ios-app-development/index.tsx';
import ShopifyDevelopment from './components/shopify-development/index.tsx';
import DigitalMarketing from './components/digital-marketing/index.tsx';
import SeoService from './components/seo-service/index.tsx';

const router = createBrowserRouter([
  { path: '/', element: <HomeOne /> },
  { path: '/home-2', element: <HomeTwo /> },
  { path: '/home-3', element: <HomeThree /> },
  { path: '/about', element: <About /> },
  { path: '/service', element: <Service /> },
  { path: '/service-details', element: <ServiceDetails /> },
  { path: '/web-development', element: <WebDevelopment /> },
  { path: '/ecommerce-development', element: <EcommerceDevelopment /> },
  { path: '/mobile-app-development', element: <MobileAppDevelopment /> },
  { path: '/android-app-development', element: <AndroidAppDevelopment /> },
  { path: '/ios-app-development', element: <IosAppDevelopment /> },
  { path: '/shopify-development', element: <ShopifyDevelopment /> },
  { path: '/digital-marketing', element: <DigitalMarketing /> },
  { path: '/seo-optimization', element: <SeoService /> },
  { path: '/logo-designing', element: <LogoDesigning /> },
  { path: '/team', element: <Team /> },
  { path: '/team-details', element: <TeamDetails /> },
  { path: '/price', element: <Price /> },
  { path: '/project', element: <Project /> },
  { path: '/project-details/:id', element: <ProjectDetails /> },
  { path: '/faq', element: <Faq /> },
  { path: '/blog-grid', element: <BlogGrid /> },
  { path: '/blog-list', element: <BlogList /> },
  { path: '/blog-details', element: <BlogDetails /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
