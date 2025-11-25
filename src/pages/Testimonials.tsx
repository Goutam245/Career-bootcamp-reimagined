import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Stephan G.",
      role: "CFO, Swiss Banking",
      content: "15 weeks from zero to C-Level. I wouldn't have believed it if someone had told me before. The Career Bootcamp method and Michael's ambitious, dynamic approach are unparalleled. Plus, deducting the program cost from taxes made this a no-brainer investment.",
      rating: 5,
      program: "Executive",
    },
    {
      name: "Peter L.",
      role: "CEO, Global Sport Apparel Company",
      content: "As a long-time COO, I wanted to pivot into a CEO role in an international A-Brand but struggled to enter the hidden executive job market. The personalized coaching and strategic advice were invaluable. I secured my CEO role!",
      rating: 5,
      program: "Executive",
    },
    {
      name: "Sandra K.",
      role: "CEO Assistant (formerly self-employed)",
      content: "The ELEVATE program was a game-changer for my job search in Switzerland and Austria. The structured roadmap gave me the direction I needed. I landed my first job in just 20 weeks!",
      rating: 5,
      program: "Elevate",
    },
    {
      name: "Dr. Andreas C.",
      role: "Sports Apparel Executive",
      content: "Michael's Career Bootcamp methodology is truly one of a kind—high-impact, goal-driven, efficient and fun. If you want truly transformative executive career coaching, Michael is in a class of his own.",
      rating: 5,
      program: "Executive",
    },
    {
      name: "Eva L.",
      role: "Global Supply Manager, Pharmaceutical",
      content: "As an expat, I was struggling to adapt my CV to Swiss standards. The personalized coaching and AI tools training were invaluable. My applications improved dramatically, and I started getting interviews almost immediately. The confidence boost was real!",
      rating: 5,
      program: "Accelerate",
    },
    {
      name: "Lorena C.",
      role: "Diversity Manager, Big Pharma",
      content: "The structured roadmap cut my job search time in half. I negotiated a 22% higher salary thanks to their coaching!",
      rating: 5,
      program: "Elevate",
    },
  ];

  const companies = [
    "UBS", "Credit Suisse", "Nestlé", "Roche", "Novartis", "Swiss Re",
    "Zürich Insurance", "ABB", "Schindler", "Google", "UNESCO", "UNHCR",
    "Julius Bär", "Lindt", "Lonza", "Swisslife", "Toyota", "BMW",
    "Audi", "Continental"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Real People. Real Results. <span className="text-primary">Real Career Success.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join 250+ professionals who've transformed their careers with Career Bootcamp. 
              Read their stories and see what's possible for your career.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-semibold">4.95/5 Client Satisfaction</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">78% Interview Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                      {testimonial.program}
                    </span>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.content}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Where Our Clients Have Landed
            </h2>
            <p className="text-lg text-muted-foreground">
              Our clients have secured positions at Switzerland's and the world's leading organizations
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {companies.map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-muted/50 rounded-lg text-muted-foreground/70 font-semibold hover:text-foreground hover:bg-muted transition-all"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Success by the Numbers
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-2">
                  <p className="font-display text-4xl font-bold text-primary">8-12 weeks</p>
                  <p className="text-muted-foreground">Average time to first interviews</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-2">
                  <p className="font-display text-4xl font-bold text-primary">18-24 weeks</p>
                  <p className="text-muted-foreground">Average time to secure position</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-2">
                  <p className="font-display text-4xl font-bold text-primary">15x ROI</p>
                  <p className="text-muted-foreground">Average return on investment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white/90">
              Join hundreds of professionals who've transformed their careers with Career Bootcamp. 
              Your success story could be next.
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

export default Testimonials;
