import { motion } from "framer-motion";
import { CheckCircle2, FileText, AlertCircle, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function Courses() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-[104px] bg-background">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        <img 
          src="/images/abstract-edu.png" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Science Stream</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Comprehensive curriculum for Standard XI & XII, preparing students for board exams and competitive futures.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Subjects */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-none overflow-hidden">
                  <div className="h-2 w-full bg-secondary" />
                  <CardHeader className="bg-white pb-4">
                    <CardTitle className="text-2xl font-serif flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-primary" />
                      Available Subjects
                    </CardTitle>
                    <CardDescription className="text-base">
                      Students must select subjects according to the Maharashtra State Board guidelines.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-white p-6 pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Languages (Compulsory)</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-sm py-1.5 px-4 bg-primary/5 text-primary border-primary/20">English</Badge>
                          <Badge variant="outline" className="text-sm py-1.5 px-4 bg-primary/5 text-primary border-primary/20">Marathi / Pali</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Core Science</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-sm py-1.5 px-4">Physics</Badge>
                          <Badge variant="secondary" className="text-sm py-1.5 px-4">Chemistry</Badge>
                          <Badge variant="secondary" className="text-sm py-1.5 px-4">Biology</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Optional / Elective</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Mathematics</Badge>
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Geography</Badge>
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Psychology</Badge>
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Crop Science</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3 italic">
                          * Options may vary between Std XI and XII depending on batch availability and board rules.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Eligibility Criteria</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>SSC (10th) passed from Maharashtra State Board or equivalent recognized board.</span>
                      </li>
                      <li className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Minimum <strong>50% marks</strong> for Open category students.</span>
                      </li>
                      <li className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Minimum <strong>45% marks</strong> for Reserved category students.</span>
                      </li>
                    </ul>
                    <Alert className="mt-4 bg-amber-50 border-amber-200">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <AlertTitle className="text-amber-800">Out of State Students</AlertTitle>
                      <AlertDescription className="text-amber-700/80">
                        Students from boards outside Maharashtra require a separate Eligibility Certificate from the divisional board.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar - Documents */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <Card className="bg-primary text-white border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif flex items-center gap-2">
                      <FileText className="w-5 h-5 text-secondary" />
                      Required Documents
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/70">
                      Please bring original + 2 xerox copies of the following during admission:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        "Original School Leaving Certificate (TC)",
                        "SSC (10th) Marks Memo",
                        "4 Recent Passport Size Photos",
                        "Aadhar Card Copy",
                        "Caste Certificate (if applicable)",
                        "Eligibility Certificate (for out-of-state)"
                      ].map((doc, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary text-xs">
                            {i+1}
                          </span>
                          <span className="mt-0.5">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}