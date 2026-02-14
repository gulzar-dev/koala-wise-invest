import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, TrendingUp, MapPin } from "lucide-react";
import heroProperty from "@/assets/australian-home.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] bg-hero-gradient overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span>Tailored Investment Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.15] mb-5 animate-fade-up delay-100">
              Invest in Regional Queensland{" "}
              <span className="text-gradient">from $700K</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-200">
              Personalised investment solutions, backed by expert research and local insights. Build wealth with purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up delay-300">
              <Button variant="hero" size="xl" onClick={scrollToForm}>
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={scrollToForm}>
                Explore Options
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 animate-fade-up delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span>Ethical guidance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
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
                className="w-full aspect-[4/3] object-cover object-center"
              />
              {/* Overlay with koala conservation message */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-primary-foreground">
                    <p className="font-semibold text-sm">Every investment supports</p>
                    <p className="text-xs opacity-90">Koala Conservation Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-card border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">High Returns</p>
                  <p className="font-semibold text-sm text-foreground">Smart Investment</p>
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
