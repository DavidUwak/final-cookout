'use client';

export default function IDPreviewPage() {
  return (
    <main className="min-h-screen bg-cookout-navy text-cookout-cream">

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cookout-gold">
          You're part of it
        </p>

        <h1 className="mt-4 text-center text-4xl font-bold sm:text-5xl">
          Your Cookout ID
        </h1>

        <p className="mt-4 max-w-md text-center text-cookout-cream/50">
          Your official Final Cookout identity card is ready.
        </p>

        {/* CARD WILL GO HERE */}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            className="
              rounded-xl
              bg-cookout-gold
              px-8
              py-4
              font-semibold
              uppercase
              tracking-wide
              text-cookout-navy
              transition
              hover:bg-[#F3C56B]
            "
          >
            Download My ID
          </button>

          <a
            href="/id"
            className="
              rounded-xl
              border
              border-cookout-cream/20
              px-8
              py-4
              text-center
              font-semibold
              uppercase
              tracking-wide
              transition
              hover:bg-cookout-cream/10
            "
          >
            Create Another
          </a>

        </div>

      </section>

    </main>
  );
}
