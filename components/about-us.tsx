import {
  Microscope,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-[#f8faf7] py-10 px-0 md:px-24">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left Image */}
        <div className="relative overflow-hidden">
         <img
  src="https://res.cloudinary.com/dsaqsxtup/image/upload/v1778522565/126427_xovoq5.jpg"
  alt="Virucidine Research"
  className="md:h-[700px] h-[500px] w-full rounded-tl-[150px] rounded-br-[150px] object-cover"
/>

         
        </div>

        {/* Right */}
        <div className="space-y-8 px-6">
          {/* Label */}
          <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            WHO WE ARE
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              AI-Powered Herbal Clinical Research
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-[#667085]">
            Virucidine is a digital herbal clinical research platform inspired by the collaborative work between Afe Babalola University and the Nigerian Institute of Medical Research. The platform was created to modernize herbal medicine research, clinical trial management, laboratory tracking, and regulatory compliance using scalable digital infrastructure.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg bg-[#14532d] p-8 text-white shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-white/10">
                <Microscope className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-semibold">
                Our Vision
              </h3>

              <p className="mt-3 text-sm text-white/75">
                Modernizing herbal medicine research in Africa.
              </p>
            </div>

           
            <div className="rounded-lg bg-lime-500 p-8 text-[#101828] shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-white/20">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-semibold">
                Our Mission
              </h3>

              <p className="mt-3 text-sm text-black/70">
                Smarter trials, analytics, and compliance tools.
              </p>
            </div>
          </div>

          {/* Bottom Feature */}
          {/* <div className="flex items-start gap-4 rounded-3xl border border-[#d0d5dd] bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <FlaskConical className="h-7 w-7 text-emerald-700" />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#101828]">
                Centralized Research Platform
              </h4>

              <p className="mt-2 text-[#667085]">
                Clinical trials, lab reports, and AI insights —
                all in one place.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}