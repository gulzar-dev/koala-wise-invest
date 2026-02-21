import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import koalaLogo from "@/assets/koala-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-1"
          : "bg-white/80 backdrop-blur-sm py-2"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src={koalaLogo} 
            alt="Koala Invest Logo" 
            className="h-20 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("value-props")}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Koala Invest
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Calculator
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Success Stories
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="hero" onClick={scrollToForm}>
            Free Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-card">
          <nav className="container py-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("value-props")}
              className="text-left py-2 text-foreground font-medium"
            >
              Why Koala Invest
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-left py-2 text-foreground font-medium"
            >
              Calculator
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2 text-foreground font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left py-2 text-foreground font-medium"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 text-foreground font-medium"
            >
              FAQ
            </button>
            <Button variant="hero" className="mt-2" onClick={scrollToForm}>
              Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
