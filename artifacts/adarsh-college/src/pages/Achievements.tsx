import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TOPPERS_2020 = [
  { rank: 1, name: "Shaikh Shifa Quaisar", marks: 405, percent: 93.07 },
  { rank: 2, name: "Ujawane Bhumika Dharmesh", marks: 592, percent: 91.07 },
  { rank: 3, name: "Sonawane Shweta Rajendra", marks: 591, percent: 90.92 },
  { rank: 4, name: "Shinde Srushti Subhash", marks: 590, percent: 90.76 },
  { rank: 5, name: "Patodakar Sawani Swanand", marks: 587, percent: 90.30 },
  { rank: 6, name: "Pachfule Arti Sakharam", marks: 585, percent: 90.00 },
];

const RESULTS = [
  { year: "2019-20", reg: 97, app: 96, dist: 89, g1: 7, g2: 0, pg: 0, pass: 96, pct: 100 },
  { year: "2020-21", reg: 87, app: 87, dist: 46, g1: 39, g2: 2, pg: 0, pass: 87, pct: 100 },
];

export default function Achievements() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-[104px] bg-background">
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Trophy className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Achievements</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Celebrating consistent 100% results and the brilliance of our toppers in HSC Board Examinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toppers - 90% Above */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="shadow-lg border-none overflow-hidden">
              <div className="h-2 w-full bg-secondary" />
              <CardHeader className="bg-white">
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Medal className="w-6 h-6 text-secondary" />
                  90% & Above — HSC Feb 2020
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-white p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead className="text-right">Total Marks</TableHead>
                      <TableHead className="text-right">Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {TOPPERS_2020.map((s) => (
                      <TableRow key={s.rank}>
                        <TableCell className="font-bold text-primary">#{s.rank}</TableCell>
                        <TableCell className="font-medium">{s.name}</TableCell>
                        <TableCell className="text-right">{s.marks}</TableCell>
                        <TableCell className="text-right font-bold text-secondary">{s.percent}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Results by grade */}
      <section className="py-12 md:py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Award className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Results by Grade</h2>
            <p className="text-muted-foreground">A 100% pass record sustained year after year in the Science stream.</p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead className="text-right">Registered</TableHead>
                  <TableHead className="text-right">Appeared</TableHead>
                  <TableHead className="text-right">Distinction</TableHead>
                  <TableHead className="text-right">Grade I</TableHead>
                  <TableHead className="text-right">Grade II</TableHead>
                  <TableHead className="text-right">Pass Grade</TableHead>
                  <TableHead className="text-right">Total Pass</TableHead>
                  <TableHead className="text-right">Pass %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RESULTS.map((r) => (
                  <TableRow key={r.year}>
                    <TableCell className="font-bold">{r.year}</TableCell>
                    <TableCell className="text-right">{r.reg}</TableCell>
                    <TableCell className="text-right">{r.app}</TableCell>
                    <TableCell className="text-right">{r.dist}</TableCell>
                    <TableCell className="text-right">{r.g1}</TableCell>
                    <TableCell className="text-right">{r.g2}</TableCell>
                    <TableCell className="text-right">{r.pg}</TableCell>
                    <TableCell className="text-right">{r.pass}</TableCell>
                    <TableCell className="text-right font-bold text-secondary">{r.pct}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-4 text-center">
            Stream: Science (Std XI &amp; XII). Source: HSC Board results published on adarshjcollege.com.
          </p>
        </div>
      </section>
    </main>
  );
}
