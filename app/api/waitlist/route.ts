import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
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
  from: 'The 9inth Crew <info@the9inthcrew.com>',
  to: email,

  subject: 'You’re officially on the waitlist 🔥',

  html: `
    <div style="
      font-family: Arial, sans-serif;
      padding: 40px;
      background: #000;
      color: #fff;
    ">
      <h1 style="color: orange;">
        The Final Cookout
      </h1>

      <p>
        Hi ${fullName},
      </p>

      <p>
        Thank you for joining the waitlist for <strong>The Final Cookout</strong>.We're excited to have you with us!
      </p>

      <p>
        You're officially on the list, and we'll be keeping you updated with important announcements, early access details, and exclusive information before anyone else.
      </p>
      
      <p>
      Keep an eye on your inbox - something exciting is coming soon. 👀
      </p>

      <ul>
        <li>Event announcements</li>
        <li>Ticket drops</li>
        <li>Lineup updates</li>
        <li>Exclusive info</li>
      </ul>

      <br />

      <p>
        With love,
        The 9inth Crew
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