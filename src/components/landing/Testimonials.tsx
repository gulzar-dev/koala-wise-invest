import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They guided us step-by-step when we were buying our first investment property. His knowledge of the Australian market and patient explanations made us feel confident at every stage.",
    author: "Rohan P.",
    location: "Melbourne",
    type: "First-time investor",
  },
  {
    quote:
      "We bought our first investment property with Koala Invest in 2019 and are very happy with the outcome. The thorough research behind each recommendation really shows.",
    author: "Sarah & Michael T.",
    location: "Sydney",
    type: "Property investors",
  },
  {
    quote:
      "As first-time investors, we had a lot of questions. Koala Invest answered every one, calmly and clearly, making the entire process smooth and stress-free.",
    author: "David K.",
    location: "Brisbane",
    type: "First-time investor",
  },
  {
    quote:
      "What impressed me most was the genuine care for both our financial goals and the conservation impact. It's rare to find an advisor who truly aligns with your values.",
    author: "Emma L.",
    location: "Perth",
    type: "Experienced investor",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Real People. Real Guidance. Real Outcomes.
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from investors who've built their portfolios with Koala Invest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-soft">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
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
