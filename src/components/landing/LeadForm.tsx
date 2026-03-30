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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";

type Purpose = "" | "Investment" | "First Home Buyer" | "Exploring";

const states = [
  "New South Wales",
  "Queensland",
  "Western Australia",
  "Victoria",
  "South Australia",
];

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "" as Purpose,
    propertyType: "",
    states: [] as string[],
    timeline: "",
    budget: "",
    holdingBack: "",
  });

  const totalSteps = formData.purpose === "Exploring" ? 2 : formData.purpose === "First Home Buyer" ? 4 : 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map values to human-readable labels for Zoho
    const purposeLabels: Record<string, string> = {
      investment: "Investment",
      "first-home": "First Home Buyer",
      exploring: "Exploring",
    };

    const propertyTypeLabels: Record<string, string> = {
      "new-build": "New Build",
      existing: "Existing property",
      "no-preference": "No preference",
    };

    const timelineLabels: Record<string, string> = {
      "0-3-months": "0-3 months",
      "3-6-months": "3-6 months",
      "6-12-months": "6-12 months",
    };

    const budgetLabels: Record<string, string> = {
      "750K-800K": "$750K–$800K",
      "800K-950K": "$800K–$950K",
      "above-950k": "$950K and Above",
      "working-on-it": "Working on it",
    };

    const holdingBackLabels: Record<string, string> = {
      unsure: "Unsure where to start from",
      "strategy-session": "I would like a strategy session",
    };

    const submissionData = {
      ...formData,
      purpose: purposeLabels[formData.purpose] || formData.purpose,
      propertyType: propertyTypeLabels[formData.propertyType] || formData.propertyType,
      timeline: timelineLabels[formData.timeline] || formData.timeline,
      budget: budgetLabels[formData.budget] || formData.budget,
      holdingBack: holdingBackLabels[formData.holdingBack] || formData.holdingBack,
      states: formData.states.join(", "), // Convert array to comma-separated string
    };

    try {
      // Log to terminal for debugging
      fetch("/api/debug-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      }).catch(() => { }); // Ignore debug log errors

      const response = await fetch("/api/zoho-flow/7002708614/flow/webhook/incoming?zapikey=1001.edf42e6bad5989a64711f86420fa2c3f.2c57972b92afca0d131902f5f5e527a4&isdebug=false", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }

      // Log success to terminal
      fetch("/api/debug-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Data successfully sent via Proxy", status: response.status }),
      }).catch(() => { });

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your investor roadmap has been generated.",
      });
    } catch (error) {      // Log the specific error to the terminal
      fetch("/api/debug-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: error.message }),
      }).catch(() => { });

      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canAdvance = () => {
    if (step === 1) return formData.firstName && formData.lastName && formData.email && formData.phone && formData.purpose;
    if (formData.purpose === "Investment") {
      if (step === 2) return formData.propertyType;
      if (step === 3) return formData.states.length > 0;
      if (step === 4) return formData.timeline;
      if (step === 5) return formData.budget;
    }
    if (formData.purpose === "First Home Buyer") {
      if (step === 2) return formData.states.length > 0;
      if (step === 3) return formData.timeline;
      if (step === 4) return formData.budget;
    }
    if (formData.purpose === "Exploring") {
      if (step === 2) return formData.holdingBack;
    }
    return false;
  };

  const isLastStep = step === totalSteps;

  const toggleState = (state: string) => {
    setFormData((prev) => ({
      ...prev,
      states: prev.states.includes(state)
        ? prev.states.filter((s) => s !== state)
        : [...prev.states, state],
    }));
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="First name" value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Last name" value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required className="h-11" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="Your phone" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-11" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Q1. Purpose of buying a property? *</Label>
            <p className="text-xs text-muted-foreground">Koala Invest specialises in high-yield investments and Koala conservation.</p>
            <Select value={formData.purpose} onValueChange={(value) => setFormData({ ...formData, purpose: value as Purpose })}>
              <SelectTrigger className="h-11"><SelectValue placeholder="Select an option" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Investment">Investment</SelectItem>
                <SelectItem value="First Home Buyer">First Home Buyer</SelectItem>
                <SelectItem value="Exploring">Exploring</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      );
    }

    // Investment path
    if (formData.purpose === "Investment") {
      if (step === 2) return (
        <div className="space-y-2">
          <Label>Q2. New Build or Existing? *</Label>
          <p className="text-xs text-muted-foreground">New builds are 100% depreciable and enjoy greater tax benefits.</p>
          <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
            <SelectTrigger className="h-11"><SelectValue placeholder="Select an option" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="new-build">New Build</SelectItem>
              <SelectItem value="existing">Existing property</SelectItem>
              <SelectItem value="no-preference">No preference</SelectItem>
            </SelectContent>
          </Select>
        </div>
      );
      if (step === 3) return <StatesSelect states={formData.states} toggle={toggleState} />;
      if (step === 4) return <TimelineSelect value={formData.timeline} onChange={(v) => setFormData({ ...formData, timeline: v })} />;
      if (step === 5) return <BudgetSelect value={formData.budget} onChange={(v) => setFormData({ ...formData, budget: v })} />;
    }

    // First Home Buyer path
    if (formData.purpose === "First Home Buyer") {
      if (step === 2) return <StatesSelect states={formData.states} toggle={toggleState} />;
      if (step === 3) return <TimelineSelect value={formData.timeline} onChange={(v) => setFormData({ ...formData, timeline: v })} />;
      if (step === 4) return <BudgetSelect value={formData.budget} onChange={(v) => setFormData({ ...formData, budget: v })} />;
    }

    // Exploring path
    if (formData.purpose === "Exploring" && step === 2) {
      return (
        <div className="space-y-2">
          <Label>Q6. What's Holding You Back? *</Label>
          <p className="text-xs text-muted-foreground">Get our free Roadmap to clarify next steps.</p>
          <Select value={formData.holdingBack} onValueChange={(value) => setFormData({ ...formData, holdingBack: value })}>
            <SelectTrigger className="h-11"><SelectValue placeholder="Select an option" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="unsure">Unsure where to start from</SelectItem>
              <SelectItem value="strategy-session">I would like a strategy session</SelectItem>
            </SelectContent>
          </Select>
        </div>
      );
    }
    return null;
  };

  if (isSubmitted) {
    return (
      <section id="consultation-form" className="py-10 lg:py-14 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-3">You're All Set — Priority Investment Consultation</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Thanks <span className="font-semibold text-foreground">{formData.firstName}</span>, for sharing your details.
              Book a quick 15‑minute Priority Investment Consultation to get a clear strategy, tailored recommendations and up‑to‑date market insights for your next move.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="mb-8"
              onClick={() => window.open("https://koalainvest.zohobookings.com.au/portal-embed#/16651000000521024", "_blank")}
            >
              Book Your 15-Minute Consultation
            </Button>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-card">
            <iframe
              src="https://koalainvest.zohobookings.com.au/portal-embed#/16651000000521024"
              title="Book a Consultation with Koala Invest"
              width="100%"
              height="700"
              className="block"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation-form" className="py-10 lg:py-14 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-3">
                Invest Smarter with Koala Invest
              </h2>
              <p className="text-muted-foreground mb-6">
                Build your investor roadmap in 2 minutes. Book a free, no-obligation
                consultation tailored to your goals.
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

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-card">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-6">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < step ? "bg-primary" : "bg-muted"}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">Step {step}/{totalSteps}</span>
                </div>

                <div className="space-y-5">
                  {renderStep()}

                  <div className="flex gap-3">
                    {step > 1 && (
                      <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(step - 1)}>
                        Back
                      </Button>
                    )}
                    {isLastStep ? (
                      <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting || !canAdvance()}>
                        {isSubmitting ? "Submitting..." : (
                          <>Get My Free Investor Roadmap <ArrowRight className="w-5 h-5" /></>
                        )}
                      </Button>
                    ) : (
                      <Button type="button" variant="hero" size="lg" className="flex-1" disabled={!canAdvance()}
                        onClick={() => setStep(step + 1)}>
                        Next <ArrowRight className="w-5 h-5" />
                      </Button>
                    )}
                  </div>

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

