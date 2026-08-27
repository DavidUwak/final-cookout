'use client';

import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';

export default function IDPage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [genre, setGenre] = useState('');
  const [song, setSong] = useState('');
  const [cookoutId, setCookoutId] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id =
      'TFC-' +
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

  setCookoutId(id);
}, []);

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPhoto(imageUrl);
  };

  const handleGenerate = async () => {
    if (!cardRef.current) {
      console.error('ID card element not found');
      return;
    }

    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });

      const link = document.createElement('a');

      link.download = `${name
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()}-final-cookout-id.png`;

      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Failed to generate ID:', error);
    }
  };

  return (
    <main className="min-h-screen bg-cookout-navy text-cookout-cream">

      {/* HEADER */}
      <header className="border-b border-cookout-cream/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <a href="/">
            <img
              src="/wordmark.png"
              alt="The Final Cookout"
              className="w-28 h-auto object-contain sm:w-32"
            />
          </a>

          <a
            href="/"
            className="text-sm text-cookout-cream/60 transition hover:text-cookout-cream"
          >
            Back Home
          </a>

        </div>
      </header>


      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cookout-gold">
            You're part of it
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Create your Cookout ID.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-cookout-cream/60">
            Upload your photo and create your official Final Cookout
            identity card.
          </p>

        </div>


        {/* GENERATOR */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
          {/* ID CARD PREVIEW */}
          <div className="flex justify-center">

            <div
               ref={cardRef}
              className={`
                relative
                w-full
                max-w-[390px]
                overflow-hidden
                rounded-sm
                p-5
                shadow-2xl
                transition-all
                duration-500
                ${
                  genre === 'Afrohouse'
                    ? 'bg-[#E8F0E8] text-[#173B2D] shadow-[#173B2D]/20'
                    : 'bg-[#FFF4E3] text-[#24140E] shadow-orange-900/20'
                }
              `}
            >

              {/* THEME ACCENT */}
              <div
                className={`
                  absolute
                  left-0
                  top-0
                  h-2
                  w-full
                  transition-all
                  duration-500
                  ${
                    genre === 'Afrohouse'
                      ? 'bg-[#287A5B]'
                      : 'bg-[#D95F32]'
                  }
                `}
              />

              {/* PHOTO */}
              <div className="mt-5">

                <div
                  className={`
                    aspect-[4/4.6]
                    w-full
                    overflow-hidden
                    border-[6px]
                    bg-black/5
                    transition-all
                    duration-500
                    ${
                      genre === 'Afrohouse'
                        ? 'border-[#287A5B]'
                        : 'border-[#D95F32]'
                    }
                  `}
                >

                  {photo ? (
                    <img
                      src={photo}
                      alt="Cookout ID photo"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-center">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-30">
                          Your Photo
                        </p>

                        <p className="mt-2 text-xs opacity-20">
                          Upload a photo to preview
                        </p>
                      </div>
                    </div>
                  )}

                </div>

              </div>


              {/* DETAILS */}
              <div className="px-2 pb-2 pt-5">

                {/* NAME */}
                <div className="border-b border-black/10 pb-3">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-40">
                    Name
                  </p>

                  <p className="mt-1 truncate text-xl font-black uppercase tracking-tight">
                    {name || 'YOUR NAME'}
                  </p>

                </div>


                {/* DETAILS GRID */}
                <div className="mt-4 grid grid-cols-[80px_1fr] gap-y-3 text-xs">

                  <span className="font-semibold uppercase tracking-[0.15em] opacity-40">
                    Genre
                  </span>

                  <span className="font-bold uppercase">
                    {genre || '—'}
                  </span>


                  <span className="font-semibold uppercase tracking-[0.15em] opacity-40">
                    Song
                  </span>

                  <span className="truncate font-bold">
                    {song || '—'}
                  </span>


                  <span className="font-semibold uppercase tracking-[0.15em] opacity-40">
                    ID
                  </span>

                  <span className="font-bold tracking-wider">
                    {cookoutId || 'TFC-XXXXXX'}
                  </span>

                </div>


                {/* FOOTER */}
                <div className="mt-5 flex items-end justify-between border-t border-black/10 pt-3">

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] opacity-40">
                      The Final Cookout
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] opacity-40">
                      29 August 2026 · Lagos
                    </p>
                  </div>

                  <p
                    className={`
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      ${
                        genre === 'Afrohouse'
                          ? 'text-[#287A5B]'
                          : 'text-[#D95F32]'
                      }
                    `}
                  >
                    {genre || 'COOKOUT'}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-cookout-cream/10 bg-cookout-cream/5 p-6 sm:p-8">

            <h2 className="text-2xl font-semibold">
              Personalize your ID
            </h2>

            <p className="mt-2 text-sm leading-6 text-cookout-cream/50">
              Add your details below. Your ID will update automatically.
            </p>

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-cookout-cream/10
                  bg-cookout-cream/5
                  px-4
                  py-4
                  text-cookout-cream
                  outline-none
                  transition
                  focus:border-cookout-gold
                "
              />
            </div>


            {/* PHOTO */}
            <div className="mt-6">

              <label
                htmlFor="photo"
                className="mb-2 block text-sm font-medium"
              >
                Your Photo
              </label>

              <label
                htmlFor="photo"
                className="
                  flex
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-dashed
                  border-cookout-cream/20
                  bg-cookout-cream/5
                  px-6
                  py-10
                  text-center
                  transition
                  hover:border-cookout-gold
                  hover:bg-cookout-cream/10
                "
              >

                {photo ?   (
                  <img
                    src={photo}
                    alt="Uploaded preview"
                    className="h-40 w-40 rounded-xl object-cover"
                  />
                ) : (
                  <>
                    <span className="text-lg font-medium">
                      Upload your photo
                    </span>

                    <span className="mt-2 text-sm text-cookout-cream/40">
                      JPG, PNG or WEBP
                    </span>
                  </>
                )}

                <input
                  id="photo"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />

              </label>

            </div>

            {/* GENRE */}
            <div className="mt-6">

              <label className="mb-3 block text-sm font-medium">
                Your Favourite Genre
              </label>

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setGenre('Afrobeats')}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                    transition
                    ${
                      genre === 'Afrobeats'
                        ? 'border-cookout-gold bg-cookout-gold text-cookout-navy'
                        : 'border-cookout-cream/10 bg-cookout-cream/5 text-cookout-cream/60 hover:border-cookout-gold/50'
                    }
                  `}
                >
                  Afrobeats
                </button>

                <button
                  type="button"
                  onClick={() => setGenre('Afrohouse')}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                    transition
                    ${
                      genre === 'Afrohouse'
                        ? 'border-cookout-gold bg-cookout-gold text-cookout-navy'
                        : 'border-cookout-cream/10 bg-cookout-cream/5 text-cookout-cream/60 hover:border-cookout-gold/50'
                    }
                  `}
                >
                  Afrohouse
                </button>

              </div>

            </div>

            {/* FAVOURITE SONG */}
            <div className="mt-6">

              <label
                htmlFor="song"
                className="mb-2 block text-sm font-medium"
              >
                Favourite Song
              </label>

              <input
                id="song"
                type="text"
                value={song}
                onChange={(e) => setSong(e.target.value)}
                placeholder="What's your song?"
                maxLength={40}
                className="
                  w-full
                  rounded-xl
                  border
                  border-cookout-cream/10
                  bg-cookout-cream/5
                  px-4
                  py-4
                  text-cookout-cream
                  outline-none
                  transition
                  focus:border-cookout-gold
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleGenerate}
              disabled={!name || !photo || !genre || !song}
              className="
                mt-8
                w-full
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
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Generate My ID
            </button>

          </div>
        </div>

      </section>

    </main>
  );
}
