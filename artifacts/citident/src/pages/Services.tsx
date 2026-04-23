import React from "react";
import { Layout, FadeIn } from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Activity,
  Crown,
  Smile,
  Sparkles,
  Sun,
  Scan,
  ShieldCheck,
  Baby,
  Anchor,
  type LucideIcon,
} from "lucide-react";

import alignersUrl from "@assets/Doctor_Presenting_Aligners_to_a_Patient_2_1776875350327.jpg";
import work3Url from "@assets/Dr._Priya_Dinesh_at_Work_1776875350329.jpg";
import beforeAfterUrl from "@assets/Chipped_Tooth_Correction_1776875350325.jpg";

export default function Services() {
  usePageMeta({
    title: "Our Services",
    description: "Comprehensive dental services at Citident: general dentistry, root canals, clear aligners, implants, kids dentistry, and cosmetic procedures."
  });

  const services: { title: string; desc: string; Icon: LucideIcon }[] = [
    {
      title: "General Dentistry & Check-ups",
      Icon: Stethoscope,
      desc: "Comprehensive oral exams, scaling, polishing, and preventative care for the whole family. Regular visits help us catch decay, gum issues, and bite problems early — before they turn into anything bigger."
    },
    {
      title: "Root Canal Treatment",
      Icon: Activity,
      desc: "Painless, single-sitting and multi-sitting root canals using advanced rotary endodontic instruments. We save badly infected or broken teeth that other clinics often suggest extracting."
    },
    {
      title: "Tooth Restoration & Crowns",
      Icon: Crown,
      desc: "Strong, natural-looking zirconia and ceramic crowns, bridges, inlays, and tooth-coloured fillings that restore both function and appearance — built to last and blend seamlessly with your smile."
    },
    {
      title: "Clear Aligners & Orthodontics",
      Icon: Smile,
      desc: "Near-invisible clear aligners and modern braces to gently straighten teeth, close gaps, and correct bite issues — designed digitally and tailored to your smile and lifestyle."
    },
    {
      title: "Cosmetic Dentistry",
      Icon: Sparkles,
      desc: "Smile makeovers using veneers, composite bonding, edge reshaping, and gum contouring. We plan every case around your face shape so the result looks beautifully natural — never overdone."
    },
    {
      title: "Teeth Whitening",
      Icon: Sun,
      desc: "Professional in-clinic whitening and take-home kits that brighten teeth safely without harming enamel. Visible results in a single session, with sensitivity care built into the process."
    },
    {
      title: "Dental Implants",
      Icon: Anchor,
      desc: "Permanent tooth replacement with high-grade titanium implants — a stable, long-term alternative to dentures that looks, feels, and functions just like a natural tooth."
    },
    {
      title: "Kids Dentistry",
      Icon: Baby,
      desc: "Gentle, child-friendly care including check-ups, fluoride application, sealants, and habit counselling. We make a child's first dental visit calm, fun, and reassuring for the whole family."
    },
    {
      title: "Digital Dental X-ray",
      Icon: Scan,
      desc: "On-site digital radiography for instant, sharper diagnostics with significantly lower radiation than conventional x-rays — so we treat with precision and explain findings on screen, together."
    },
    {
      title: "Sterilisation & Hygiene",
      Icon: ShieldCheck,
      desc: "A multi-step infection-control protocol with autoclave sterilisation, single-use disposables, and surface disinfection between every patient — because safety is never optional."
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

                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300 group-hover:scale-110 relative z-10">
                    <service.Icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors duration-300" strokeWidth={1.6} />
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

      {/* Video Gallery */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">See the care in action.</h2>
            <p className="text-muted-foreground text-lg">
              A few moments from real clinic visits, treatments, and transformations.
            </p>
          </FadeIn>
          
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "@assets/Smile_Transformation_1776942861155.mp4",
              "@assets/Smile_Transformation_2_1776942861154.mp4",
              "@assets/Smile_Transformation_4_1776942861154.mp4",
              "@assets/Smile_Transformation_5_1776942861154.mp4",
              "@assets/Smile_Transformation_6_1776942861155.mp4",
              "@assets/Splint_Headgear_Kids_1776942861155.mp4",
            ].map((src, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="relative rounded-3xl overflow-hidden shadow-lg bg-card border border-border/50 aspect-[9/16]"
                >
                  <video
                    src={src}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </motion.div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Six videos are now featured here.
          </div>
        </div>
      </section>
    </Layout>
  );
}
