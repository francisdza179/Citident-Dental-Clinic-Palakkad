import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoUrl from "@assets/generated_images/citident_logo.png";
import heroUrl from "@assets/Reception_-_Hero_Image_1776875350329.png";
import team1Url from "@assets/Doctor_with_Her_Team_1776875350328.jpg";
import patientProfileUrl from "@assets/Doctor_with_Patient_Profile_Pose_1776875350328.jpg";
import work1Url from "@assets/Dentists_at_Work_1776875350326.jpg";
import work2Url from "@assets/Doctor_Checking_Tooth_3_1776875350326.jpg";
import work3Url from "@assets/Dr._Priya_Dinesh_at_Work_1776875350329.jpg";
import alignersUrl from "@assets/Doctor_Presenting_Aligners_to_a_Patient_2_1776875350327.jpg";
import beforeAfterUrl from "@assets/Chipped_Tooth_Correction_1776875350325.jpg";
import patientHappyUrl from "@assets/Doctor_with_Patient_Straight_Pose_1776875350329.jpg";

const PHONE = "+914912529090";
const PHONE_LINK = `tel:${PHONE}`;
const MAPS_LINK = "https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Citident Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-none tracking-tight text-xl">Citident</span>
              <span className="font-malayalam text-xs text-muted-foreground mt-1">സിറ്റിഡൻ്റ് ഡെൻ്റൽ ക്ലിനിക്</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Mon-Sat, 9:30 AM - 7:30 PM</span>
            </div>
            <a href={PHONE_LINK}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
                Call to book
              </Button>
            </a>
          </div>
          <div className="md:hidden">
             <a href={PHONE_LINK}>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full">
                Call now
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] text-balance">
                Honest care for your family's smile.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Led by Dr. Priya Chandran, Citident is Palakkad's premium neighborhood clinic. We use cutting-edge equipment to provide conservative, comfortable care—saving teeth other clinics give up on.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-10 flex flex-wrap gap-4">
              <a href={PHONE_LINK}>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full px-8 h-14 text-base shadow-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to book
                </Button>
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-medium border-primary/20 hover:bg-primary/5">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Get directions
                </Button>
              </a>
            </FadeIn>
          </div>
          
          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src={heroUrl} 
                  alt="Citident Clinic Reception" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none"></div>
              </div>
            </FadeIn>
            
            {/* Floating badge */}
            <FadeIn delay={0.5} className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-border/50">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-foreground italic">"I went to see this dentist expecting my tooth can't be saved... Am very happy now to have got my smile back."</p>
              <p className="text-xs text-muted-foreground mt-2">— Bharathy MK</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <img src={team1Url} alt="Dr. Priya Chandran and team" className="rounded-2xl object-cover w-full h-full aspect-[4/5] shadow-md" />
                <img src={patientProfileUrl} alt="Dr. Priya with a patient" className="rounded-2xl object-cover w-full h-full aspect-[4/5] shadow-md mt-8" />
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Care that feels like family.</h2>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <p>
                    At Citident, we believe visiting the dentist shouldn't feel like a clinical transaction. We've designed a calm, inviting space where anxiety melts away, replaced by trust and transparency.
                  </p>
                  <p>
                    Led by Dr. Priya Chandran (B.D.S.), our team focuses on <strong>conservative dentistry</strong>. That means we explore every cutting-edge option to save your natural teeth before considering extractions. It's honest care, done right.
                  </p>
                </div>
                <div className="mt-10">
                  <a href={PHONE_LINK} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                    Meet Dr. Priya and the team <ChevronRight className="ml-1 w-5 h-5" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Care</h2>
            <p className="text-muted-foreground text-lg">From routine check-ups to complex restorations, we utilize state-of-the-art technology to deliver precise, comfortable treatments.</p>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { title: "General Dentistry & Check-ups", desc: "Thorough exams, cleanings, and preventative care for all ages." },
              { title: "Root Canal Treatment", desc: "Pain-free procedures to save infected or severely decayed teeth." },
              { title: "Tooth Restoration & Crowns", desc: "Durable, natural-looking crowns and fillings to restore function." },
              { title: "Clear Aligners / Orthodontics", desc: "Modern, invisible alignment solutions for a perfectly straight smile." },
              { title: "Cosmetic Dentistry", desc: "Veneers and aesthetic procedures to craft the smile you've always wanted." },
              { title: "Teeth Whitening", desc: "Professional brightening treatments for a radiant, confident look." },
              { title: "Digital Dental X-ray", desc: "Advanced imaging for precise diagnostics with minimal radiation." },
              { title: "Sterilisation & Hygiene", desc: "Rigorous protocols ensuring a pristine, safe environment for every patient." }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group">
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / Capability */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">State-of-the-art equipment. Exceptional precision.</h2>
              <p className="text-primary-foreground/80 text-lg max-w-md mb-10">
                We invest in advanced dental technology not just for the sake of it, but because it means faster, safer, and more comfortable treatments for you and your family.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-primary-foreground/10 pt-10">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-primary-foreground/70">Sterilisation protocol adherence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">Digital</div>
                  <div className="text-sm text-primary-foreground/70">Low-radiation imaging</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={work1Url} alt="Dentists at work" className="rounded-2xl object-cover w-full h-full aspect-square" />
                <img src={work2Url} alt="Doctor with loupes" className="rounded-2xl object-cover w-full h-full aspect-square mt-8" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                <img src={beforeAfterUrl} alt="Before and After Chipped Tooth Correction" className="w-full rounded-xl" />
                <div className="absolute inset-x-0 bottom-8 flex justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm text-sm font-bold text-primary uppercase tracking-wider">
                    Before / After — Chipped Tooth Correction
                  </div>
                </div>
               </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Results that change lives.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                A badly broken or chipped tooth doesn't always mean an extraction. Our conservative approach means we exhaust every option to restore your natural smile seamlessly.
              </p>
              <a href={PHONE_LINK}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8">
                  Book a consultation
                </Button>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
           <FadeIn className="flex flex-col items-center mb-16">
            <img src={patientHappyUrl} alt="Happy Patient" className="w-24 h-24 rounded-full object-cover mb-6 shadow-md border-4 border-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Loved by Palakkad families.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "CitiDental clinic provides exemplary dental care in a warm and inviting atmosphere. The clinic boasts state-of-the-art equipment, ensuring cutting-edge treatments and procedures. The team, led by a skilled dentist, demonstrates exceptional professionalism and a profound understanding of oral health. Their commitment to patient well-being is evident in every interaction, making CitiDental a premier choice for comprehensive and advanced dental services.",
                author: "Ameen"
              },
              {
                text: "I went to see this dentist with a badly broken tooth expecting that it can't be saved, but was amazed with the different options that were available and which were explained very nicely by Dr. Kumar. Am very happy now to have got my smile back.",
                author: "Bharathy MK"
              },
              {
                text: "Excellent service. They even accommodated my request for consultation on short notice. I strongly recommend.",
                author: "Balasubrahmanian R.V."
              },
              {
                text: "I just consulted this dentist with a badly broken tooth expecting that it can't be saved, but my tooth was saved — amazed with the different options. Thank you, doctor. Am very happy now because I got my smile back.",
                author: "Nikhil K.V."
              }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/80 text-lg leading-relaxed flex-grow italic">"{review.text}"</p>
                  <p className="mt-6 font-bold text-primary">— {review.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Footer */}
      <footer className="bg-primary text-primary-foreground pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white p-2 rounded-xl">
                  <img src={logoUrl} alt="Citident Logo" className="h-10 w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl leading-none tracking-tight">Citident</span>
                  <span className="font-malayalam text-sm text-primary-foreground/70 mt-1">സിറ്റിഡൻ്റ് ഡെൻ്റൽ ക്ലിനിക്</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-lg max-w-sm mb-10">
                Palakkad's premium family dental clinic providing cutting-edge, honest care.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-lg mb-1">Clinic Address</p>
                    <p className="text-primary-foreground/70">Priyadarshini Rd, opposite Aroma Cinemas<br/>Parakkunnam, Palakkad, Kerala 678001</p>
                    <p className="text-primary-foreground/50 text-sm mt-1">Plus code: QMG3+J7 Palakkad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-lg mb-1">Contact</p>
                    <a href={PHONE_LINK} className="text-primary-foreground/70 hover:text-white transition-colors block text-xl font-medium">
                      +91 491 2529090
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-lg mb-1">Opening Hours</p>
                    <p className="text-primary-foreground/70">Monday – Saturday: 9:30 AM – 7:30 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Citident Dental Clinic"
                className="absolute inset-0 grayscale contrast-125"
              ></iframe>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Citident Dental Clinic. All rights reserved.</p>
            <p>Palakkad, Kerala</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
