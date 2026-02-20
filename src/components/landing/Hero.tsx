import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpeg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Modern dual-occupancy home in regional Queensland"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center max-w-3xl py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-8 animate-fade-up">
          <span>Tailored Investment Solutions</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] mb-6 text-primary-foreground animate-fade-up delay-100">
          Invest in Regional Queensland{" "}
          <span className="text-primary">from $700K</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
          Personalised investment solutions, backed by expert research and local insights. Build wealth with purpose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="xl"
            onClick={scrollToForm}
            className="bg-white/15 border-2 border-white text-white hover:bg-white/25 backdrop-blur-sm"
          >
            Explore Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
