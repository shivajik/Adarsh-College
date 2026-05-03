import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/achievements", label: "Academics" },
  { href: "/sports", label: "Sports" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"}`}>
      {/* Top Bar */}
      {!isScrolled && (
        <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 pb-3 border-b border-border/40 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> 9422659856 / 9921544856</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> info@adarshjcollege.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span>College Index: J.12.12.026</span>
            <span>|</span>
            <span>U-DISE: 27261103907</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="https://adarshjcollege.com/wp-content/uploads/2020/10/Adarsh_College_Logo_Final.png" 
            alt="Adarsh Junior College Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl md:text-2xl text-primary leading-tight">Adarsh Junior College</span>
            <span className="text-xs md:text-sm text-secondary-foreground font-medium tracking-wide">Science (Std XI & XII)</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location === link.href 
                  ? "bg-primary/5 text-primary" 
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="ml-4 font-semibold" asChild data-testid="btn-admissions">
            <Link href="/contact">Admissions Open</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="p-2 lg:hidden text-foreground hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                location === link.href 
                  ? "bg-primary/5 text-primary" 
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-4 w-full" asChild onClick={() => setMobileMenuOpen(false)}>
            <Link href="/contact">Admissions Open</Link>
          </Button>
        </div>
      )}
    </header>
  );
}