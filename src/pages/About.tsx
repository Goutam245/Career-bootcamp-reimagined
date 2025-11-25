import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, TrendingUp, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "250+", label: "Professionals Coached" },
    { icon: TrendingUp, value: "78%", label: "Interview Success Rate" },
    { icon: Award, value: "4.95/5", label: "Client Satisfaction" },
    { icon: Target, value: "Since 2019", label: "Established Swiss Leader" },
  ];

  const values = [
    {
      title: "Boutique Precision",
      description: "We're not a corporate coaching factory. We hand-select each coach and limit client intake to ensure exceptional quality.",
    },
    {
      title: "Executive-Level Expertise",
      description: "Our coaches have held the roles you aspire to—C-level, CHRO, board positions. They don't just study career transitions; they've lived them.",
    },
    {
      title: "Proven Methodology",
      description: "The Career Bootcamp Method combines AI integration, Swiss market expertise, and structured frameworks that deliver measurable results.",
    },
    {
      title: "Results-Driven",
      description: "We measure success by your success. 78% interview success rate and 4.95/5 client satisfaction speak for themselves.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Switzerland's Premier <span className="text-primary">Career Coaching Boutique</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Since 2019, we've transformed 250+ careers through our proven Career Bootcamp Method—
              combining executive-level coaching, AI integration, and deep Swiss market expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="pt-6 space-y-3">
                  <stat.icon className="h-10 w-10 text-primary mx-auto" />
                  <p className="font-display text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              From F1 to Career Coaching: Our Story
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Career Bootcamp was founded in 2019 by <strong className="text-foreground">Michael M. Schmidt</strong>, 
                a former Formula 1 executive who saw firsthand the gap between traditional career coaching and what 
                today's professionals actually need.
              </p>
              <p>
                After years in high-performance F1 leadership, Michael understood that career success requires the same 
                elements that drive victory on the track: <strong className="text-foreground">precision strategy, expert coaching, 
                and relentless execution</strong>.
              </p>
              <p>
                What started as boutique executive coaching has evolved into Switzerland's leading career transformation 
                platform—combining former C-level coaches, cutting-edge AI tools, and proven methodologies that have 
                helped 250+ professionals secure roles at UBS, Nestlé, Roche, Google, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-display text-2xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Certified. Experienced. Trusted.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-primary mx-auto" />
                  <p className="font-display text-xl font-bold">ISO 17024</p>
                  <p className="text-sm text-muted-foreground">International Coaching Certification</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-primary mx-auto" />
                  <p className="font-display text-xl font-bold">ICI Certified</p>
                  <p className="text-sm text-muted-foreground">International Coach Institute</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center space-y-3">
                  <Award className="h-12 w-12 text-primary mx-auto" />
                  <p className="font-display text-xl font-bold">CAS Certified</p>
                  <p className="text-sm text-muted-foreground">Certificate of Advanced Studies</p>
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-white/90">
              Join 250+ professionals who've trusted Career Bootcamp for their most important career moves.
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

export default About;
