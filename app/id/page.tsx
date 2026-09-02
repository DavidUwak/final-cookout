'use client';

import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';

type IDData = {
  name: string;
  photo: string;
  genre: string;
  song: string;
  cookoutId: string;
};

export default function IDPreviewPage() {
  const [idData, setIdData] = useState<IDData | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('finalCookoutID');

    if (!storedData) return;

    try {
      setIdData(JSON.parse(storedData));
    } catch (error) {
      console.error('Failed to read ID data:', error);
    }
  }, []);

  const handleDownload = async () => {
    if (!cardRef.current || !idData) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = `${idData.name.replace(/\s+/g, '-').toLowerCase()}-cookout-id.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to download Cookout ID:', error);
    }
  };

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

  const isAfrohouse = idData.genre === 'Afrohouse';

  return (
    <main className="min-h-screen bg-cookout-navy text-cookout-cream">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">

        {/* HEADING */}

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
            ref={cardRef}
            className={`
              w-[350px]
              overflow-hidden
              rounded-sm
              p-5
              pb-7
              shadow-2xl
              ${
                isAfrohouse
                  ? 'bg-[#E8F0E8] text-[#173B2D] shadow-[#173B2D]/20'
                  : 'bg-[#FFF4E3] text-[#24140E] shadow-orange-900/20'
              }
            `}
          >

            {/* THEME ACCENT */}

            <div
              className={`
                h-2
                w-full
                ${
                  isAfrohouse
                    ? 'bg-[#287A5B]'
                    : 'bg-[#D95F32]'
                }
              `}
            />


            {/* PHOTO */}

            <div className="mt-5 aspect-[4/4.6] w-full overflow-hidden">
              <img
                src={idData.photo}
                alt={`${idData.name}'s Cookout ID`}
                className="h-full w-full object-cover"
              />
            </div>


            {/* DETAILS */}

            <div className="px-2 pt-6">

              {/* NAME */}

              <h2 className="text-center text-2xl font-black uppercase tracking-tight">
                {idData.name}
              </h2>


              {/* GENRE */}

              <div className="mt-5 space-y-3">

                <div className="flex items-baseline justify-between border-b border-black/10 pb-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Genre
                  </span>

                  <span className="text-xs font-bold uppercase">
                    {idData.genre}
                  </span>
                </div>


                {/* SONG */}

                <div className="flex items-baseline justify-between border-b border-black/10 pb-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Song
                  </span>

                  <span className="max-w-[190px] truncate text-xs font-bold">
                    {idData.song}
                  </span>
                </div>


                {/* COOKOUT ID */}

                <div className="flex items-baseline justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Cookout ID
                  </span>

                  <span
                    className={`
                      text-xs
                      font-black
                      tracking-widest
                      ${
                        isAfrohouse
                          ? 'text-[#287A5B]'
                          : 'text-[#D95F32]'
                      }
                    `}
                  >
                    {idData.cookoutId}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* BUTTONS */}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            onClick={handleDownload}
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