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

const investorTypes = [
  { value: "first-time", label: "I'm a first-time property investor" },
  { value: "experienced", label: "I already own property and want to invest again" },
  { value: "owner-occupier", label: "I'm an owner-occupier looking to invest" },
  { value: "exploring", label: "I'm just exploring for now" },
];

const timelines = [
  { value: "3-months", label: "Within 3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-12-months", label: "6–12 months" },
  { value: "researching", label: "Just researching / no fixed timeline" },
];

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    investorType: "",
    timeline: "",
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
      investorType: "",
      timeline: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="consultation-form" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left content */}
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Start Your Personalised Investment Plan
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free, no-obligation call with Koala Invest to explore property 
                options tailored to your goals and situation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">100% free, no obligation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Personalised guidance call</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card border border-border/50 shadow-card"
              >
                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className="h-12"
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
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Investor Type */}
                  <div className="space-y-2">
                    <Label>What best describes you? *</Label>
                    <Select
                      value={formData.investorType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, investorType: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {investorTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <Label>When are you looking to invest?</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeline: value })
                      }
                      className="grid sm:grid-cols-2 gap-3"
                    >
                      {timelines.map((timeline) => (
                        <div key={timeline.value} className="flex items-center space-x-3">
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
                        Get My Free Consultation
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Your information is secure and will never be shared.
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
