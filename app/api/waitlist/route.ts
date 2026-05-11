import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email } = body;

    // Validate fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          full_name: fullName,
          email,
        },
      ]);

    // Handle database errors
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'The Final Cookout <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to The Final Cookout 🔥',
      html: `
        <div style="font-family:sans-serif;padding:40px;background:#111;color:#fff;">
          <h1 style="color:#ff6b00;">
            You're officially on the waitlist.
          </h1>

          <p>
            Thanks for signing up for The Final Cookout.
          </p>

          <p>
            We’ll keep you updated with announcements,
            early access, and important event information.
          </p>

          <br />

          <p>See you soon.</p>

          <p>
            <strong>The Final Cookout Team</strong>
          </p>
        </div>
      `,
    });

    // Return success
    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}