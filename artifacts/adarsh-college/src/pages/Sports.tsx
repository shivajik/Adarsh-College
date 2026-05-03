import { motion } from "framer-motion";
import { Activity, Dumbbell, Flag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Sports() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-[104px] bg-background">
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Activity className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sports & Athletics</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Nurturing physical fitness, teamwork, and competitive spirit alongside academics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="border-dashed border-2 border-border bg-white shadow-sm py-16">
              <CardContent className="flex flex-col items-center justify-center space-y-6">
                <div className="flex gap-4 justify-center text-muted-foreground/30 mb-2">
                  <Dumbbell className="w-8 h-8" />
                  <Flag className="w-10 h-10 -mt-2 text-secondary/40" />
                  <Activity className="w-8 h-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Champions in the Making</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  At Adarsh Junior College, we believe a healthy body houses a healthy mind. Our students actively participate in district and state-level tournaments.
                  <br/><br/>
                  We are currently updating our sports gallery and recent tournament victories. Please check back soon to see our athletes in action!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}