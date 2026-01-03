import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import BeforeAfter from '@/components/home/BeforeAfter';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import IndiaMap from '@/components/home/IndiaMap';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import ConsultationForm from '@/components/home/ConsultationForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sunstar Modular Kitchen | Premium Interior Design in India</title>
        <meta name="description" content="Transform your home with Sunstar Modular Kitchen. India's leading modular kitchen and luxury home interior designers. Premium finishes, 10-year warranty, on-time delivery." />
        <link rel="canonical" href="https://sunstarmodular.com/" />
      </Helmet>
      <Layout>
        <Hero />
        <About />
        <ServicesOverview />
        <FeaturedProjects />
        <BeforeAfter />
        <WhyChooseUs />
        <IndiaMap />
        <Testimonials />
        <FAQ />
        <ConsultationForm />
      </Layout>
    </>
  );
};

export default Home;
