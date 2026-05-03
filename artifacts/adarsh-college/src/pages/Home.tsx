import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Trophy, Users, Microscope, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-24 md:pt-[104px]">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-campus.png" 
            alt="College Campus" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 text-white flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-medium text-sm mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Admissions Open for 2024-25
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white drop-shadow-md">
              Shaping the Future <br className="hidden md:block"/>
              of <span className="text-secondary">Young Science</span> Leaders.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-light">
              Rigorous academics meets genuine care in rural Maharashtra. Trust your child's future with an institution dedicated to excellence in Std XI & XII Science.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8 h-14 text-base rounded-full shadow-lg" asChild data-testid="btn-apply-hero">
                <Link href="/contact">Apply Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white font-medium px-8 h-14 text-base rounded-full backdrop-blur-sm" asChild data-testid="btn-courses-hero">
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats / Highlights Bar */}
      <section className="w-full bg-white relative z-20 -mt-10 mb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Expert Faculty", desc: "Dedicated educators guiding every step." },
              { icon: Microscope, title: "Modern Labs", desc: "State-of-the-art facilities for hands-on learning." },
              { icon: Trophy, title: "Proven Results", desc: "Consistent academic excellence year over year." }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-white border-none shadow-xl shadow-primary/5 hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-2">
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground">{stat.title}</h3>
                    <p className="text-muted-foreground">{stat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="w-full py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="/images/science-lab.png" 
                alt="Students in Lab" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20" />
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="w-8 h-0.5 bg-primary" /> About Us
            </div>
            <h2 className="text-4xl font-serif font-bold text-foreground leading-tight">
              A Legacy of Trust and Academic Excellence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Situated in Gaikwad Jalgaon, Adarsh Junior College is more than just a school. Under the guidance of OM SHIVKRUPA SHIKSHAN PRASARAK MANDAL, we provide an environment where young minds are nurtured with robust scientific knowledge and strong core values.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              {[
                "Recognized by Maharashtra Board",
                "Qualified & Caring Teachers",
                "Focus on Holistic Development",
                "Safe Rural Campus Environment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="link" className="mt-4 p-0 text-primary font-semibold text-base hover:text-secondary group" asChild data-testid="btn-read-more">
              <Link href="/about">
                Read Principal's Message <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Courses Teaser */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Science Programs</h2>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive courses for Std XI and XII in the Science stream, designed to prepare students for higher education and professional careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-border/50 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 overflow-hidden group">
                <div className="h-2 w-full bg-primary" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif mb-4 flex items-center justify-between">
                    Standard XI (Science) <span className="text-muted-foreground/30 font-sans text-4xl">11</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">Building a strong foundation in scientific principles, mathematics, and languages.</p>
                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold text-foreground">Core Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Physics", "Chemistry", "Biology", "English", "Maths/Geography"].map(sub => (
                        <span key={sub} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">{sub}</span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                    <Link href="/courses">View Eligibility</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-border/50 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 overflow-hidden group">
                <div className="h-2 w-full bg-secondary" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif mb-4 flex items-center justify-between">
                    Standard XII (Science) <span className="text-muted-foreground/30 font-sans text-4xl">12</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">Advanced preparation for board exams and crucial competitive entrance tests.</p>
                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold text-foreground">Core Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Physics", "Chemistry", "Biology", "English", "Crop Science"].map(sub => (
                        <span key={sub} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">{sub}</span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-primary transition-colors" asChild>
                    <Link href="/courses">View Eligibility</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative overflow-hidden bg-accent">
        <div className="absolute inset-0">
          <img src="/images/abstract-edu.png" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-screen" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Shape Your Future?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Join Adarsh Junior College and become part of a community dedicated to academic excellence and personal growth. Admissions for the current academic year are now open.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8 h-14 rounded-full w-full sm:w-auto" asChild data-testid="btn-contact-bottom">
                <Link href="/contact">Contact for Admission</Link>
              </Button>
              <span className="text-white/60 font-medium px-4">OR</span>
              <a href="tel:9422659856" className="text-white font-bold text-xl hover:text-secondary transition-colors">
                Call: 9422659856
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}