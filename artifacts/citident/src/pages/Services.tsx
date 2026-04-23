import React from "react";
import { Layout, FadeIn } from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";

import alignersUrl from "@assets/Doctor_Presenting_Aligners_to_a_Patient_2_1776875350327.jpg";
import work3Url from "@assets/Dr._Priya_Dinesh_at_Work_1776875350329.jpg";
import beforeAfterUrl from "@assets/Chipped_Tooth_Correction_1776875350325.jpg";

export default function Services() {
  usePageMeta({
    title: "Our Services",
    description: "Comprehensive dental services at Citident: general dentistry, root canals, clear aligners, and cosmetic procedures."
  });

  const services = [
    { 
      title: "General Dentistry & Check-ups", 
      desc: "Thorough exams, professional cleanings, and preventative care for patients of all ages. Regular check-ups help us catch issues early before they become complex problems." 
    },
    { 
      title: "Root Canal Treatment", 
      desc: "Pain-free procedures using advanced rotary instruments to save infected or severely decayed teeth. We prioritize comfort and efficient healing." 
    },
    { 
      title: "Tooth Restoration & Crowns", 
      desc: "Durable, natural-looking crowns, bridges, and fillings designed to seamlessly restore the function and aesthetic of your smile after damage." 
    },
    { 
      title: "Clear Aligners / Orthodontics", 
      desc: "Modern, near-invisible alignment solutions for a perfectly straight smile without the hassle of traditional metal braces." 
    },
    { 
      title: "Cosmetic Dentistry", 
      desc: "High-quality veneers, bonding, and aesthetic procedures to craft the exact smile you've always wanted, tailored to your facial structure." 
    },
    { 
      title: "Teeth Whitening", 
      desc: "Professional brightening treatments that are safe for your enamel and deliver a radiant, confident look in just one session." 
    },
    { 
      title: "Digital Dental X-ray", 
      desc: "Advanced imaging technology for precise, instant diagnostics with significantly lower radiation exposure than traditional x-rays." 
    },
    { 
      title: "Sterilisation & Hygiene", 
      desc: "Rigorous, multi-step infection control protocols ensuring a pristine, completely safe clinical environment for every single patient." 
    }
  ];

  return (
    <Layout>
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From routine check-ups to complex restorations, we combine advanced technology with a conservative, tooth-saving approach.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group h-full">
                <div className="bg-card border border-border/60 p-8 rounded-3xl h-full flex flex-col hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 group-hover:scale-110">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow relative z-10">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* In-Treatment Visuals */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={alignersUrl} alt="Doctor presenting clear aligners" className="w-full h-full object-cover aspect-[4/3]" />
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Modern solutions.</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Whether you're looking for clear aligners to straighten your teeth discreetly, or need a painless root canal, we ensure you understand every step of the process.
            </p>
            <div className="flex gap-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={work3Url} alt="Dr. Priya Dinesh at work" 
                className="w-1/2 rounded-2xl object-cover aspect-square shadow-lg" 
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Before / After Focus */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Proof in the results.</h2>
            <p className="text-muted-foreground text-lg">
              We specialize in seamless cosmetic restorations that look and function exactly like natural teeth.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border border-border/50"
            >
              <img src={beforeAfterUrl} alt="Before and After Chipped Tooth Correction" className="w-full rounded-2xl" />
              <div className="absolute inset-x-0 bottom-8 flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg text-sm font-bold text-primary uppercase tracking-wider">
                  Before / After — Chipped Tooth Correction
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
