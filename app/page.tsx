'use client';

import { useState } from 'react';

export default function Home() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          fullName,
          email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || 'Something went wrong'
        );
      }

      setSuccess(true);

      setFullName('');
      setEmail('');

    } catch (err: any) {

      setError(err.message);

    } finally {

      setLoading(false);
    }
  };

  return (
    <main
      className="
        relative
        min-h-screen
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-xl
          px-6
          text-center
          text-white
        "
      >
        {/* Heading */}
        <h1
          className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
            tracking-wide
            mb-4
          "
        >
          The Final Cookout
        </h1>

        {/* Subtext */}
        <p
          className="
            text-sm
            md:text-base
            text-gray-300
            mb-10
          "
        >
          Music. Culture. Energy. Community.
        </p>

        {/* Success Message */}
        {success ? (
          <div
            className="
              bg-white/10
              border
              border-orange-500
              rounded-2xl
              p-6
              backdrop-blur-md
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-orange-500
                mb-2
              "
            >
              You're In!
            </h2>

            <p>
              Check your email for confirmation.
            </p>
          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-white/10
                border
                border-white/20
                text-white
                placeholder:text-gray-300
                outline-none
                backdrop-blur-md
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-white/10
                border
                border-white/20
                text-white
                placeholder:text-gray-300
                outline-none
                backdrop-blur-md
              "
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                transition-all
                duration-300
                p-4
                rounded-xl
                font-semibold
                uppercase
                tracking-wide
              "
            >
              {loading
                ? 'Joining...'
                : 'Join Waitlist'}
            </button>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}
          </form>
        )}

        {/* Footer */}
        <p
          className="
            mt-10
            text-xs
            text-gray-400
            leading-relaxed
          "
        >
          By joining this waitlist you agree to
          receive updates about The Final Cookout.
        </p>
      </div>
    </main>
  );
}