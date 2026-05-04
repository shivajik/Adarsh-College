import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "We will get back to you shortly regarding your inquiry.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <main className="w-full flex flex-col min-h-screen pt-[104px] bg-background">
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Reach out for admission inquiries, campus tours, or any other questions. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="shadow-lg border-none h-full">
                <CardContent className="p-8 md:p-10 space-y-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">College Address</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Adarsh Junior College<br/>
                            Gaikwad Jalgaon, Tq. Shevgaon,<br/>
                            Dist. Ahmednagar 414504,<br/>
                            Maharashtra, India
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">College Index: J.12.12.026 · U-DISE: 27261103907</p>
                          <h4 className="font-bold text-foreground mt-5 mb-1">Trust Address (OSSPM)</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Plot No. 43, Gut No. 91 Part, Samrat Nagar,<br/>
                            Behind Bembde Hospital, By Pass Satara Area,<br/>
                            Aurangabad 431001, Maharashtra
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Phone</h4>
                          <p className="text-muted-foreground">College: 9422659856 / 9921544856</p>
                          <p className="text-muted-foreground">Trust: 7588023221 / 8600144259</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Email</h4>
                          <p className="text-muted-foreground">info@adarshjcollege.com</p>
                          <p className="text-muted-foreground">principal@adarshjcollege.com</p>
                          <p className="text-muted-foreground">collegeadarsh2016@gmail.com</p>
                          <h4 className="font-bold text-foreground mt-4 mb-1">Department Emails</h4>
                          <p className="text-muted-foreground text-sm">physics@adarshjcollege.com</p>
                          <p className="text-muted-foreground text-sm">chemistry@adarshjcollege.com</p>
                          <p className="text-muted-foreground text-sm">biology@adarshjcollege.com</p>
                          <p className="text-muted-foreground text-sm">maths@adarshjcollege.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="shadow-lg border-none">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send an Inquiry</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student / Parent Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="10-digit mobile number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message / Inquiry Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="I would like to know about admission for Std XI..." 
                                className="min-h-[120px] resize-y"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full h-12 text-base font-bold bg-secondary text-primary hover:bg-secondary/90" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="w-full h-[400px] bg-muted relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.120717202393!2d75.1438997!3d19.3452146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb8f9e0eb6a213%3A0x8e83344634f19b8!2sAdarsh%20Junior%20College%2C%20Gaikwad%20Jalgaon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="College Location Map"
        />
      </section>
    </main>
  );
}