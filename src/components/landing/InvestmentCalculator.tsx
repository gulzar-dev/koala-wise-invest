import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const InvestmentCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(750000);
  const [weeklyRent, setWeeklyRent] = useState(1000);
  const [interestRate, setInterestRate] = useState(5.6);
  const [deposit, setDeposit] = useState(20);

  const calculations = useMemo(() => {
    const depositAmount = purchasePrice * (deposit / 100);
    const loanAmount = purchasePrice - depositAmount;
    
    // Annual interest payment (interest-only)
    const annualInterest = loanAmount * (interestRate / 100);
    const weeklyInterest = annualInterest / 52;
    
    // Weekly cashflow
    const weeklyCashflow = weeklyRent - weeklyInterest;
    const yearlyCashflow = weeklyCashflow * 52;
    
    return {
      loanAmount,
      weeklyCashflow: Math.round(weeklyCashflow),
      yearlyCashflow: Math.round(yearlyCashflow),
    };
  }, [purchasePrice, weeklyRent, interestRate, deposit]);

  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-16 lg:py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Investment Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">
            Estimate Your Position
          </h2>
          <p className="text-muted-foreground">
            Estimate your position with a Koala investment.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 bg-card rounded-2xl p-6 lg:p-8 shadow-card">
            {/* Left side - Sliders */}
            <div className="space-y-6">
              {/* Purchase Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Purchase Price</label>
                  <span className="text-lg font-semibold text-primary">{formatCurrency(purchasePrice)}</span>
                </div>
                <Slider
                  value={[purchasePrice]}
                  onValueChange={(value) => setPurchasePrice(value[0])}
                  min={300000}
                  max={2000000}
                  step={10000}
                  className="w-full"
                />
              </div>

              {/* Weekly Rent */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Weekly Rent</label>
                  <span className="text-lg font-semibold text-primary">${weeklyRent} / wk</span>
                </div>
                <Slider
                  value={[weeklyRent]}
                  onValueChange={(value) => setWeeklyRent(value[0])}
                  min={200}
                  max={2000}
                  step={25}
                  className="w-full"
                />
              </div>

              {/* Interest Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Interest Rate</label>
                  <span className="text-lg font-semibold text-primary">{interestRate.toFixed(1)}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={3}
                  max={10}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Deposit */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Deposit</label>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant={deposit === 10 ? "hero" : "outline"}
                    className="flex-1"
                    onClick={() => setDeposit(10)}
                  >
                    10%
                  </Button>
                  <Button
                    type="button"
                    variant={deposit === 20 ? "hero" : "outline"}
                    className="flex-1"
                    onClick={() => setDeposit(20)}
                  >
                    20%
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Results */}
            <div className="space-y-4">
              {/* Estimated Weekly Cashflow */}
              <div className="bg-secondary/50 rounded-xl p-5">
                <p className="text-sm text-muted-foreground mb-1">Estimated Weekly Cashflow</p>
                <p className={`text-4xl font-bold ${calculations.weeklyCashflow >= 0 ? 'text-primary' : 'text-destructive'}`}>
                  {calculations.weeklyCashflow >= 0 ? '+' : ''}{formatCurrency(calculations.weeklyCashflow)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Before detailed expenses*</p>
              </div>

              {/* Loan Amount & Yearly Estimate */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Loan Amount</p>
                  <p className="text-xl font-bold text-foreground">{formatCurrency(calculations.loanAmount)}</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Yearly Estimate</p>
                  <p className={`text-xl font-bold ${calculations.yearlyCashflow >= 0 ? 'text-primary' : 'text-destructive'}`}>
                    {calculations.yearlyCashflow >= 0 ? '+' : ''}{formatCurrency(calculations.yearlyCashflow)}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={scrollToForm}
              >
                Get a Full Cashflow Analysis
              </Button>
            </div>
          </div>

          {/* Disclaimer - aligned below deposit section */}
          <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-5xl mx-auto lg:max-w-[50%] lg:mx-0 lg:ml-[calc((100%-80rem)/2)]">
            *Disclaimer: This is a simple estimation tool for illustrative purposes only. 
            It calculates gross rent minus interest only repayments. It does not factor in 
            council rates, insurance, management fees, maintenance, depreciation benefits, 
            or tax implications. Please consult a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
