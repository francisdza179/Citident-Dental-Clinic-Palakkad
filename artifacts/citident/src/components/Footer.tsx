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
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-flex mb-6">
              <img src={logoUrl} alt="Citident Logo" className="h-44 w-auto object-contain" />
            </Link>
            <p className="text-primary-foreground/80 text-base max-w-sm leading-relaxed">
              Palakkad's premium family dental clinic providing cutting-edge, honest care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-6">Quick Links</h3>
            <ul className="space-y-3">
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

          {/* Contact + Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Call us</p>
                  <a href={PHONE_LINK} className="text-primary-foreground hover:text-secondary transition-colors text-lg font-medium">
                    +91 491 2529090
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Opening Hours</p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Mon – Sat: 9:30 AM – 7:30 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Visit us</p>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Priyadarshini Rd, opposite Aroma Cinemas<br/>
                    Parakkunnam, Palakkad, Kerala 678001
                  </p>
                  <p className="text-primary-foreground/50 text-xs mt-1">Plus code: QMG3+J7 Palakkad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-6">Find Us</h3>
            <div className="h-[260px] rounded-2xl overflow-hidden shadow-2xl relative ring-1 ring-white/10">
              <iframe
                src="https://www.google.com/maps?q=Citident+Dental+Clinic+Palakkad&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Citident Dental Clinic"
                className="absolute inset-0"
              ></iframe>
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
