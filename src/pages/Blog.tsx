import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, TrendingUp, Users, Target } from "lucide-react";

const Blog = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "LinkedIn Newsletter",
      description: "Weekly career insights, job market trends, and proven strategies delivered to your inbox.",
      action: "Subscribe Now",
    },
    {
      icon: TrendingUp,
      title: "Job Search Guides",
      description: "Comprehensive guides on navigating the Swiss job market, from CV writing to interview mastery.",
      action: "Explore Guides",
    },
    {
      icon: Users,
      title: "Career Development Articles",
      description: "Expert advice on personal branding, networking, and career advancement strategies.",
      action: "Read Articles",
    },
    {
      icon: Target,
      title: "Executive Insights",
      description: "Exclusive content for senior leaders on C-level positioning and board appointments.",
      action: "Access Insights",
    },
  ];

  const recentPosts = [
    {
      title: "5 AI Tools That Will 4x Your Job Search Speed in 2025",
      category: "AI & Technology",
      date: "2 days ago",
    },
    {
      title: "How to Access Switzerland's Hidden Job Market",
      category: "Swiss Job Market",
      date: "5 days ago",
    },
    {
      title: "The Executive's Guide to Board Positioning",
      category: "Executive Career",
      date: "1 week ago",
    },
    {
      title: "Salary Negotiation: Getting 20%+ More in Switzerland",
      category: "Negotiation",
      date: "1 week ago",
    },
    {
      title: "From Expat to Swiss Professional: Your 90-Day Roadmap",
      category: "Expat Career",
      date: "2 weeks ago",
    },
    {
      title: "LinkedIn Profile Optimization: The 2025 Formula",
      category: "Personal Branding",
      date: "2 weeks ago",
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
              Career Resources & <span className="text-primary">Expert Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with weekly career insights, job market trends, and proven strategies from 
              Switzerland's leading career coaching experts.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Join 2,000+ Career-Focused Professionals
            </h2>
            <p className="text-lg text-white/90">
              Get weekly career insights, Swiss job market trends, and exclusive tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white text-foreground"
              />
              <Button type="submit" size="lg" variant="secondary" className="sm:w-auto">
                Subscribe Free
              </Button>
            </form>
            <p className="text-sm text-white/70">
              Join our LinkedIn newsletter for exclusive career content and insider tips.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Explore Our Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <resource.icon className="h-12 w-12 text-primary" />
                  <h3 className="font-display text-2xl font-bold">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                  <Button variant="outline" className="btn-secondary">
                    {resource.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              Recent Articles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Popular Topics
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Swiss Job Market",
                "AI Tools",
                "Career Transition",
                "Executive Coaching",
                "Interview Preparation",
                "Salary Negotiation",
                "LinkedIn Strategy",
                "Personal Branding",
                "Expat Careers",
                "Networking",
                "CV Optimization",
                "Career Development",
              ].map((topic, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="btn-secondary"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