const StatesSelect = ({ states, toggle }: { states: string[]; toggle: (s: string) => void }) => (
  <div className="space-y-2">
    <Label>Which State? *</Label>
    <div className="grid sm:grid-cols-2 gap-2">
      {["New South Wales", "Queensland", "Western Australia", "Victoria", "South Australia"].map((state) => (
        <div key={state} className="flex items-center space-x-2">
          <Checkbox id={state} checked={states.includes(state)} onCheckedChange={() => toggle(state)} />
          <Label htmlFor={state} className="text-sm font-normal cursor-pointer">{state}</Label>
        </div>
      ))}
    </div>
  </div>
);

const TimelineSelect = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <div className="space-y-2">
    <Label>Your investment timeframe? *</Label>
    <p className="text-xs text-muted-foreground">0-3 months for best pre-construction deals.</p>
    <RadioGroup value={value} onValueChange={onChange} className="grid sm:grid-cols-2 gap-2">
      {[
        { value: "0-3-months", label: "0-3 months" },
        { value: "3-6-months", label: "3-6 months" },
        { value: "6-12-months", label: "6-12 months" },
      ].map((t) => (
        <div key={t.value} className="flex items-center space-x-2">
          <RadioGroupItem value={t.value} id={t.value} className="border-primary text-primary" />
          <Label htmlFor={t.value} className="text-sm font-normal cursor-pointer">{t.label}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

const BudgetSelect = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <div className="space-y-2">
    <Label>Do you have a Pre-approval and Budget? *</Label>
    <p className="text-xs text-muted-foreground">Higher budgets unlock premium dual-key opportunities.</p>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-11"><SelectValue placeholder="Select an option" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="750K-800K">$750K–$800K</SelectItem>
        <SelectItem value="800K-950K">$800K–$950K</SelectItem>
        <SelectItem value="above-950k">$950K and Above</SelectItem>
        <SelectItem value="working-on-it">Working on it</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default LeadForm;
