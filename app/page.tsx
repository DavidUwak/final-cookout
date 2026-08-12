import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
       <div className="absolute inset-0 bg-[#11151C]" />

<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/bg.jpg')",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
  }}
/>

<div className="absolute inset-0 bg-black/30" />

<div
  className="
    absolute
    inset-x-0
    bottom-0
    h-80
    bg-gradient-to-b
    from-transparent
    to-[#11151C]
  "
/>

        <div className="relative z-10 w-full max-w-6xl px-6 py-24 text-center">
          
          <img
            src="/wordmark.png"
            alt="The Final Cookout"
            className="mx-auto w-full max-w-3xl"
          />

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/70">
            Music. Energy. Culture. Community.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm uppercase tracking-widest sm:flex-row sm:gap-6">
            <span>29 August 2026</span>
            <span className="hidden sm:block">•</span>
            <span>Lekki, Lagos</span>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://conviatickets.com/events/O5Y1OB4X"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold uppercase tracking-wide transition hover:bg-orange-600"
            >
              Get Your Ticket
            </a>

            <Link
              href="/id"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold uppercase tracking-wide backdrop-blur-md transition hover:bg-white/20"
            >
              Get Your Cookout Photo
            </Link>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            What is The Final Cookout?
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The best night of the summer.
            <br />
            One unforgettable experience.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            The Final Cookout is more than an event. It is a celebration
            of music, culture, friendship and community — bringing people
            together for one unforgettable day in Lagos.
          </p>
        </div>
      </section>


      {/* EVENT DETAILS */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">

          <div className="p-8 sm:border-r sm:border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Date
            </p>
            <p className="mt-3 text-xl font-semibold">
              29 August 2026
            </p>
          </div>

          <div className="p-8 sm:border-r sm:border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Time
            </p>
            <p className="mt-3 text-xl font-semibold">
              8:00 PM - 3:00 AM
            </p>
          </div>

          <div className="p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Location
            </p>
            <p className="mt-3 text-xl font-semibold">
              Lekki, Lagos
            </p>
          </div>

        </div>
      </section>


      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Afrobeats x Afrohouse
              <br />
              The best of both worlds.
            </h2>
          </div>

          <p className="text-lg leading-8 text-white/60">
            Can't decide between being at a rave or an afrobeat party? No worries, we got you!
            <br/>
            Our lineup is sure to deliver the best of both, alongside great food, games, conversations and the kind of atmosphere that makes you wish the day didn't have to end.
            The Final Cookout brings everything together in one place.
          </p>

        </div>
      </section>


      {/* ID CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md sm:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            You're part of it
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
            Get your Cookout ID.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/60">
            Create your official Final Cookout ID and carry a little
            piece of the experience with you.
          </p>

          <Link
            href="/id"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-semibold uppercase tracking-wide transition hover:bg-orange-600"
          >
            Create My ID
          </Link>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 The 9inth Crew. All rights reserved.
          </p>

          <Link
            href="/waitlist"
            className="transition hover:text-white"
          >
            Join the Newsletter
          </Link>

        </div>
      </footer>

    </main>
  );
}