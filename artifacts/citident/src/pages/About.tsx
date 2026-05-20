import React from "react";
import { motion } from "framer-motion";
import { Layout, FadeIn } from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

import team1Url from "@assets/Doctor_with_Her_Team_1776875350328.jpg";
import team2Url from "@assets/Doctor_with_Her_Team_2_1776875350328.jpg";
import celebrationUrl from "@assets/Cake_Celebration_at_the_Clinic_1776875350325.jpg";
import priyaPortrait from "@assets/Doctor_Priya_Dinesh_Portrait_1776920640295.png";
import dineshPortrait from "@assets/Dr_Dinesh_1776920640296.png";
import juniorPortrait from "@assets/Junior_Dentist_-_Navy_Scrubs_2_1776920640296.png";
import work1Url from "@assets/Dentists_at_Work_1776875350326.jpg";
import work2Url from "@assets/Doctor_Checking_Tooth_3_1776875350326.jpg";

export default function About() {
  usePageMeta({
    title: "About Us",
    description: "Meet the expert dental team at Citident Dental Clinic, led by Dr. Priya Dinesh. We provide care that feels like family."
  });

  const doctors = [
    {
      name: "Dr. Priya Dinesh",
      role: "Chief Dental Surgeon, BDS",
      image: priyaPortrait,
      bio: "Dr. Priya leads Citident with a deep commitment to conservative dentistry. Her calm chairside manner ensures that even the most anxious patients feel comfortable. She focuses on modern, tooth-saving treatments designed for long-term oral health."
    },
    {
      name: "Dr. Dinesh S.P.",
      role: "Chief Dental Surgeon, BDS",
      image: dineshPortrait,
      bio: "Bringing years of dedicated clinical practice to the team, Dr. Dinesh believes in transparent, honest patient care. His expertise with state-of-the-art dental technology allows for precise diagnostics and seamless restorations tailored to every family member."
    },
    {
      name: "Junior Dentist",
      role: "Dental Surgeon",
      image: juniorPortrait,
      bio: "An integral part of our clinical family, our junior dentist supports the chief surgeons in delivering exceptional daily care. With a gentle touch and up-to-date knowledge of clinical hygiene protocols, they ensure every visit is smooth, safe, and welcoming."
    }
  ];

  return (
    <Layout>
      {/* Hero / Philosophy */}
      <section className="pt-12 pb-24 md:pt-20 md:pb-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Care that feels like family.</h1>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At Citident, we believe visiting the dentist shouldn't feel like a clinical transaction. We've designed a calm, inviting space where anxiety melts away, replaced by trust and transparency.
                </p>
                <p className="text-primary font-medium">
                  Serving Palakkad since 2000, Citident has grown into a trusted clinic built around honest care and long-term relationships.
                </p>
                <p>
                  Led by our chief surgeons, our team focuses on <strong>conservative dentistry</strong>. That means we explore every cutting-edge option to save your natural teeth before ever considering extractions. It's honest care, done right.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={team1Url} alt="Citident team at reception" 
                  className="rounded-3xl object-cover w-full h-full aspect-[4/3] sm:aspect-[4/5] shadow-lg cursor-pointer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={celebrationUrl} alt="Team celebration" 
                  className="rounded-3xl object-cover w-full h-full aspect-[4/3] sm:aspect-[4/5] shadow-lg sm:mt-8 cursor-pointer" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Doctors</h2>
            <p className="text-muted-foreground text-lg">
              Dedicated professionals combining clinical excellence with a gentle, patient-first approach.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            {doctors.map((doctor, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} className="group">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10 aspect-[3/4] mb-6 flex items-end justify-center pt-8 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                  <motion.img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full object-contain object-bottom drop-shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1 inline-block relative">
                  {doctor.name}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                </h3>
                <p className="text-secondary font-medium mb-4">{doctor.role}</p>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Capability */}
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
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-primary-foreground/70">Sterilisation protocol adherence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">Digital</div>
                  <div className="text-sm text-primary-foreground/70">Low-radiation imaging</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.img whileHover={{ scale: 1.05 }} src={work1Url} alt="Dentists at work" className="rounded-3xl object-cover w-full h-full aspect-[4/3] sm:aspect-square cursor-pointer shadow-2xl" />
                <motion.img whileHover={{ scale: 1.05 }} src={work2Url} alt="Doctor with loupes" className="rounded-3xl object-cover w-full h-full aspect-[4/3] sm:aspect-square sm:mt-12 cursor-pointer shadow-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-24 bg-white text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to prioritize your smile?</h2>
          <Link href="/contact">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 group">
              Visit our clinic <ChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </FadeIn>
      </section>
    </Layout>
  );
}
