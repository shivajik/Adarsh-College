import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const COMMITTEE = [
  { role: "President", name: "Mr. Ashokraoji Gangadhar Gaikwad", qual: "B.Sc, D.L.L.&W., L.L.B., M.B.A." },
  { role: "Vice President", name: "Mr. Nitinrao K. Naiknaware", qual: "M.Sc, B.Ed." },
  { role: "Secretary", name: "Prof. Nandkishore Gangadhar Gaikwad", qual: "M.Sc, M.Ed." },
  { role: "Treasurer", name: "Mrs. Alka N. Gaikwad", qual: "M.A, B.P.Ed." },
  { role: "Member", name: "Mrs. Mrunalini A. Gaikwad", qual: "M.A." },
  { role: "Member", name: "Mrs. Sangita R. Gaikwad", qual: "M.A." },
  { role: "Member", name: "Mr. Shivajirao T. Dhage", qual: "" },
];

export default function About() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-[104px] bg-background">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Our Institution</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Discover the legacy, the people, and the philosophy behind Adarsh Junior College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-32">
                <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                    <User className="w-32 h-32" />
                  </div>
                  {/* Placeholder for actual principal photo if provided later */}
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Principal's Desk</h3>
                <p className="text-muted-foreground">Adarsh Junior College</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-16 h-16 text-primary/10 mb-6" />
              <div className="prose prose-lg prose-slate text-muted-foreground">
                <p className="lead text-2xl font-serif text-foreground font-medium mb-8">
                  "Educating youth in the 21st century is going to be stirring and challenging."
                </p>
                <p>
                  The opportunities the new millennium provides young people are infinite. Along with being a successful person, try to become a man of value — self-discipline, honesty, integrity, positive attitude are essential.
                </p>
                <p>
                  God has given us divinity and we must use education to find that divinity and choose what we want to become in life. We at Adarsh Junior College put emphasis on excellent education, backed by excellent teaching faculty.
                </p>
                <p>
                  Our teachers are like candles — they consume themselves to light the way for others. We train young brains with the latest technology, equipped with good labs in Physics, Chemistry, Biology and Crop Science.
                </p>
                <p className="font-bold text-primary mt-8">
                  Finally: "We cannot always build the future of our youth, but we can build the youth for the future."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Management */}
      <section className="py-20 bg-background relative border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Management Committee</h2>
            <p className="text-muted-foreground">
              Run under OM SHIVKRUPA SHIKSHAN PRASARAK MANDAL, AURANGABAD. Guided by experienced visionaries committed to rural education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMITTEE.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-border hover:border-primary/30 transition-colors shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-secondary font-bold uppercase tracking-wider">{member.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-1">{member.name}</h3>
                    {member.qual && <p className="text-sm text-muted-foreground">{member.qual}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}