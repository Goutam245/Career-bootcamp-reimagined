import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-primary">
              Career Bootcamp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                to="/programs/accelerate"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Accelerate
              </Link>
              <Link
                to="/programs/elevate"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Elevate
              </Link>
              <Link
                to="/programs/executive"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Executive
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/testimonials"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Success Stories
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Resources
              </Link>
            </div>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">Book Free Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              to="/programs/accelerate"
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Accelerate
            </Link>
            <Link
              to="/programs/elevate"
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Elevate
            </Link>
            <Link
              to="/programs/executive"
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Executive
            </Link>
            <Link
              to="/about"
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Button asChild className="w-full btn-primary" onClick={() => setIsOpen(false)}>
              <Link to="/contact">Book Free Call</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
