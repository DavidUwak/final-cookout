'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { toPng } from 'html-to-image';

type IDData = {
  name: string;
  photo: string;
  genre: string;
  song: string;
  cookoutId: string;
};

type CardProps = {
  data: IDData;
  genre: 'Afrohouse' | 'Afrobeats';
  cardRef?: React.RefObject<HTMLDivElement | null>;
};

function CookoutCard({ data, genre, cardRef }: CardProps) {
  const isAfrohouse = genre === 'Afrohouse';

  const colors = isAfrohouse
    ? {
        main: '#287A5B',
        dark: '#173B2D',
        ribbon: '#287A5B',
        paper: '#E8F0E8',
      }
    : {
        main: '#D95F32',
        dark: '#24140E',
        ribbon: '#D95F32',
        paper: '#FFF4E3',
      };

  return (
    <div
      ref={cardRef}
      className="relative w-[350px] shrink-0"
      style={{
        transform: 'rotate(0deg)',
      }}
    >
      {/* TAPE */}
      <div
        className="absolute left-1/2 top-[-13px] z-30 h-[28px] w-[75px] -translate-x-1/2 rotate-[2deg] opacity-80"
        style={{
          background:
            'linear-gradient(90deg, rgba(185,157,101,.9), rgba(218,193,143,.82), rgba(174,145,91,.88))',
          boxShadow: '0 1px 4px rgba(0,0,0,.3)',
        }}
      />

      {/* CARD */}
      <div
        className="relative overflow-hidden rounded-[6px] p-[10px] shadow-[0_15px_35px_rgba(0,0,0,.45)]"
        style={{
          backgroundColor: colors.paper,
          color: colors.dark,
        }}
      >
        {/* PAPER TEXTURE */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0,0,0,.5) 0 1px, transparent 1px),
              radial-gradient(circle at 70% 40%, rgba(0,0,0,.35) 0 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, rgba(0,0,0,.4) 0 1px, transparent 1px)
            `,
            backgroundSize: '13px 13px, 19px 19px, 17px 17px',
          }}
        />

        {/* GENRE RIBBON */}
        <div
          className="absolute left-[-13px] top-[20px] z-20 rotate-[-8deg] px-4 py-[7px] text-[11px] font-black uppercase tracking-tight text-white shadow-md"
          style={{
            backgroundColor: colors.ribbon,
          }}
        >
          {genre}
        </div>

        {/* PHOTO */}
        <div className="relative z-10 overflow-hidden rounded-[3px]">
          <div className="aspect-[1.1/1] w-full">
            <img
              src={data.photo}
              alt={`${data.name}'s Cookout ID`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="relative z-10 px-2 pb-2 pt-3">
          {/* NAME */}
          <div className="flex items-baseline gap-3">
            <span
              className="w-[82px] shrink-0 text-[7px] font-black uppercase tracking-[0.12em]"
              style={{ color: colors.main }}
            >
              Name:
            </span>

            <span
              className="truncate text-[17px] leading-none"
              style={{
                fontFamily:
                  '"Comic Sans MS", "Bradley Hand", "Segoe Print", cursive',
              }}
            >
              {data.name}
            </span>
          </div>

          {/* GENRE */}
          <div className="mt-[7px] flex items-baseline gap-3">
            <span
              className="w-[82px] shrink-0 text-[7px] font-black uppercase tracking-[0.08em]"
              style={{ color: colors.main }}
            >
              Favourite Genre:
            </span>

            <span
              className="truncate text-[13px] font-medium"
              style={{
                fontFamily:
                  '"Comic Sans MS", "Bradley Hand", "Segoe Print", cursive',
              }}
            >
              {genre}
            </span>
          </div>

          {/* SONG */}
          <div className="mt-[7px] flex items-baseline gap-3">
            <span
              className="w-[82px] shrink-0 text-[7px] font-black uppercase tracking-[0.08em]"
              style={{ color: colors.main }}
            >
              Favourite Song:
            </span>

            <span
              className="max-w-[205px] truncate text-[13px] font-medium"
              style={{
                fontFamily:
                  '"Comic Sans MS", "Bradley Hand", "Segoe Print", cursive',
              }}
            >
              {data.song}
            </span>
          </div>

          {/* ID */}
          <div className="mt-[7px] flex items-baseline gap-3">
            <span
              className="w-[82px] shrink-0 text-[7px] font-black uppercase tracking-[0.08em]"
              style={{ color: colors.main }}
            >
              Cookout ID:
            </span>

            <span
              className="text-[11px] font-medium tracking-wide"
              style={{
                fontFamily:
                  '"Comic Sans MS", "Bradley Hand", "Segoe Print", cursive',
              }}
            >
              {data.cookoutId}
            </span>
          </div>
        </div>

        {/* COOKOUT STAMP */}
        <div
          className="absolute bottom-[13px] right-[10px] z-20 flex h-[53px] w-[53px] rotate-[-10deg] items-center justify-center rounded-full border-[2px] text-center"
          style={{
            borderColor: colors.main,
            color: colors.main,
          }}
        >
          <div
            className="flex h-[43px] w-[43px] items-center justify-center rounded-full border"
            style={{
              borderColor: colors.main,
            }}
          >
            <span className="text-[7px] font-black uppercase leading-[1.1]">
              THE FINAL
              <br />
              COOKOUT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IDPreviewPage() {
  const [idData, setIdData] = useState<IDData | null>(null);

  const afrohouseRef = useRef<HTMLDivElement>(null);
  const afrobeatsRef = useRef<HTMLDivElement>(null);

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
  if (!idData) return;

  const selectedRef =
    idData.genre === 'Afrohouse'
      ? afrohouseRef
      : afrobeatsRef;

  if (!selectedRef.current) return;

  try {
    // Clone the selected card so we can safely prepare it
    // without changing what the user sees on screen.
    const clone = selectedRef.current.cloneNode(
      true
    ) as HTMLDivElement;

    // Convert the uploaded blob image into a data URL.
    // This makes the image much more reliable when html-to-image
    // converts the card into a PNG.
    const images = clone.querySelectorAll('img');

    for (const image of images) {
      const src = image.getAttribute('src');

      if (!src) continue;

      if (src.startsWith('blob:')) {
        const response = await fetch(src);
        const blob = await response.blob();

        const dataUrl = await new Promise<string>(
          (resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
              if (typeof reader.result === 'string') {
                resolve(reader.result);
              } else {
                reject(
                  new Error('Failed to convert image')
                );
              }
            };

            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }
        );

        image.src = dataUrl;
      }
    }

    // Put the clone temporarily into the document so
    // html-to-image can calculate its dimensions correctly.
    clone.style.position = 'fixed';
    clone.style.left = '-10000px';
    clone.style.top = '0';
    clone.style.width = `${selectedRef.current.offsetWidth}px`;
    clone.style.zIndex = '-1';

    document.body.appendChild(clone);

    // Make sure the converted image has finished loading.
    const clonedImages = clone.querySelectorAll('img');

    await Promise.all(
      Array.from(clonedImages).map((img) => {
        if (img.complete) return Promise.resolve();

        return new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      })
    );

    await document.fonts.ready;

    const dataUrl = await toPng(clone, {
      pixelRatio: 3,
      cacheBust: true,
      backgroundColor:
        idData.genre === 'Afrohouse'
          ? '#E8F0E8'
          : '#FFF4E3',
    });

    document.body.removeChild(clone);

    const safeName = idData.name
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase();

    const link = document.createElement('a');

    link.download = `${safeName || 'cookout'}-cookout-id.png`;
    link.href = dataUrl;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error(
      'Failed to download Cookout ID:',
      error
    );
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

            <Link
              href="/id"
              className="
                mt-6
                inline-flex
                rounded-xl
                bg-cookout-gold
                px-6
                py-3
                font-semibold
                text-cookout-navy
                transition
                hover:bg-[#F3C56B]
              "
            >
              Create Your ID
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
      {/* BACKGROUND TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255,180,60,.15) 0 1px, transparent 2px),
            radial-gradient(circle at 75% 35%, rgba(255,255,255,.08) 0 1px, transparent 2px),
            radial-gradient(circle at 45% 75%, rgba(255,150,50,.1) 0 1px, transparent 2px),
            radial-gradient(circle at 90% 85%, rgba(255,255,255,.08) 0 1px, transparent 2px)
          `,
          backgroundSize: '75px 75px, 90px 90px, 110px 110px, 60px 60px',
        }}
      />

      {/* WARM GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-5 py-12 sm:px-6 sm:py-16">
        {/* HEADING */}
        <div className="w-full max-w-5xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cookout-gold sm:text-xs">
            PREVIEW YOUR ID
            <span className="ml-2 inline-block rotate-[35deg] text-sm">
              ↓
            </span>
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-7 flex w-full flex-col items-center justify-center gap-10 sm:mt-10 sm:flex-row sm:items-start sm:gap-5 lg:gap-8">
          <CookoutCard
            data={idData}
            genre="Afrohouse"
            cardRef={afrohouseRef}
          />

          <CookoutCard
            data={idData}
            genre="Afrobeats"
            cardRef={afrobeatsRef}
          />
        </div>

        {/* NOTE */}
        <div className="mt-8 flex max-w-[270px] items-center gap-2 rounded-md bg-white/[0.04] px-4 py-3 text-center text-[9px] leading-4 text-white/60">
          <span className="text-sm text-cookout-gold">✦</span>
          <span>
            Your ID theme changes based on your favourite genre.
            Rep your vibe!
          </span>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={handleDownload}
            className="
              rounded-xl
              bg-cookout-gold
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-wide
              text-cookout-navy
              transition
              hover:bg-[#F3C56B]
              active:scale-[0.98]
            "
          >
            Download My ID
          </button>

          <Link
            href="/id"
            className="
              rounded-xl
              border
              border-white/15
              px-8
              py-4
              text-center
              text-sm
              font-semibold
              uppercase
              tracking-wide
              text-white/80
              transition
              hover:bg-white/10
            "
          >
            Create Another
          </Link>
        </div>
      </section>
    </main>
  );
}