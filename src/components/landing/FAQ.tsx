import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of properties do you recommend?",
    answer:
      "We specialize in high-yield property options including dual-key properties (two homes on one title with potential for two income streams), duplexes (similar configuration with flexibility for separate titles), and carefully selected off-the-plan developments. Every recommendation is based on thorough research and tailored to your specific goals.",
  },
  {
    question: "Do I need to be an experienced investor?",
    answer:
      "Not at all. We work with both first-time investors and those expanding their portfolios. Our step-by-step guidance ensures you understand every aspect of the investment process, making it accessible regardless of your experience level.",
  },
  {
    question: "How do you choose suitable properties?",
    answer:
      "Our property selection process combines extensive market research, local insights, and a deep understanding of growth areas across Australia. We evaluate factors like rental yield potential, capital growth prospects, infrastructure developments, and how well each property matches your personal goals and risk profile.",
  },
  {
    question: "Is the initial consultation really free?",
    answer:
      "Absolutely. Your first consultation is completely free with no obligation. It's an opportunity for us to understand your situation and goals, and for you to learn how we can help - without any pressure or commitment.",
  },
  {
    question: "How does the Koala conservation support work?",
    answer:
      "Koala Invest actively supports Koala Conservation Australia and the Port Macquarie Koala Hospital through sponsorships and contributions. When you invest with us, you're not just building your financial future - you're also contributing to the protection of Australia's beloved koalas and their natural habitat.",
  },
  {
    question: "What ongoing support do you provide after purchase?",
    answer:
      "Our relationship doesn't end at settlement. We continue to provide guidance on property management, market updates, and portfolio strategy. Many of our clients have invested multiple times with us because of this ongoing partnership approach.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about investing with Koala Invest.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
