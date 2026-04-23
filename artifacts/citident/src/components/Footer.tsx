import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Clock } from "lucide-react";
import logoUrl from "@assets/Citident_Logo_-_Transparent_V2_1776927029164.png";

const PHONE = "+914912529090";
const PHONE_LINK = `tel:${PHONE}`;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr_1fr] items-start mb-16">
          <div>
            <Link href="/" className="inline-flex mb-8">
              <img src={logoUrl} alt="Citident Logo" className="h-40 w-auto object-contain" />
            </Link>
            <p className="text-primary-foreground/80 text-lg max-w-md mb-10 leading-relaxed">
              Palakkad's premium family dental clinic providing cutting-edge, honest care.
            </p>
          </div>

          <div>
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

          <div className="space-y-8">
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

            <div className="h-[220px] rounded-3xl overflow-hidden shadow-2xl relative">
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

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-secondary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-lg mb-1">Clinic Address</p>
                <p className="text-primary-foreground/70">Priyadarshini Rd, opposite Aroma Cinemas<br/>Parakkunnam, Palakkad, Kerala 678001</p>
                <p className="text-primary-foreground/50 text-sm mt-1">Plus code: QMG3+J7 Palakkad</p>
              </div>
            </div>
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
