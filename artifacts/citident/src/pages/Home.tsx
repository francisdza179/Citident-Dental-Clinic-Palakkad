import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, ChevronRight, Stethoscope, Activity, Crown, Smile, Sparkles, Anchor, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout, FadeIn } from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import heroUrl from "@assets/Reception_-_Hero_Image_1776875350329.png";
import team1Url from "@assets/Doctor_with_Her_Team_1776875350328.jpg";
import beforeAfterUrl from "@assets/Chipped_Tooth_Correction_1776875350325.jpg";
import patientHappyUrl from "@assets/Doctor_with_Patient_Straight_Pose_1776875350329.jpg";
import doctorPriyaUrl from "@assets/Dr__Priya_-_2nd_Portrait_1776928355657.png";
import doctorDineshUrl from "@assets/Dr_Dinesh_SP_2nd_Portrait_1776925453134.png";
import juniorDentistUrl from "@assets/Junior_Dentist_-_2nd_portrait_1776925453135.png";
import teamPhoto1Url from "@assets/Doctor_with_Her_Team_2_1776928588297.jpg";
import teamPhoto2Url from "@assets/Doctor_with_Patient_Profile_Pose_1776928588297.jpg";
import teamPhoto3Url from "@assets/The_Entire_Team_1776928588298.jpg";

const PHONE = "+914912529090";
const PHONE_LINK = `tel:${PHONE}`;
const MAPS_LINK = "https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad";

