"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Users2,
  UtensilsCrossed,
  BadgeCheck,
  Info,
  X,
} from "lucide-react";
import Reveal from "./Reveal";
import VineDivider from "./VineDivider";
import { venues, regions, formatINR, type Region } from "@/data/indiaVenues";

export default function Venues() {
  const [activeRegion, setActiveRegion] = useState<Region | "All">("All");
  const [activeState, setActiveState] = useState<string>("All");
  const [showMethodology, setShowMethodology] = useState(false);

  const statesInRegion = useMemo(() => {
    const pool =
      activeRegion === "All"
        ? venues
        : venues.filter((v) => v.region === activeRegion);
    return Array.from(new Set(pool.map((v) => v.state))).sort();
  }, [activeRegion]);

  const filtered = useMemo(() => {
    return venues.filter((v) => {
      const regionMatch = activeRegion === "All" || v.region === activeRegion;
      const stateMatch = activeState === "All" || v.state === activeState;
      return regionMatch && stateMatch;
    });
  }, [activeRegion, activeState]);

  const handleRegionSelect = (region: Region | "All") => {
    setActiveRegion(region);
    setActiveState("All");
  };

  return (
    <section id="venues" className="relative bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Venues Across India</p>
          <h2 className="mt-4 font-display text-4xl text-forest md:text-5xl">
            Explore venues, state by state
          </h2>
          <p className="mt-5 font-body text-charcoal/65">
            {venues.length} real venues across{" "}
            {new Set(venues.map((v) => v.state)).size} states — with 2026
            market-rate pricing so you can shortlist by budget, not just by
            looks.
          </p>
          <button
            onClick={() => setShowMethodology(true)}
            className="mt-4 inline-flex items-center gap-1.5 font-body text-xs text-gold-dark underline-offset-4 hover:underline"
          >
            <Info size={13} />
            How we source this data
          </button>
        </Reveal>

        {/* Region filter */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {(["All", ...regions] as (Region | "All")[]).map((region) => (
              <button
                key={region}
                onClick={() => handleRegionSelect(region)}
                className={`rounded-full border px-5 py-2 font-body text-sm transition-all duration-300 ${
                  activeRegion === region
                    ? "border-forest bg-forest text-ivory"
                    : "border-line text-charcoal/65 hover:border-forest/40 hover:text-forest"
                }`}
              >
                {region === "All" ? "All Regions" : region}
              </button>
            ))}
          </div>
        </Reveal>

        {/* State filter */}
        <Reveal delay={0.15}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveState("All")}
              className={`rounded-full px-3.5 py-1.5 font-body text-xs uppercase tracking-wide transition-all duration-300 ${
                activeState === "All"
                  ? "bg-gold/20 text-gold-dark"
                  : "text-charcoal/45 hover:text-gold-dark"
              }`}
            >
              All States
            </button>
            {statesInRegion.map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                className={`rounded-full px-3.5 py-1.5 font-body text-xs uppercase tracking-wide transition-all duration-300 ${
                  activeState === state
                    ? "bg-gold/20 text-gold-dark"
                    : "text-charcoal/45 hover:text-gold-dark"
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Venue grid */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((venue) => (
              <motion.div
                key={venue.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line/70 bg-white shadow-card card-lift"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 font-body text-[10px] uppercase tracking-wider text-forest">
                    {venue.category}
                  </span>
                  {venue.verified && (
                    <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-forest/90 px-2.5 py-1 font-body text-[10px] uppercase tracking-wider text-ivory">
                      <BadgeCheck size={12} />
                      Verified pricing
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="flex items-center gap-1.5 font-body text-xs text-ivory/85">
                      <MapPin size={12} />
                      {venue.city}, {venue.state}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-forest">
                    {venue.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60">
                    {venue.highlight}
                  </p>

                  <div className="mt-5 space-y-2.5 border-t border-line/70 pt-5">
                    <div className="flex items-center justify-between font-body text-sm">
                      <span className="flex items-center gap-1.5 text-charcoal/55">
                        <UtensilsCrossed size={14} className="text-gold-dark" />
                        Per plate
                      </span>
                      <span className="font-medium text-forest">
                        ₹{formatINR(venue.plateMin)} – ₹{formatINR(venue.plateMax)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body text-sm">
                      <span className="flex items-center gap-1.5 text-charcoal/55">
                        <Users2 size={14} className="text-gold-dark" />
                        Capacity
                      </span>
                      <span className="font-medium text-forest">
                        {venue.capacity}
                      </span>
                    </div>
                    <p className="pt-1 font-body text-xs text-charcoal/45">
                      Est. package: {venue.packageEstimate}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-forest/25 py-2.5 font-body text-sm text-forest transition-all duration-500 hover:border-forest hover:bg-forest hover:text-ivory"
                  >
                    Check Availability
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-body text-charcoal/50">
            No venues in this state yet — try another region.
          </p>
        )}
      </div>

      <div className="mt-20">
        <VineDivider />
      </div>

      {/* Methodology modal */}
      <AnimatePresence>
        {showMethodology && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-dark/80 p-4 backdrop-blur-sm"
            onClick={() => setShowMethodology(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg rounded-3xl bg-ivory p-8 shadow-soft"
            >
              <button
                onClick={() => setShowMethodology(false)}
                className="absolute right-5 top-5 text-charcoal/40 hover:text-forest"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <p className="eyebrow">Data Methodology</p>
              <h3 className="mt-3 font-display text-2xl text-forest">
                Why this isn&rsquo;t a live price feed
              </h3>
              <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-charcoal/65">
                <p>
                  Indian wedding venues quote privately by date, season, guest
                  count and menu — there is no public real-time pricing API
                  for this industry, so we don&rsquo;t pretend to have one.
                </p>
                <p>
                  What you&rsquo;re seeing instead: per-plate and package
                  ranges compiled from 2026 wedding-industry pricing research
                  for each venue&rsquo;s category and city. Venues marked{" "}
                  <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2 py-0.5 text-xs text-forest">
                    <BadgeCheck size={11} /> Verified pricing
                  </span>{" "}
                  have been cross-checked against multiple published sources
                  for that specific property; others are category-level
                  estimates for their region and tier.
                </p>
                <p>
                  Treat these as planning ranges, not quotes — always confirm
                  exact rates directly with the venue. Data last compiled July
                  2026.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
