'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 50).toFixed(0))));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-emerald-500">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dsaqsxtup/image/upload/v1778521705/18426_ueg8rg.jpg')",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Top Navigation */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-none bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            <h1 className="text-lg font-semibold tracking-wide">
              Phytogenix
            </h1>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
            <Link href="#about" className="transition hover:text-white relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`} 
                className="transition hover:text-white relative group"
              >
                {product.name.split(' - ')[0]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link href="#contact" className="transition hover:text-white relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex rounded-none bg-yellow-400 px-6 text-black hover:bg-yellow-300 transition-transform hover:scale-105 active:scale-95">
              Get Started
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#050816] border-white/10 text-white p-10">
                <SheetHeader className="mb-8 text-left">
                  <SheetTitle className="text-white flex items-center gap-2">
                    <div className="h-6 w-6 rounded-none bg-emerald-500" />
                    Phytogenix
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  <Link href="#about" className="text-lg font-medium text-white/70 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                  {products.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/products/${product.id}`} 
                      className="text-lg font-medium text-white/70 hover:text-emerald-400 transition-colors"
                    >
                      {product.name.split(' - ')[0]}
                    </Link>
                  ))}
                  <Link href="#contact" className="text-lg font-medium text-white/70 hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                  <Button className="mt-4 rounded-none bg-yellow-400 text-black hover:bg-yellow-300 w-full">
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Herbal Clinical <br />
            <TypewriterEffect words={["Research Platform", "Trial Ecosystem", "AI Discovery", "Lab Analytics"]} />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            Virucidine provides an ecosystem for managing
            herbal formulations, laboratory analytics, participant
            monitoring, and clinical research operations with
            enterprise-grade efficiency.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-none bg-yellow-400 px-8 h-14 text-black hover:bg-yellow-300 shadow-xl shadow-yellow-400/20 transition-all hover:scale-105"
            >
              Launch Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hidden md:block rounded-none border-white/20 bg-white/10 px-8 h-14 text-white backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105"
            >
              View Research
            </Button>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 hidden md:flex flex-wrap items-center justify-center gap-10 text-center"
          >
            {[
              ["44+", "Participants"],
              ["97.7%", "Study Completion"],
              ["24/7", "Clinical Monitoring"],
            ].map(([number, label]) => (
              <div key={label} className="group cursor-default">
                <h3 className="text-2xl font-bold md:text-3xl transition-colors group-hover:text-yellow-400">
                  {number}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}