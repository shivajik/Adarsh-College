import { motion } from "framer-motion";
import { Trophy, Medal, Award, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TOPPERS_2021 = [
  { rank: 1, seat: "P070417", name: "Natkar Pradip Bhausaheb", marks: 541, percent: 90.17 },
  { rank: 2, seat: "P070475", name: "Tupe Harshal Gajanan", marks: 541, percent: 90.17 },
  { rank: 3, seat: "P070547", name: "Gaikwad Anurag Bharat", marks: 541, percent: 90.17 },
  { rank: 4, seat: "P070560", name: "Jadhav Varad Laxmikant", marks: 541, percent: 90.17 },
  { rank: 5, seat: "P070647", name: "Raut Bhagyashri Bhagwat", marks: 542, percent: 90.33 },
  { rank: 6, seat: "P070561", name: "Khandebharad Varad Sureshrao", marks: 543, percent: 90.5 },
  { rank: 7, seat: "P070568", name: "Newade Shreenath Sakharam", marks: 543, percent: 90.5 },
  { rank: 8, seat: "P070583", name: "Lagad Harshad Dipak", marks: 543, percent: 90.5 },
  { rank: 9, seat: "P070618", name: "Doifode Sumit Shriram", marks: 543, percent: 90.5 },
  { rank: 10, seat: "P070425", name: "Veer Vishal Vasant", marks: 544, percent: 90.67 },
];

const MBBS_LIST = [
  "Mohalkar Gargi Ajay — N.K.P. Salve College, Nagpur",
  "Pawar Atharva Ramesh — B.J. Medical College, Pune",
  "Kale Garima Govind — K.M. Medical College, Mumbai",
  "Saoji Shrujal Deepak — Russian Medical College, Russia",
  "Wadgaonkar Sanika Avinash — Mamta Medical College, Hyderabad",
  "Chavan Sumeet Manoj — Government Medical College, Solapur",
  "Jaiswal Dhanishq Dilip — Government Medical College, Aurangabad",
  "Bhumare Satyajeet Lahurao — Government Medical College, Thane",
  "Khatavkar Jayati Dhananjay — B.J. Medical College, Pune",
  "Ambhure Narendra Prashant — M.G.M. College, Aurangabad",
  "Chaudhari Tanvi Prabhakar — Georgia Medical College, Ukraine",
  "Mule Shreya Sandip — K.M. Medical College, Mumbai",
  "Sane Sarvesh Kedar — M.G.M. College, Aurangabad",
  "Lohakare Soyami Sanjay — Russian Medical College, Russia",
  "Ladda Sakshi Jayprakash — J.J. Medical College, Mumbai",
  "Sukre Chaitali Shivaji — K.E.M. Medical College, Mumbai",
];
const BDS_LIST = ["Soni Shreya S.", "Newade S. S."];

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

// 2021-22 (Mar/Apr 2022) — 12th 90% Above
const TOPPERS_2022 = [
  { rank: 1, name: "Gunjkar Aishwarya Prabodh", percent: 95.83 },
  { rank: 2, name: "Jige Kirti Parmeshwar", percent: 95.5 },
  { rank: 3, name: "Dhonde Manasi Manohar", percent: 95.5 },
  { rank: 4, name: "Nalawade Sanika Prashant", percent: 95.5 },
  { rank: 5, name: "Mule Sagar Mukundrao", percent: 95.17 },
  { rank: 6, name: "Surana Diya Sachin", percent: 95.17 },
  { rank: 7, name: "Lahane Rasika Sudhir", percent: 95.0 },
  { rank: 8, name: "Puri Aditi Sanjay", percent: 94.83 },
  { rank: 9, name: "Kulkarni Shreekar Atul", percent: 94.83 },
  { rank: 10, name: "Ukhalkar Shubham Kulbhushan", percent: 94.83 },
];

// 2019-20 — MBBS / BDS combined (top 10 of 18 published)
const MBBS_BDS_2019 = [
  "Shaikh Shifa Quisar — Indra Gandhi Medical College, Badnapur",
  "Arjune Manjusha Dilip — D.A.V.O.V. Medical College, Pune",
  "Chourpagar Utkarsh Ravindra — Government Medical College, Akola",
  "Gahilot Pramod Padmakar — M.G.M. Medical College, Aurangabad",
  "Sonsale Pranav Gajanan — Ashwini Rural Medical College, Solapur",
  "Patodkar Sawani Swanand — Malla Reddy College, Hyderabad",
  "Udhan Shivam Rajendra — Vasantrao Naik Medical College, Yavatmal",
  "Jaiswal Palak Rajesh — Government Medical College, Kolhapur",
  "Belsare Kaushik Kishor — Dr. Vitthalrao Vikhe Patil Medical College, Ahmednagar",
  "Rangdal Siddhi Suresh — Government Medical College, Aurangabad",
];
const MBBS_2019 = [
  "Rangdal Siddhi S.", "Wahatule Prasad B.", "Sinde Shrushti S.", "Gadekar Advik M.",
  "Khade Rushikesh D.", "Sonanke Viraj V.", "Mahonor Shrna V.", "Tekale Ganesh E.", "Londe Gaurav S.",
];
const BDS_2019 = ["Narwade Devyani", "Thorat Sakshi S."];

// 2018-19 — MBBS / BDS LIST
const MBBS_BDS_2018 = [
  "Lad Aditi V.", "Rathod Shwetha D.", "Theng Nikita A.",
  "Gazi Fatheen A.", "Hatte Aniket S.", "Qureshi Amiz A.",
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
              Year-wise toppers, MBBS/BDS placements, and HSC results from 2018 to 2022.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year-wise tabs */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Tabs defaultValue="2021-22" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-10">
              <TabsTrigger value="2021-22">Mar/Apr 2022</TabsTrigger>
              <TabsTrigger value="2020-21">2020-21</TabsTrigger>
              <TabsTrigger value="2019-20">2019-20</TabsTrigger>
              <TabsTrigger value="2018-19">2018-19</TabsTrigger>
            </TabsList>

            {/* 2021-22 */}
            <TabsContent value="2021-22" className="space-y-8">
              <Card className="shadow-lg border-none overflow-hidden">
                <div className="h-2 w-full bg-primary" />
                <CardHeader className="bg-white">
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <Medal className="w-6 h-6 text-primary" /> 12th 90% Above — Mar/Apr 2022
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Rank</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead className="text-right">Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {TOPPERS_2022.map((s) => (
                        <TableRow key={s.rank}>
                          <TableCell className="font-bold text-primary">#{s.rank}</TableCell>
                          <TableCell className="font-medium">{s.name}</TableCell>
                          <TableCell className="text-right font-bold text-secondary">{s.percent}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 2020-21 */}
            <TabsContent value="2020-21" className="space-y-8">
              <Card className="shadow-lg border-none overflow-hidden">
                <div className="h-2 w-full bg-primary" />
                <CardHeader className="bg-white">
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <Medal className="w-6 h-6 text-primary" /> HSC Result 2021 — 90% &amp; Above
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Rank</TableHead>
                        <TableHead>Seat No.</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead className="text-right">Total Marks</TableHead>
                        <TableHead className="text-right">Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {TOPPERS_2021.map((s) => (
                        <TableRow key={s.seat}>
                          <TableCell className="font-bold text-primary">#{s.rank}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">{s.seat}</TableCell>
                          <TableCell className="font-medium">{s.name}</TableCell>
                          <TableCell className="text-right">{s.marks}</TableCell>
                          <TableCell className="text-right font-bold text-secondary">{s.percent}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-none overflow-hidden">
                <div className="h-2 w-full bg-secondary" />
                <CardHeader className="bg-white">
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <Medal className="w-6 h-6 text-secondary" /> 90% &amp; Above — HSC Feb 2020
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif flex items-center gap-2">
                      <Stethoscope className="w-6 h-6 text-secondary" /> M.B.B.S. Admissions 2020-21
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
                      {MBBS_LIST.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">B.D.S. Admissions 2020-21</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
                      {BDS_LIST.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 2019-20 */}
            <TabsContent value="2019-20" className="space-y-8">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-primary" /> MBBS &amp; BDS List 2019-20
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Sr.</TableHead>
                        <TableHead>Student &amp; College</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {MBBS_BDS_2019.map((s, i) => (
                        <TableRow key={s}>
                          <TableCell className="font-bold text-primary">{i + 1}</TableCell>
                          <TableCell>{s}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="text-xs text-muted-foreground italic mt-3">Top 10 of 18 published entries.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">MBBS 2019-20</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
                      {MBBS_2019.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">BDS List 2019-20</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
                      {BDS_2019.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 2018-19 */}
            <TabsContent value="2018-19" className="space-y-8">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-primary" /> MBBS &amp; BDS List 2018-19
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
                    {MBBS_BDS_2018.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
