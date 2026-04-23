import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/generated_images/citident_logo_premium.png";

const PHONE = "+914912529090";
const PHONE_LINK = `tel:${PHONE}`;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] border-b border-border/60"
          : "bg-background/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <Link href="/">
          <div className="flex items-center cursor-pointer group -ml-2 sm:-ml-4">
            <img
              src={logoUrl}
              alt="Citident Dental Clinic"
              className={`w-auto object-contain object-left origin-left transition-all duration-300 group-hover:scale-[1.03] ${
                scrolled ? "h-14 md:h-16" : "h-20 md:h-24"
              }`}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <div className="relative py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer group">
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary/50 rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <AnimatePresence initial={false}>
            {!scrolled && (
              <motion.div
                key="hours"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Clock className="w-4 h-4 text-secondary" />
                <span>Mon-Sat, 9:30 AM - 7:30 PM</span>
              </motion.div>
            )}
          </AnimatePresence>
          <a href={PHONE_LINK} className="relative group overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer z-10" />
            <Button
              className={`bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full transition-all hover:scale-105 active:scale-95 ${
                scrolled ? "px-5 h-9 text-sm" : "px-6 h-10"
              }`}
            >
              <Phone className={`mr-2 ${scrolled ? "w-4 h-4" : "w-4 h-4"}`} />
              Call to book
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`text-lg font-medium ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>Mon-Sat, 9:30 AM - 7:30 PM</span>
                </div>
                <a href={PHONE_LINK}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call to book
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
