"use client";

import Image from "next/image";
import { MapPin, Users2 } from "lucide-react";
import Reveal from "./Reveal";
import VineDivider from "./VineDivider";

const venues = [
  {
    name: "Willowmere Estate",
    location: "Hudson Valley, NY",
    capacity: "Up to 220 guests",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "The Olive Grove",
    location: "Sonoma, CA",
    capacity: "Up to 150 guests",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Harborline Pavilion",
    location: "Newport, RI",
    capacity: "Up to 180 guests",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Stonegate Chapel",
    location: "Asheville, NC",
    capacity: "Up to 90 guests",
    img: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Terra Rosa Gardens",
    location: "Santa Barbara, CA",
    capacity: "Up to 200 guests",
    img: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "The Glasshouse",
    location: "Brooklyn, NY",
    capacity: "Up to 130 guests",
    img: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Venues() {
  return (
    <section id="venues" className="relative bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Where to Say &ldquo;I Do&rdquo;</p>
          <h2 className="mt-4 font-display text-4xl text-forest md:text-5xl">
            Venues we love working in
          </h2>
          <p className="mt-5 font-body text-charcoal/65">
            A short list from our much longer black book &mdash; each one
            visited, vetted, and vendor-approved.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue, i) => (
            <Reveal key={venue.name} delay={(i % 3) * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl shadow-card">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={venue.img}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-display text-2xl text-ivory">
                    {venue.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 font-body text-xs text-ivory/80">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {venue.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users2 size={13} /> {venue.capacity}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-ivory/0 transition-colors duration-500 group-hover:border-gold/60 rounded-3xl pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <VineDivider />
      </div>
    </section>
  );
}
