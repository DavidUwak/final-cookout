'use client';

import { useState } from 'react';

export default function IDPage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPhoto(imageUrl);
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


        {/* FORM */}
        <div className="mx-auto mt-12 max-w-xl">

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

              {photo ? (
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


          {/* BUTTON */}
          <button
            type="button"
            disabled={!name || !photo}
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

      </section>

    </main>
  );
}
