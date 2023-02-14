import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/content/About';
import Explore from '../components/content/Explore';
import Hero from '../components/content/Hero';

const Page = () => (
  <div>
    <Navbar />
    <Hero />    
    <Explore />
    <About />
    <Footer />
  </div>
);

export default Page;
