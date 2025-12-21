import { Button } from "@/components/ui/button";
import { MessageCircle, FileSearch, Handshake, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "Share your goals, current situation, and questions in a relaxed conversation.",
    detail: "No obligations, no sales pitch—just clarity.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Tailored Property Strategy",
    description:
      "We research and present suitable properties—such as dual-key or duplex options—aligned with your budget, risk comfort, and long-term plans.",
    detail: "Every recommendation backed by thorough research.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Confident Action with Support",
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Step number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cta-gradient text-primary-foreground font-serif text-xl font-bold mb-6 shadow-card relative z-10">
                  {step.number}
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Start My Investment Conversation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
