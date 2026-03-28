import { Quote, Star } from "lucide-react";
import testimonialRohan from "@/assets/testimonial-rohan.jpg";
import testimonialSarahMichael from "@/assets/testimonial-sarah-michael.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import testimonialEmma from "@/assets/testimonial-emma.jpg";
import testimonialUser from "@/assets/user-account.png";


const testimonials = [
  {
    quote:
    "Good property advice is hard to come by, but Koala Invest really stood out. They listened to what I was looking for and guided me with investment options that truly helped.",
    author: "Divya M.",
    location: "Melbourne",
    type: "First-time investor",
    initials: "RP",
    image: testimonialUser,
  },
  {
    quote:
    "Received great professional advice and inside in to property market. Amit Pall and his team knows the business well. They do extensive research to give us the best fit investment solution.",
    author: "Saumil S.",
    location: "Sydney",
    type: "Experienced investors",
    initials: "SM",
    image: testimonialUser,
  },
  {
    quote:
    "As a first-time investor, I really appreciated how clearly everything was explained and how supportive the team was throughout the process. I'd happily recommend them to anyone starting their investment journey.",
    author: "Kartik T.",
    location: "Brisbane",
    type: "First-time investor",
    initials: "DK",
    image: testimonialUser,
  },
  {
    quote:
    "I had a few specific requirements in mind and they helped me by offering a customized investment solution that matched my requirements better than I expected.",
    author: "Mansi A.",
    location: "Perth",
    type: "Property investor",
    initials: "EL",
    image: testimonialUser,
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 lg:py-14 bg-secondary/30">
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
                  <Star key={i} className="w-4 h-4" style={{ fill: "hsl(48, 96%, 53%)", color: "hsl(48, 96%, 53%)" }} />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed mb-5 text-sm">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-primary flex items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
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
