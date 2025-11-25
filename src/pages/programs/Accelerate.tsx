import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Rocket, Clock, Zap, Award } from "lucide-react";

const Accelerate = () => {
  const features = [
    { icon: Zap, title: "12 Self-Paced Modules", description: "Master job search fundamentals at your own speed" },
    { icon: Award, title: "AI Advantage Training", description: "4x faster applications with AI tools" },
    { icon: Clock, title: "Career Bootcamp App", description: "Micro-quests and daily motivation" },
    { icon: CheckCircle, title: "1 Coaching Session", description: "Strategic guidance from executive coach" },
  ];

  const modules = [
    "Swiss Job Market Fundamentals",
    "CV Optimization for AI Screening",
    "LinkedIn Profile Mastery",
    "AI-Powered Application Tools",
    "Swiss Application Standards",
    "Networking Strategies",
    "Interview Preparation",
    "Salary Negotiation Basics",
    "Personal Brand Building",
    "Hidden Job Market Access",
    "Follow-up & Persistence",
    "Career Momentum Maintenance",
  ];

  const faqs = [
    {
      q: "How long do I have access to the modules?",
      a: "Lifetime access to all materials and updates.",
    },
    {
      q: "When can I schedule my coaching session?",
      a: "Anytime within 6 months of enrollment. Book directly via our calendar link.",
    },
    {
      q: "Do I need prior AI experience?",
      a: "No! Modules are designed for beginners to advanced users.",
    },
    {
      q: "Is this suitable for expats?",
      a: "Absolutely! Over 60% of our clients are expats navigating the Swiss job market.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full">
              <Rocket className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accelerate
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Fast-Track Your Swiss Job Search
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master AI-powered job search tools and Swiss application standards through 12 self-paced modules. 
              Perfect for professionals who want results without weekly coaching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
                <Link to="/contact">
                  Start Accelerate Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex flex-col items-center sm:items-start justify-center">
                <p className="font-display text-2xl font-bold">CHF 1,750/month</p>
                <p className="text-sm text-muted-foreground">× 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-display text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              12 Self-Paced Modules
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {modules.map((module, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Module {index + 1}</p>
                    <p className="text-muted-foreground">{module}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Your Outcome
            </h2>
            <p className="text-xl">
              Reskill for AI employability. Up to <span className="font-bold text-primary">4x faster</span> job search results.
            </p>
            <ul className="space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>AI-optimized CV that passes ATS filters</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>LinkedIn profile that attracts recruiters</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Swiss-standard application materials</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Strategic job search plan</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect For
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Job seekers who want to work at their own pace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Professionals looking to upskill with AI tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Career changers needing application optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Expats entering the Swiss job market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Anyone who values efficiency and fast results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Self-directed learners ready to take action</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="font-display text-3xl font-bold">Investment</h2>
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary">CHF 1,750/month</p>
                  <p className="text-muted-foreground">× 3 months</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold">Payment Options:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Credit card</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Apple Pay / Google Pay</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>PayPal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Swiss bank transfer</span>
                    </li>
                  </ul>
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
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Start Your Accelerate Journey Today
            </h2>
            <p className="text-lg text-white/90">
              Join hundreds of professionals who've fast-tracked their Swiss job search with AI-powered tools.
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

export default Accelerate;
