import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";


const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Transform <span className="text-primary">Your Career?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Book your free 30-minute strategy call to discuss your career goals and find the perfect program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="font-display text-2xl font-bold">Book Your Free Strategy Call</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+41 XX XXX XX XX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Interested In</Label>
                    <select 
                      id="program" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a program</option>
                      <option value="accelerate">Accelerate Program</option>
                      <option value="elevate">Elevate Program</option>
                      <option value="executive">Executive Program</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="What are your career goals? What challenges are you facing?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from Career Bootcamp. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-display text-2xl font-bold">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:+41782228002" className="text-muted-foreground hover:text-primary transition-colors">
                          +41 78 222 80 02
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:michael@career-bootcamp.net" className="text-muted-foreground hover:text-primary transition-colors">
                          michael@career-bootcamp.net
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Office</p>
                        <p className="text-muted-foreground">
                          Bahnhofplatz 1<br />
                          8001 Zürich<br />
                          Switzerland
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Office Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 - 18:00<br />
                          Saturday - Sunday: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary/5 border-primary/20">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-xl font-bold">What Happens Next?</h3>
                  <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                    <li>Submit your inquiry using the form</li>
                    <li>We'll review your goals and respond within 24 hours</li>
                    <li>Schedule your free 30-minute strategy call</li>
                    <li>Discuss which program fits your needs</li>
                    <li>Start your career transformation journey</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-display text-xl font-bold">Frequently Asked Questions</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Is the strategy call really free?</p>
                      <p className="text-muted-foreground">Yes, absolutely! No strings attached.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">How long is the call?</p>
                      <p className="text-muted-foreground">30 minutes to understand your goals and recommend the best path.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Do I need to decide on a program right away?</p>
                      <p className="text-muted-foreground">Not at all. Take time to consider what's right for you.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
