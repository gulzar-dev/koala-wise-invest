import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import InvestmentCalculator from "@/components/landing/InvestmentCalculator";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import TeamPhoto from "@/components/landing/TeamPhoto";
import LeadForm from "@/components/landing/LeadForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Koala Invest | Purpose-Driven Property Investment in Australia</title>
        <meta
          name="description"
          content="Build wealth while protecting koalas. Koala Invest offers personalised off-the-plan and full-turnkey property investment solutions tailored to your goals. Free consultation available."
        />
        <meta
          name="keywords"
          content="property investment Australia, dual-key properties, duplex investment, koala conservation, ethical investing, property advisory"
        />
        <meta property="og:title" content="Koala Invest | Purpose-Driven Property Investment" />
        <meta
          property="og:description"
          content="Personalised property investment solutions that help build your wealth and support Koala conservation across Australia."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://koalainvest.com.au" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <Hero />

          <section id="value-props">
            <ValueProps />
          </section>

          <InvestmentCalculator />

          <section id="how-it-works">
            <HowItWorks />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          {/* <TeamPhoto /> */}

          <LeadForm />

          <section id="faq">
            <FAQ />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
