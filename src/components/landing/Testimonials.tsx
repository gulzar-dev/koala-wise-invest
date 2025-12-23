import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They guided us step-by-step when we were buying our first investment property. His knowledge of the Australian market and patient explanations made us feel confident at every stage.",
    author: "Rohan P.",
    location: "Melbourne",
    type: "First-time investor",
    initials: "RP",
  },
  {
    quote:
      "We bought our first investment property with Koala Invest in 2019 and are very happy with the outcome. The thorough research behind each recommendation really shows.",
    author: "Sarah & Michael T.",
    location: "Sydney",
    type: "Property investors",
    initials: "SM",
  },
  {
    quote:
      "As first-time investors, we had a lot of questions. Koala Invest answered every one, calmly and clearly, making the entire process smooth and stress-free.",
    author: "David K.",
    location: "Brisbane",
    type: "First-time investor",
    initials: "DK",
  },
  {
    quote:
      "What impressed me most was the genuine care for both our financial goals and the conservation impact. It's rare to find an advisor who truly aligns with your values.",
    author: "Emma L.",
    location: "Perth",
    type: "Experienced investor",
    initials: "EL",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">
            Real People. Real Guidance. Real Outcomes.
          </h2>
          <p className="text-muted-foreground">
            Hear from investors who've built their portfolios with Koala Invest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-soft">
                  <Quote className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed mb-5 text-sm">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
