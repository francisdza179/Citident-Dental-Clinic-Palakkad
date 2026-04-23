import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Clock } from "lucide-react";
import logoUrl from "@assets/Citident_Dental_Clinic_Logo_1776925990537.png";

const PHONE = "+914912529090";
const PHONE_LINK = `tel:${PHONE}`;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/95 p-4 rounded-2xl shadow-lg ring-1 ring-black/5 hover:scale-105 transition-transform">
                <img src={logoUrl} alt="Citident Logo" className="h-20 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none tracking-tight">Citident</span>
                <span className="font-malayalam text-sm text-primary-foreground/70 mt-1">സിറ്റിഡൻ്റ് ഡെൻ്റൽ ക്ലിനിക്</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-lg max-w-sm mb-10 leading-relaxed">
              Palakkad's premium family dental clinic providing cutting-edge, honest care.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-6 h-6 text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-lg mb-1">Clinic Address</p>
                  <p className="text-primary-foreground/70">Priyadarshini Rd, opposite Aroma Cinemas<br/>Parakkunnam, Palakkad, Kerala 678001</p>
                  <p className="text-primary-foreground/50 text-sm mt-1">Plus code: QMG3+J7 Palakkad</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Phone className="w-6 h-6 text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-lg mb-1">Contact</p>
                  <a href={PHONE_LINK} className="text-primary-foreground/70 hover:text-white transition-colors block text-xl font-medium inline-block relative">
                    +91 491 2529090
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Clock className="w-6 h-6 text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-lg mb-1">Opening Hours</p>
                  <p className="text-primary-foreground/70">Monday – Saturday: 9:30 AM – 7:30 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" }
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer relative group inline-block">
                      {link.label}
                      <div className="absolute -bottom-1 left-0 right-0 h-px bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 h-[300px] rounded-3xl overflow-hidden shadow-2xl relative group">
            <iframe 
              src="https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Citident Dental Clinic"
              className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Citident Dental Clinic. All rights reserved.</p>
          <p>Palakkad, Kerala</p>
        </div>
      </div>
    </footer>
  );
}
