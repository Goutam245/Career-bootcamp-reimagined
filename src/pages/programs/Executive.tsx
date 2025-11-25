import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Lock, Star, Crown } from "lucide-react";

const Executive = () => {
  const features = [
    {
      icon: Star,
      title: "Weekly 1-on-1 Sessions",
      description: "Private coaching with former C-level executives who've been in your shoes",
    },
    {
      icon: Crown,
      title: "Strategic Positioning",
      description: "Position yourself for C-level, board, or senior advisory roles",
    },
    {
      icon: Lock,
      title: "Complete Confidentiality",
      description: "Discreet guidance for sensitive career transitions",
    },
    {
      icon: Award,
      title: "Executive Network Access",
      description: "Connect with our network of board members, headhunters, and C-level leaders",
    },
  ];

  const included = [
    "Weekly private 1-on-1 coaching sessions (90 minutes)",
    "Personal executive brand strategy",
    "C-level positioning and messaging",
    "Executive search navigation",
    "Board positioning and readiness assessment",
    "Compensation package negotiation",
    "Confidential career transition planning",
    "Direct introductions to executive recruiters",
    "Ongoing support between sessions",
    "Lifetime advisory relationship",
  ];

  const ideal = [
    "C-suite executives seeking their next leadership role",
    "Senior leaders ready for board positions",
    "VPs and Directors aspiring to C-level",
    "Entrepreneurs transitioning to corporate leadership",
    "Leaders in confidential career transitions",
    "Executives navigating complex negotiations",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center p-4 bg-secondary/10 rounded-full">
              <Award className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Executive
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-secondary">
              VIP C-Level & Board Positioning
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elite 1-on-1 coaching for senior leaders ready to secure C-suite or board positions. 
              Strategic, confidential guidance from coaches who've held the roles you aspire to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
                <Link to="/contact">
                  Book Confidential Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex flex-col items-center sm:items-start justify-center">
                <p className="font-display text-2xl font-bold">From CHF 12,500</p>
                <p className="text-sm text-muted-foreground">Customized programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Executive Coaching */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The Stakes Are Higher. The Strategy Must Be Sharper.
            </h2>
            <p className="text-lg text-muted-foreground">
              At the executive level, every move matters. You need coaches who understand the 
              complexities of C-suite transitions, board dynamics, and high-stakes negotiations—
              because they've lived them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <feature.icon className="h-12 w-12 text-secondary" />
                  <h3 className="font-display text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What's Included
            </h2>

            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-secondary/5 border-2 border-secondary/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Lock className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Complete Confidentiality</h3>
                    <p className="text-muted-foreground">
                      We understand that executive transitions require absolute discretion. 
                      All sessions and communications are completely confidential. 
                      We've worked with leaders at Switzerland's top companies navigating 
                      sensitive career moves.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal Clients */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Ideal For
            </h2>

            <Card className="border-2">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {ideal.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Coach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Coached by Leaders Who've Been There
            </h2>

            <Card className="border-2">
              <CardContent className="p-8 md:p-12 space-y-6">
                <p className="text-lg">
                  Our Executive program is led by <strong>Michael M. Schmidt</strong> and a select team of 
                  former C-level executives, CHROs, and board members.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Former F1 executive leadership experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <span>ISO 17024, ICI, CAS certified coaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Former CHROs from Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Active board members and executive search consultants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Deep Swiss and international market expertise</span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic">
                  "We don't just study executive transitions—we've lived them. Our coaches have navigated 
                  the exact challenges you're facing, from C-suite positioning to board appointments to 
                  multi-million compensation negotiations."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="font-display text-3xl font-bold">Investment</h2>
                  <p className="font-display text-4xl md:text-5xl font-bold text-secondary">From CHF 12,500</p>
                  <p className="text-muted-foreground">Customized programs based on your goals and timeline</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold">Typical Programs:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span><strong>3-Month Intensive:</strong> CHF 12,500 - For targeted C-level positioning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span><strong>6-Month Comprehensive:</strong> CHF 22,500 - For complete executive transition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span><strong>Custom Programs:</strong> Tailored to your specific needs and timeline</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 space-y-3 text-center">
                  <p className="text-sm">
                    <strong>Money-Back Guarantee:</strong> 4-week full refund if not satisfied
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 Tax-Deductible: Eligible for Swiss tax deduction (up to CHF 12,400/year)
                  </p>
                  <p className="text-sm font-semibold">
                    Average ROI: 15x investment value
                  </p>
                </div>

                <Button asChild size="lg" className="w-full btn-primary text-lg">
                  <Link to="/contact">
                    Schedule Confidential Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Executive Success Stories
            </h2>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic">
                    "15 weeks from zero to C-Level. I wouldn't have believed it if someone had told me before. 
                    The Career Bootcamp method and Michael's ambitious, dynamic approach are unparalleled."
                  </p>
                  <div>
                    <p className="font-semibold">Stephan G.</p>
                    <p className="text-sm text-muted-foreground">CFO, Swiss Banking</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic">
                    "As a long-time COO, I wanted to pivot into a CEO role in an international A-Brand but 
                    struggled to enter the hidden executive job market. The personalized coaching and strategic 
                    advice were invaluable. I secured my CEO role!"
                  </p>
                  <div>
                    <p className="font-semibold">Peter L.</p>
                    <p className="text-sm text-muted-foreground">CEO, Global Sport Apparel Company</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Your Next Executive Move Starts Here
            </h2>
            <p className="text-lg text-white/90">
              Join Switzerland's top executives who've trusted Career Bootcamp for their most important 
              career transitions. Schedule your confidential consultation today.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">
                Book Confidential Consultation
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

export default Executive;
