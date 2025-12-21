import { Target, Search, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Personalised Strategy for You",
    description:
      "We don't squeeze you into a template. We learn your goals, budget, and timeframes, then recommend properties that fit you.",
  },
  {
    icon: Search,
    title: "Deep Local Research & Experience",
    description:
      "Led by thorough research and a strong understanding of the Australian market, every opportunity is backed by data, due diligence, and on-the-ground knowledge.",
  },
  {
    icon: Leaf,
    title: "Investment with Purpose",
    description:
      "Each investment helps support Koala Conservation Australia and the Port Macquarie Koala Hospital—so your portfolio grows while you help protect Australia's unique wildlife.",
  },
  {
    icon: Users,
    title: "Guidance at Every Step",
    description:
      "From your first call to property selection and beyond, Koala Invest walks you through each step with clear explanations and a calm, supportive approach.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            The <span className="text-gradient">Koala Invest</span> Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe property investment should be personal, purposeful, and grounded in integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 lg:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 text-muted-foreground">
            <span className="text-2xl">🐨</span>
            <span className="text-sm">
              Relationship-driven. Personalized. Purpose-led.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
