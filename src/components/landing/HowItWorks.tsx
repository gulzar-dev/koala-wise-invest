import { Button } from "@/components/ui/button";
import { MessageCircle, FileSearch, Handshake, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "Share your goals, current situation, and questions in a relaxed conversation.",
    detail: "No obligations, no sales pitch - just clarity.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Tailored Strategy",
    description:
      "We research and present suitable properties - such as dual-key or duplex options - aligned with your budget and plans.",
    detail: "Every recommendation backed by thorough research.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Ongoing Support",
    description:
      "If you choose to proceed, Koala Invest supports you through the entire process and keeps in touch as your investment progresses.",
    detail: "Guidance doesn't end at purchase.",
  },
];

const HowItWorks = () => {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Your journey to purposeful property investment in three clear steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center flex flex-col items-center">
                {/* Step number badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cta-gradient text-primary-foreground font-serif text-lg font-bold mb-5 shadow-card relative z-10">
                  {step.number}
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border/50 flex flex-col flex-1 w-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">
                    {step.description}
                  </p>
                  <p className="text-xs text-primary font-medium mt-auto">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - centered below cards */}
        <div className="mt-10 text-center">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
