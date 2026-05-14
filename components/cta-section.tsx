import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="w-full bg-background">
      <section className="relative min-h-[500px] h-[500px] overflow-hidden text-white">
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

 

      {/* Hero Content */}
      <div className="relative z-20 mt-24 flex min-h-screen justify-start text-left">
        <div className="max-w-5xl pl-24">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-4xl">
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
          <div className="mt-10 flex flex-wrap items-center gap-4">
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

      
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
    </section>
  );
}