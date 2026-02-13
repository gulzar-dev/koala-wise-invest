import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, TrendingUp } from "lucide-react";
import heroProperty from "@/assets/australian-home.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] bg-hero-gradient overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Decorative eucalyptus leaves - subtle SVG pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 400" className="w-full h-full" fill="currentColor">
          <ellipse cx="150" cy="80" rx="40" ry="20" className="text-primary" transform="rotate(30 150 80)" />
          <ellipse cx="170" cy="150" rx="35" ry="18" className="text-primary" transform="rotate(-20 170 150)" />
          <ellipse cx="140" cy="220" rx="38" ry="19" className="text-primary" transform="rotate(15 140 220)" />
          <ellipse cx="160" cy="300" rx="42" ry="21" className="text-primary" transform="rotate(-25 160 300)" />
        </svg>
      </div>

      <div className="container relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5 animate-fade-up">
              <Heart className="w-4 h-4" />
              <span>Supporting Koala Conservation with Every Investment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-tight mb-5 animate-fade-up delay-100">
              Build Wealth.{" "}
              <span className="text-gradient">Protect Koalas.</span>{" "}
              Invest with Purpose.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-up delay-200">
              Personalised off-the-plan and full-turnkey property investment solutions 
              tailored to your goals—where every investment helps support Koala 
              conservation in Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-up delay-300">
              <Button variant="hero" size="xl" onClick={scrollToForm}>
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={scrollToForm}>
                Discover Your Investment Path
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Ethical guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Research-driven</span>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroProperty}
                alt="Modern Australian property investment with eucalyptus trees"
                className="w-full aspect-[5/4] object-cover object-center"
              />
              {/* Overlay with koala conservation message */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl">🐨</span>
                  </div>
                  <div className="text-primary-foreground">
                    <p className="font-semibold text-sm">Every investment supports</p>
                    <p className="text-xs opacity-90">Koala Conservation Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">High Returns</p>
                  <p className="font-semibold text-sm text-foreground">Smart Property Investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
