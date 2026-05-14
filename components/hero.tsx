import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dsaqsxtup/image/upload/v1778521705/18426_ueg8rg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Top Navigation */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-500" />
            <h1 className="text-lg font-semibold tracking-wide">
              Phytogenix
            </h1>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-10 text-sm text-white/80 lg:flex">
            <a href="#" className="transition hover:text-white">
              Homepage
            </a>

            <a href="#" className="transition hover:text-white">
              About Us
            </a>

            <a href="#" className="transition hover:text-white">
              Research
            </a>

            <a href="#" className="transition hover:text-white">
              Clinical Trials
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <Button className="rounded-full bg-yellow-400 px-6 text-black hover:bg-yellow-300">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Herbal Clinical <br />
            Research Platform
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Virucidine provides an AI-powered ecosystem for managing
            herbal formulations, laboratory analytics, participant
            monitoring, and clinical research operations with
            enterprise-grade efficiency.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-yellow-400 px-8 text-black hover:bg-yellow-300"
            >
              Launch Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/10 px-8 text-white backdrop-blur-md hover:bg-white/20"
            >
              View Research
            </Button>
          </div>

          {/* Bottom stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-center">
            {[
              ["44+", "Participants"],
              ["97.7%", "Study Completion"],
              ["24/7", "Clinical Monitoring"],
            ].map(([number, label]) => (
              <div key={label}>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {number}
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}