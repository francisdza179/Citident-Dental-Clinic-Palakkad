import React from "react";
import { Layout, FadeIn } from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const PHONE = "+91 491 2529090";
const PHONE_RAW = "+914912529090";

export default function Contact() {
  usePageMeta({
    title: "Contact Us",
    description: "Get in touch with Citident Dental Clinic in Palakkad. Find our address, opening hours, and call to book."
  });

  const [copied, setCopied] = React.useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PHONE_RAW);
    setCopied(true);
    toast.success("Phone number copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help you achieve your best smile. Call us to schedule your consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-card border border-border/50 p-10 rounded-3xl shadow-sm h-full flex flex-col justify-center">
                
                <div className="flex items-start gap-6 mb-12 group">
                  <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Call to book</p>
                    <div className="flex items-center gap-4">
                      <a href={`tel:${PHONE_RAW}`} className="text-3xl md:text-4xl font-bold text-primary hover:text-secondary transition-colors">
                        {PHONE}
                      </a>
                      <button 
                        onClick={handleCopyPhone}
                        className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                        title="Copy phone number"
                      >
                        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 mb-12 group">
                  <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Clinic Address</p>
                    <p className="text-lg text-foreground leading-relaxed">
                      Priyadarshini Rd, opposite Aroma Cinemas<br/>
                      Parakkunnam, Palakkad<br/>
                      Kerala 678001
                    </p>
                    <p className="text-primary font-medium mt-2">Plus code: QMG3+J7 Palakkad</p>
                    <a href="https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                      <Button variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                        Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Opening Hours</p>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between gap-8 border-b border-border/50 pb-2">
                        <span className="text-foreground">Monday – Saturday</span>
                        <span className="font-medium text-primary">9:30 AM – 7:30 PM</span>
                      </div>
                      <div className="flex justify-between gap-8 text-muted-foreground pt-1">
                        <span>Sunday</span>
                        <span className="font-bold text-destructive">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="h-full min-h-[500px]">
              <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50 relative group">
                <iframe 
                  src="https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  className="absolute inset-0 grayscale-[0.5] contrast-125 group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
