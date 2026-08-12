'use client';

import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Hero image movement
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['0%', '-18%']
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 1.08]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.22],
    [1, 0]
  );

  // Large hero logo fades away
  const heroLogoOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0]
  );

  const heroLogoScale = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0.75]
  );

  // Small sticky header appears
  const headerOpacity = useTransform(
    scrollYProgress,
    [0.03, 0.1],
    [0, 1]
  );

  const headerBackground = useTransform(
    scrollYProgress,
    [0.03, 0.12],
    ['rgba(17, 21, 28, 0)', 'rgba(17, 21, 28, 0.92)']
  );

  return (
    <main className="min-h-screen bg-[#11151C] text-[#F3E8D0]">

      {/* ===================================================== */}
      {/* STICKY HEADER                                         */}
      {/* ===================================================== */}

      <motion.header
        style={{
          opacity: headerOpacity,
          backgroundColor: headerBackground,
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          border-white/10
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="flex items-center">
            <img
              src="/wordmark.png"
              alt="The Final Cookout"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <a
            href="https://conviatickets.com/events/O5Y1OB4X"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-lg
              bg-[#E8A83E]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#11151C]
              transition
              hover:bg-[#F3C56B]
            "
          >
            Get Tickets
          </a>

        </div>
      </motion.header>


      {/* ===================================================== */}
      {/* HERO                                                   */}
      {/* ===================================================== */}

      <section
        className="
          relative
          min-h-[115vh]
          overflow-hidden
        "
      >

        {/* Base background */}
        <div className="absolute inset-0 bg-[#11151C]" />

        {/* Moving hero image */}
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity,
          }}
          className="
            absolute
            -inset-x-4
            -top-4
            h-[110%]
            bg-cover
            bg-center
            will-change-transform
          "
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bg.jpg')",
            }}
          />

          {/* Image darkening */}
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>


        {/* Bottom cinematic fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            h-[45%]
            bg-gradient-to-b
            from-transparent
            via-[#11151C]/70
            to-[#11151C]
          "
        />


        {/* Hero content */}
        <div
          className="
            relative
            z-20
            flex
            min-h-[100vh]
            items-center
            justify-center
            px-6
            py-24
          "
        >

          <motion.div
            style={{
              opacity: heroLogoOpacity,
              scale: heroLogoScale,
            }}
            className="w-full max-w-6xl text-center will-change-transform"
          >

            <img
              src="/wordmark.png"
              alt="The Final Cookout"
              className="
                mx-auto
                w-full
                max-w-3xl
                object-contain
              "
            />

            <p
              className="
                mt-8
                text-sm
                uppercase
                tracking-[0.3em]
                text-white/80
                sm:text-base
              "
            >
              Music. Energy. Culture. Community.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-2
                text-sm
                uppercase
                tracking-widest
                text-white
                sm:flex-row
                sm:gap-6
              "
            >
              <span>29 August 2026</span>

              <span className="hidden sm:block">
                •
              </span>

              <span>Lekki, Lagos</span>
            </div>

            <div
              className="
                mt-10
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >

              <a
                href="https://conviatickets.com/events/O5Y1OB4X"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-[#E8A83E]
                  px-8
                  py-4
                  font-semibold
                  uppercase
                  tracking-wide
                  text-[#11151C]
                  transition
                  hover:bg-[#F3C56B]
                "
              >
                Get Your Ticket
              </a>

              <Link
                href="/id"
                className="
                  rounded-xl
                  border
                  border-[#F3E8D0]/30
                  bg-[#11151C]/30
                  px-8
                  py-4
                  font-semibold
                  uppercase
                  tracking-wide
                  text-[#F3E8D0]
                  backdrop-blur-md
                  transition
                  hover:bg-[#11151C]/60
                "
              >
                Get Your Cookout Photo
              </Link>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* ABOUT                                                  */}
      {/* ===================================================== */}

      <section className="relative bg-[#11151C] px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-5xl">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A83E]">
              What is The Final Cookout?
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#F3E8D0] sm:text-5xl">
              The best night of the summer.
              <br />
              One unforgettable experience.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#F3E8D0]/60">
              The Final Cookout is more than an event. It is a celebration
              of music, culture, friendship and community — bringing people
              together for one unforgettable night in Lagos.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* EVENT DETAILS                                         */}
      {/* ===================================================== */}

      <section className="border-y border-[#F3E8D0]/10 bg-[#2A1D18]">

        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">

          <div className="border-b border-[#F3E8D0]/10 p-8 sm:border-b-0 sm:border-r">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F3E8D0]/40">
              Date
            </p>

            <p className="mt-3 text-xl font-semibold text-[#F3E8D0]">
              29 August 2026
            </p>
          </div>

          <div className="border-b border-[#F3E8D0]/10 p-8 sm:border-b-0 sm:border-r">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F3E8D0]/40">
              Time
            </p>

            <p className="mt-3 text-xl font-semibold text-[#F3E8D0]">
              8:00 PM - 3:00 AM
            </p>
          </div>

          <div className="p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F3E8D0]/40">
              Location
            </p>

            <p className="mt-3 text-xl font-semibold text-[#F3E8D0]">
              Lekki, Lagos
            </p>
          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* EXPERIENCE                                             */}
      {/* ===================================================== */}

      <section className="bg-[#11151C] px-6 py-24 sm:py-32">

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A83E]">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#F3E8D0] sm:text-5xl">
              Afrobeats x Afrohouse
              <br />
              The best of both worlds.
            </h2>

          </div>

          <p className="text-lg leading-8 text-[#F3E8D0]/60">
            Can't decide between being at a rave or an Afrobeats party?
            No worries, we got you!
            <br />
            <br />
            Our lineup is sure to deliver the best of both, alongside great
            food, games, conversations and the kind of atmosphere that makes
            you wish the day didn't have to end. The Final Cookout brings
            everything together in one place.
          </p>

        </div>

      </section>


      {/* ===================================================== */}
      {/* ID CTA                                                 */}
      {/* ===================================================== */}

      <section className="bg-[#2A1D18] px-6 py-24 sm:py-32">

        <div
          className="
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-[#F3E8D0]/10
            bg-[#F3E8D0]/5
            p-8
            text-center
            backdrop-blur-md
            sm:p-16
          "
        >

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A83E]">
            You're part of it
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#F3E8D0] sm:text-6xl">
            Get your Cookout ID.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[#F3E8D0]/60">
            Create your official Final Cookout ID and carry a little
            piece of the experience with you.
          </p>

          <Link
            href="/id"
            className="
              mt-8
              inline-flex
              rounded-xl
              bg-[#E8A83E]
              px-8
              py-4
              font-semibold
              uppercase
              tracking-wide
              text-[#11151C]
              transition
              hover:bg-[#F3C56B]
            "
          >
            Create My ID
          </Link>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FOOTER                                                 */}
      {/* ===================================================== */}

      <footer className="border-t border-[#F3E8D0]/10 bg-[#11151C] px-6 py-10">

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            gap-4
            text-sm
            text-[#F3E8D0]/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © 2026 The 9inth Crew. All rights reserved.
          </p>

          <Link
            href="/waitlist"
            className="transition hover:text-[#F3E8D0]"
          >
            Join the Newsletter
          </Link>

        </div>

      </footer>

    </main>
  );
}