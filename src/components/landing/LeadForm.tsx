import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";

const purposeOptions = [
  { value: "investment", label: "Investment" },
  { value: "first-home", label: "First Home Buyer" },
  { value: "exploring", label: "Exploring options" },
];

const propertyTypeOptions = [
  { value: "new-build", label: "New build / off-the-plan" },
  { value: "existing", label: "Existing property" },
  { value: "no-preference", label: "No preference" },
];

const timelines = [
  { value: "3-months", label: "Within 3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-12-months", label: "6–12 months" },
  { value: "researching", label: "Just researching / no fixed timeline" },
];

const budgetOptions = [
  { value: "under-750k", label: "Under $750K" },
  { value: "750k-900k", label: "$750K–$900K" },
  { value: "over-900k", label: "Over $900K" },
  { value: "working-on-it", label: "Working on pre-approval / budget" },
];

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    purpose: "",
    propertyType: "",
    timeline: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Thank you!",
      description:
        "A Koala Invest specialist will contact you within 24 hours to arrange your consultation.",
    });

    setFormData({
      firstName: "",
      email: "",
      phone: "",
      purpose: "",
      propertyType: "",
      timeline: "",
      budget: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="consultation-form" className="py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left content */}
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-3">
                Start Your Personalised Investment Plan
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a free, no-obligation call with Koala Invest to explore property 
                options tailored to your goals and situation.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">100% free, no obligation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Personalised guidance call</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-card"
              >
                <div className="space-y-5">
                  {/* Name, Email, Phone */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  {/* Q1: Purpose */}
                  <div className="space-y-2">
                    <Label>Q1. Purpose of buying a property? *</Label>
                    <Select
                      value={formData.purpose}
                      onValueChange={(value) =>
                        setFormData({ ...formData, purpose: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {purposeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Q2: Property Type */}
                  <div className="space-y-2">
                    <Label>Q2. What type of property are you interested in? *</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, propertyType: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Q3: Timeline */}
                  <div className="space-y-2">
                    <Label>Q3. When are you looking to invest? *</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeline: value })
                      }
                      className="grid sm:grid-cols-2 gap-2"
                    >
                      {timelines.map((timeline) => (
                        <div key={timeline.value} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={timeline.value}
                            id={timeline.value}
                            className="border-primary text-primary"
                          />
                          <Label
                            htmlFor={timeline.value}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {timeline.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Q4: Budget */}
                  <div className="space-y-2">
                    <Label>Q4. Do you have a pre-approval and budget? *</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Get My Free Investor Roadmap
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Your information is secure and will never be shared. Koala Invest 
                    specialises in high‑yield investments and Koala conservation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
