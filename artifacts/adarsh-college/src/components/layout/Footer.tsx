import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="https://adarshjcollege.com/wp-content/uploads/2020/10/Adarsh_College_Logo_Final.png" 
                  alt="Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-serif font-bold text-xl text-white">Adarsh Jr. College</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Run under OM SHIVKRUPA SHIKSHAN PRASARAK MANDAL, AURANGABAD. A premier institution dedicated to excellence in Science education for Std XI & XII.
            </p>
            <div className="mt-2 space-y-1 text-sm font-mono text-primary-foreground/70">
              <p>Index Code: J.12.12.026</p>
              <p>U-DISE: 27261103907</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Institution", href: "/about" },
                { label: "Science Courses", href: "/courses" },
                { label: "Academic Achievements", href: "/achievements" },
                { label: "Photo Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight className="w-4 h-4 text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full">Departments</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-0.5">Physics & Chemistry</p>
                  <a href="mailto:physics@adarshjcollege.com" className="hover:text-secondary block">physics@adarshjcollege.com</a>
                  <a href="mailto:chemistry@adarshjcollege.com" className="hover:text-secondary block">chemistry@adarshjcollege.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-0.5">Biology & Mathematics</p>
                  <a href="mailto:biology@adarshjcollege.com" className="hover:text-secondary block">biology@adarshjcollege.com</a>
                  <a href="mailto:maths@adarshjcollege.com" className="hover:text-secondary block">maths@adarshjcollege.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-serif mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Gaikwad Jalgaon, Tq. Shevgaon, Dist. Ahmednagar 414504, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col">
                  <span>9422659856 / 9921544856</span>
                  <span className="text-xs text-primary-foreground/60">Trust: 7588023221 / 8600144259</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@adarshjcollege.com" className="hover:text-secondary transition-colors">info@adarshjcollege.com</a>
                  <a href="mailto:principal@adarshjcollege.com" className="hover:text-secondary transition-colors">principal@adarshjcollege.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Adarsh Junior College. All rights reserved.</p>
          <p>Managed by OM SHIVKRUPA SHIKSHAN PRASARAK MANDAL</p>
        </div>
      </div>
    </footer>
  );
}