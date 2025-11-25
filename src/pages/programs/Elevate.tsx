import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Lightbulb } from "lucide-react";

const Elevate = () => {
  const phases = [
    {
      phase: "CREATE",
      weeks: "Weeks 1-4",
      title: "Your Why. Your Northstar.",
      icon: Lightbulb,
      outcomes: [
        "Discover your ideal career path",
        "Define your unique value proposition",
        "Build your personal brand identity",
        "Clarify your career vision and values",
      ],
      result: "Crystal-clear personal brand and career direction",
    },
    {
      phase: "FIND",
      weeks: "Weeks 5-8",
      title: "Your What. Your Strategy.",
      icon: Target,
      outcomes: [
        "Navigate the Swiss job market",
        "Tailored application strategy",
        "Craft standout materials",
        "Access the hidden job market",
      ],
      result: "Customized job search strategy and materials",
    },
    {
      phase: "SEIZE",
      weeks: "Weeks 9-12",
      title: "Your How. Your Empowerment.",
      icon: TrendingUp,
      outcomes: [
        "Master job acquisition",
        "Interview preparation and practice",
        "Salary negotiation mastery",
        "Build sustainable momentum",
      ],
      result: "Fully empowered to ace interviews and land offers",
    },
  ];

  const included = [
    {
      icon: Users,
      title: "12 Weekly Live Group Coaching",
      description: "Join a cohort of 5-10 ambitious professionals with real-time feedback from certified coaches.",
    },
    {
      icon: Target,
      title: "Bite-Sized Micro-Quests",
      description: "Stay motivated with engaging daily tasks, videos, templates, and tips via our app.",
    },
    {
      icon: CheckCircle,
      title: "Personalized Feedback",
      description: "Submit materials and receive expert guidance throughout your 12-week journey.",
    },
    {
      icon: TrendingUp,
      title: "Lifetime Alumni Access",
      description: "Join our alumni community for ongoing support and networking opportunities.",
    },
  ];

  const startDates = [
    { date: "December 1, 2025", seats: "3 seats remaining" },
    { date: "January 19, 2026", seats: "7 seats remaining" },
    { date: "March 2, 2026", seats: "10 seats available" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Transform Your Career in 12 Weeks
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CREATE your brand. FIND your opportunities. SEIZE your ideal role. 
              A comprehensive group coaching journey with community support and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
                <Link to="/contact">
                  Join Next Cohort
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex flex-col items-center sm:items-start justify-center">
                <p className="font-display text-2xl font-bold">CHF 4,750</p>
                <p className="text-sm text-muted-foreground">Total investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Phase Journey */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            A Proven 12-Week Journey to Career Success
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-3">
                    <phase.icon className="h-12 w-12 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">{phase.weeks}</p>
                      <h3 className="font-display text-2xl font-bold">{phase.phase}</h3>
                      <p className="text-lg font-semibold text-primary mt-1">{phase.title}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {phase.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold">Outcome:</p>
                    <p className="text-sm text-muted-foreground">{phase.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need to Succeed
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {included.map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <item.icon className="h-12 w-12 text-primary" />
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto mt-12 bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display text-2xl font-bold">Peer Networking & Community</h3>
              <p className="text-muted-foreground">
                Build valuable connections, share progress, and expand your Swiss network in a supportive environment. 
                Limited to 10 participants per cohort for personalized attention.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cohort Dates */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Secure Your Seat
            </h2>
            <p className="text-lg text-muted-foreground">
              Limited to 10 participants per cohort for personalized attention
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {startDates.map((cohort, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6 text-center space-y-3">
                    <p className="font-display text-xl font-bold">{cohort.date}</p>
                    <p className="text-sm text-primary font-semibold">{cohort.seats}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 mt-8">
              <Link to="/contact">
                Reserve Your Spot with 10% Deposit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="font-display text-3xl font-bold">Investment</h2>
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary">CHF 4,750</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold">Flexible Payment Options:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Full payment upfront:</strong> Save 3%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>2 installments:</strong> CHF 2,390/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>3 installments:</strong> CHF 1,600/month</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold">Payment Methods:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Credit card</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Apple Pay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Google Pay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>PayPal</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Swiss bank transfer</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-3 text-center">
                  <p className="text-sm">
                    <strong>Money-Back Guarantee:</strong> 20-day full refund if not satisfied
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 Tax-Deductible: Eligible for Swiss tax deduction (up to CHF 12,400/year)
                  </p>
                </div>

                <Button asChild size="lg" className="w-full btn-primary text-lg">
                  <Link to="/contact">
                    Join the Next Elevate Cohort
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect For
            </h2>

            <Card className="border-2">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Professionals seeking structured, step-by-step guidance",
                    "Job seekers who value community and peer support",
                    "Expats navigating the Swiss job market",
                    "Career changers needing comprehensive strategy",
                    "Anyone who wants expert feedback and accountability",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Transform Your Career in 12 Weeks
            </h2>
            <p className="text-lg text-white/90">
              Join the next cohort of ambitious professionals and secure your ideal role with proven methodology and expert guidance.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Elevate;
