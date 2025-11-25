import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, Users, Award, TrendingUp, Rocket } from "lucide-react";

const Index = () => {
  const trustIndicators = [
    { icon: Star, text: "4.95/5 Client Satisfaction" },
    { icon: CheckCircle, text: "78% Interview Success Rate" },
    { icon: Award, text: "ISO 17024, ICI, CAS Certified" },
    { icon: Users, text: "250+ Professionals Coached" },
    { icon: TrendingUp, text: "Founded 2019" },
  ];

  const programs = [
    {
      icon: Rocket,
      name: "Accelerate",
      tagline: "Fast-Track Your Swiss Job Search",
      description: "Self-paced AI-powered modules for rapid career advancement",
      price: "CHF 1,750/month × 3",
      features: ["12 online modules", "AI advantage training", "1 coaching session", "Career app access"],
      link: "/programs/accelerate",
    },
    {
      icon: TrendingUp,
      name: "Elevate",
      tagline: "Transform Your Career in 12 Weeks",
      description: "Comprehensive group coaching with community support",
      price: "CHF 4,750 total",
      features: ["12 weekly sessions", "Group coaching", "Networking community", "Lifetime alumni access"],
      link: "/programs/elevate",
      featured: true,
    },
    {
      icon: Award,
      name: "Executive",
      tagline: "VIP C-Level & Board Positioning",
      description: "Elite 1-on-1 coaching for senior leaders",
      price: "From CHF 12,500",
      features: ["Weekly 1-on-1 sessions", "Strategic positioning", "Confidential guidance", "Executive network"],
      link: "/programs/executive",
    },
  ];

  const testimonials = [
    {
      name: "Peter L.",
      role: "CEO, Global Sport Apparel",
      content: "As a long-time COO, I wanted to pivot into a CEO role but struggled to enter the hidden executive job market. The personalized coaching was invaluable. I secured my CEO role!",
      rating: 5,
    },
    {
      name: "Sandra K.",
      role: "CEO Assistant",
      content: "The ELEVATE program was a game-changer for my job search in Switzerland. The structured roadmap gave me the direction I needed. I landed my first job in just 20 weeks!",
      rating: 5,
    },
    {
      name: "Dr. Andreas C.",
      role: "Sports Apparel Executive",
      content: "Michael's Career Bootcamp methodology is truly one of a kind—high-impact, goal-driven, efficient and fun. Truly transformative executive career coaching.",
      rating: 5,
    },
  ];

  const companies = [
    "UBS", "Nestlé", "Roche", "Novartis", "Swiss Re", "Zürich Insurance", 
    "ABB", "Schindler", "Google", "Julius Bär", "Lindt", "Lonza"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Secure Your Next Great Role in Switzerland-<span className="text-primary">Faster, Smarter</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join 250+ professionals who've transformed their careers since 2019 with our proven Career Bootcamp Method. 
              From job seekers to C-level executives, we deliver results through hand-selected expert coaches.
            </p>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
                <Link to="/contact">
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-6">
                <Link to="#programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Agitation Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The Swiss Job Market in 2025: Tougher Than Ever-But Not Impossible
            </h2>
            <p className="text-lg text-muted-foreground">
              Since 2019, we've helped 250+ professionals navigate these exact challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-display text-xl font-bold">Job Seekers & Expats</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hundreds of applications, zero responses</li>
                  <li>• AI filters blocking your CV</li>
                  <li>• Swiss "hidden job market" feels impossible</li>
                  <li>• Don't know how to "Swissify" applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-display text-xl font-bold">Mid-Career Professionals</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stuck in the wrong role, unclear next steps</li>
                  <li>• Personal brand doesn't reflect your value</li>
                  <li>• Networking feels awkward and ineffective</li>
                  <li>• Need structured guidance, not generic advice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-display text-xl font-bold">Executives & Leaders</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ready for C-level but unclear how to position</li>
                  <li>• Executive search process feels opaque</li>
                  <li>• Compensation negotiation anxiety</li>
                  <li>• Need coaches who've held C-level roles</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-lg mt-12 max-w-3xl mx-auto">
            You're not alone. Since 2019, we've pioneered a proven methodology that combines boutique precision 
            with executive-level expertise. Welcome to Career Bootcamp—where former F1 executives, CHROs, 
            and C-level leaders coach you to victory.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Three Programs. One Mission: Your Career Success.
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the path that fits your ambition and career stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className={`relative border-2 hover:shadow-xl transition-all ${
                  program.featured ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {program.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-3">
                    <program.icon className="h-12 w-12 text-primary" />
                    <h3 className="font-display text-2xl font-bold">{program.name}</h3>
                    <p className="text-sm font-semibold text-primary">{program.tagline}</p>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-display text-2xl font-bold">{program.price}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full btn-primary">
                    <Link to={program.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Real People. Real Results. Real Career Success.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            Where Our Clients Have Landed
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 text-muted-foreground/60 font-semibold hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready to Secure Your Next Great Role?
            </h2>
            <p className="text-lg text-white/90">
              Join 250+ professionals who've transformed their careers with Career Bootcamp. 
              Book your free strategy call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/70">
              💡 Tax-Deductible Investment: Career coaching qualifies as professional education in most Swiss cantons (up to CHF 12,400/year)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
