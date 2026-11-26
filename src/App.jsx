import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { agencyInfo, servicesData } from './data/agencyData';

function App() {
  return (
    <div className="agency-app">
      <Header brandName={agencyInfo.name} />

      <main className="agency-main">
        <Hero
          tagline={agencyInfo.tagline}
          heading={agencyInfo.heroHeading}
          description={agencyInfo.heroDescription}
          metrics={agencyInfo.metrics}
        />

        <ServicesList services={servicesData} about={agencyInfo} />

        <Contact services={servicesData} studioEmail={agencyInfo.email} />
      </main>

      <Footer
        brandName={agencyInfo.name}
        location={agencyInfo.location}
        email={agencyInfo.email}
      />
    </div>
  );
}

export default App;