export default function Home() {
  usePageMeta({
    title: "Home",
    description: "Honest care for your family's smile. Citident is Palakkad's premium neighborhood clinic."
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] text-balance">
                Honest care for your family's smile.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Led by Dr. Priya Dinesh, Citident is Palakkad's premium neighborhood clinic. We use cutting-edge equipment to provide conservative, comfortable care—saving teeth other clinics give up on.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-10 flex flex-wrap gap-4">
              <a href={PHONE_LINK} className="relative group rounded-full overflow-hidden inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer z-10" />
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full px-8 h-14 text-base shadow-sm transition-transform hover:scale-105 active:scale-95">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to book
                </Button>
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-medium border-primary/20 hover:bg-primary/5 transition-all hover:scale-105 active:scale-95 group">
                  <MapPin className="w-5 h-5 mr-2 text-primary group-hover:animate-bounce" />
                  Get directions
                </Button>
              </a>
            </FadeIn>
          </div>
          
          <div className="relative perspective-1000">
            <FadeIn delay={0.3}>
              <motion.div 
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] group cursor-pointer"
              >
                <img 
                  src={heroUrl} 
                  alt="Citident Clinic Reception" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none"></div>
              </motion.div>
            </FadeIn>
            
            {/* Floating badge */}
            <FadeIn delay={0.5} className="absolute -bottom-4 -left-3 xs:-left-6 md:-bottom-6 md:-left-12 bg-white p-4 md:p-6 rounded-2xl shadow-xl max-w-[270px] xs:max-w-[310px] md:max-w-xs border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs md:text-sm font-medium text-foreground italic">"I went to see this dentist expecting my tooth can't be saved... Am very happy now to have got my smile back."</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-2">— Bharathy MK</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-secondary font-semibold">Meet Our Doctors</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">The people behind the care.</h2>
            </div>
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-6 hover:bg-primary hover:text-primary-foreground">
                Learn more about the team
              </Button>
            </Link>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Dinesh",
                title: "Chief Dental Surgeon, BDS",
                img: doctorPriyaUrl,
                desc: "A calm and reassuring presence at the chairside, Dr. Priya Dinesh leads with a careful, tooth-saving approach. She focuses on conservative treatment planning and clear communication so families always feel informed and comfortable."
              },
              {
                name: "Dr. Dinesh S.P.",
                title: "Chief Dental Surgeon, BDS",
                img: doctorDineshUrl,
                desc: "Dr. Dinesh S.P. brings a warm, confident manner and a practical eye for long-term dental health. He is known for making treatment feel clear, steady, and patient-friendly."
              },
              {
                name: "Junior Dentist",
                title: "Junior Dentist",
                img: juniorDentistUrl,
                desc: "Our Junior Dentist supports the senior team with attentiveness and care during everyday treatment. She represents the next generation of the clinic, combining gentle chairside support with a fresh, modern perspective."
              }
            ].map((doctor, index) => (
              <FadeIn key={doctor.name} delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="group h-full rounded-[2rem] border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      src={doctor.img}
                      alt={doctor.name}
                      className={`h-full w-full object-cover object-center transition-transform duration-500 ${doctor.name === "Dr. Dinesh S.P." ? "scale-x-[-1]" : ""}`}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">{doctor.title}</p>
                    <h3 className="mt-2 text-2xl font-bold text-primary">{doctor.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{doctor.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Care that feels like family.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              At Citident, we believe visiting the dentist shouldn't feel like a clinical transaction. We've designed a calm, inviting space where anxiety melts away, replaced by trust and transparency. Our team focuses on conservative dentistry—saving your natural teeth before considering extractions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
{[teamPhoto1Url, teamPhoto2Url, teamPhoto3Url].map((src, index) => {
   // Adjust vertical position to push subjects down in frame:
   // Index 0 (first image): push subjects down 15%
   // Index 1 (second image): push subjects down 30%
   // Index 2 (third image): centered (as requested)
   let position = "object-center";
   if (index === 0) {
     // Push subjects down 15% = move image up 15% = 50% - 15% = 35% from top
     position = "object-[object-position:50%_35%]";
   } else if (index === 1) {
     // Push subjects down 30% = move image up 30% = 50% - 30% = 20% from top
     position = "object-[object-position:50%_20%]";
   }
   // index 2 remains object-center (default = 50%_50%)
   
   return (
     <div key={src} className="group rounded-2xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
       <img
         src={src}
         alt={`Citident team ${index + 1}`}
         className={`w-full h-full object-cover ${position} aspect-[16/10] sm:aspect-[3/4] transition-transform duration-500 group-hover:scale-110`}
       />
     </div>
   );
 })}
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">
              Serving Palakkad since 2000
            </p>
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all group">
                More about our philosophy <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Care</h2>
              <p className="text-muted-foreground text-lg max-w-xl">From routine check-ups to complex restorations, we utilize state-of-the-art technology to deliver precise, comfortable treatments.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/services">
                <Button className="rounded-full group relative overflow-hidden bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground border-0 transition-colors">
                  See all services <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {([
              { title: "General Dentistry", Icon: Stethoscope, desc: "Routine check-ups, scaling, polishing, and preventative care for the whole family — catching issues early, before they grow." },
              { title: "Root Canal Treatment", Icon: Activity, desc: "Painless, single-sitting root canals with advanced rotary instruments to save badly infected or broken teeth." },
              { title: "Clear Aligners & Braces", Icon: Smile, desc: "Near-invisible aligners and modern orthodontics that gently straighten teeth and correct bite issues." },
              { title: "Cosmetic Dentistry", Icon: Sparkles, desc: "Veneers, composite bonding, and smile makeovers planned around your face — beautiful, natural results." },
              { title: "Crowns & Restorations", Icon: Crown, desc: "Strong, natural-looking zirconia and ceramic crowns, bridges, and tooth-coloured fillings built to last." },
              { title: "Dental Implants", Icon: Anchor, desc: "Permanent titanium implants — a stable, long-term replacement that looks and feels like a real tooth." },
            ] as { title: string; Icon: LucideIcon; desc: string }[]).map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer p-6 rounded-3xl border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300 group-hover:scale-110 relative z-10">
                  <service.Icon className="w-6 h-6 text-primary group-hover:text-secondary-foreground transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{service.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Teaser */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise you can trust.</h2>
              <p className="text-primary-foreground/80 text-lg mb-10">
                Meet the experienced professionals dedicated to restoring and maintaining your family's oral health with minimal intervention.
              </p>
              <Link href="/about">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 group transition-transform hover:scale-105">
                  Meet our doctors <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <img src={team1Url} alt="Citident Team" className="w-full h-full object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
           <FadeIn className="flex flex-col items-center mb-16">
            <motion.img 
              whileHover={{ rotate: 10, scale: 1.1 }}
              src={patientHappyUrl} alt="Happy Patient" 
              className="w-24 h-24 rounded-full object-cover mb-6 shadow-md border-4 border-white cursor-pointer" 
            />
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Loved by Palakkad families.</h2>
          </FadeIn>

          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {[
                [
                  {
                    text: "CitiDental clinic provides exemplary dental care in a warm and inviting atmosphere. The clinic boasts state-of-the-art equipment, ensuring cutting-edge treatments and procedures.",
                    author: "Ameen"
                  },
                  {
                    text: "I went to see this dentist with a badly broken tooth expecting that it can't be saved, but was amazed with the different options... Am very happy now to have got my smile back.",
                    author: "Bharathy MK"
                  }
                ],
                [
                  {
                    text: "Excellent service. They even accommodated my request for consultation, on short notice. I strongly recommend.",
                    author: "Balasubramanian R.V"
                  },
                  {
                    text: "I just consult this dentist with badly broken tooth expecting that it cant be saved, but my tooth saving amazed with the different options . thank you doctor .Am very happy now because i got my smile back.",
                    author: "Nikhil KV"
                  }
                ],
                [
                  {
                    text: "Very very friendly doctor and very efficient team. Loved the experience for both me and my mother.",
                    author: "Sanjeev"
                  },
                  {
                    text: "Very good doctor , reasonable cost, perfect treatment. Very happy about it",
                    author: "Abirami Anup"
                  }
                ]
              ].map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid md:grid-cols-2 gap-8">
                    {slide.map((review, i) => (
                      <FadeIn key={review.author} delay={i * 0.1}>
                        <div className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                          <div className="flex gap-1 mb-4">
                            {[1,2,3,4,5].map(star => (
                              <motion.svg 
                                key={star} 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + (star * 0.1) }}
                                className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </motion.svg>
                            ))}
                          </div>
                          <p className="text-foreground/80 text-lg leading-relaxed flex-grow italic">"{review.text}"</p>
                          <p className="mt-6 font-bold text-primary">— {review.author}</p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-10 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-10 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>

      {/* Location Strip Teaser */}
      <section className="py-12 bg-white relative z-10 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-secondary" />
            <div>
              <p className="font-bold text-primary text-xl">Visit our clinic in Palakkad</p>
              <p className="text-muted-foreground">Priyadarshini Rd, opposite Aroma Cinemas</p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-primary/5 transition-all active:scale-95 group">
              Get directions <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
