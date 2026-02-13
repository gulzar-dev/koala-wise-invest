import { Heart, Mail, Phone, MapPin } from "lucide-react";
import koalaLogo from "@/assets/koala-logo.png";

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={koalaLogo} 
                alt="Koala Invest Logo" 
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-5 max-w-md text-sm">
              Personalised property investment solutions that help build your wealth 
              and support Koala conservation across Australia.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-sm">
              <Heart className="w-4 h-4" />
              <span>Proud supporter of Koala Conservation Australia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Property Insights
                </a>
              </li>
              <li>
                <button 
                  onClick={scrollToForm}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/50" />
                <a href="tel:0296334233" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  02 9633 4233
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/50" />
                <a href="mailto:invest@koalainvest.com.au" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  invest@koalainvest.com.au
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/50 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Suite 1, Level 2, 60 Phillip Street<br />
                  Parramatta 2150
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Koala Invest. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
