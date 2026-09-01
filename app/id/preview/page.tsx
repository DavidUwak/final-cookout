'use client';

import { useEffect, useState } from 'react';

type IDData = {
  name: string;
  photo: string;
  genre: string;
  song: string;
  cookoutId: string;
};

export default function IDPreviewPage() {
  const [idData, setIdData] = useState<IDData | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('finalCookoutID');

    if (!storedData) return;

    try {
      setIdData(JSON.parse(storedData));
    } catch (error) {
      console.error('Failed to read ID data:', error);
    }
  }, []);

  if (!idData) {
    return (
      <main className="min-h-screen bg-cookout-navy text-cookout-cream">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="text-cookout-cream/60">
              No Cookout ID found.
            </p>

            <a
              href="/id"
              className="mt-6 inline-flex rounded-xl bg-cookout-gold px-6 py-3 font-semibold text-cookout-navy"
            >
              Create Your ID
            </a>
          </div>
        </section>
      </main>
    );
  }

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


        {/* ID CARD */}

        <div className="mt-10">

          <div
            className={`
              w-[350px]
              overflow-hidden
              rounded-sm
              p-5
              pb-7
              shadow-2xl

              ${
                idData.genre === 'Afrohouse'
                  ? 'bg-[#E8F0E8] text-[#173B2D]'
                  : 'bg-[#FFF4E3] text-[#24140E]'
              }
            `}
          >

            {/* PHOTO */}

            <div className="aspect-[4/4.6] w-full overflow-hidden">

              <img
                src={idData.photo}
                alt={`${idData.name}'s Cookout ID`}
                className="h-full w-full object-cover"
              />

            </div>


            {/* DETAILS */}

            <div className="px-2 pt-6">

              <h2 className="text-center text-2xl font-black uppercase tracking-tight">
                {idData.name}
              </h2>


              <div className="mt-5 space-y-3">

                <div className="flex items-baseline justify-between border-b border-black/10 pb-2">

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Genre
                  </span>

                  <span className="text-xs font-bold uppercase">
                    {idData.genre}
                  </span>

                </div>


                <div className="flex items-baseline justify-between border-b border-black/10 pb-2">

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Song
                  </span>

                  <span className="max-w-[190px] truncate text-xs font-bold">
                    {idData.song}
                  </span>

                </div>


                <div className="flex items-baseline justify-between">

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Cookout ID
                  </span>

                  <span
                    className={`
                      text-xs
                      font-black
                      tracking-w
