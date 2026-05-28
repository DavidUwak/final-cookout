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
      color: #ffffff;
    ">


      <div style="text-align: center;">
      <img src="https://www.the9inthcrew.com/logoblue2.png"
      alt="The Final Cookout"
      style="
        width: 100%;
        max-width: 420px;
        border-radius: 12px;
        margin-bottom: 20px;
      "
      >
      </div>

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

      <p> 
      Tap on the icons below to follow our social handles to catch behind-the-scene peeks, lineup announcements, and all the event updates you won't want to miss.
      </p>

      <div style="
  margin-top: 20px;
  text-align: center;
">

  <!-- Instagram -->
  <a
    href="https://www.instagram.com/the_9inthcrew?igsh=MXRmN3FxY3hmMWFvdQ=="
    style="
      display: inline-block;
      margin-right: 14px;
      text-decoration: none;
    "
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
      alt="Instagram"
      width="28"
      height="28"
      style="
        vertical-align: middle;
        filter: invert(1);
      "
    />
  </a>

  <!-- TikTok -->
  <a
    href="https://www.tiktok.com/@9inth.crew?_r=1&_t=ZS-96iixHlaYrv"
    style="
      display: inline-block;
      text-decoration: none;
    "
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
      alt="TikTok"
      width="28"
      height="28"
      style="
        vertical-align: middle;
        filter: invert(1);
      "
    />
  </a>

</div>

      <p>
        With love, <br />
        <strong>The 9inth Crew</strong>
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