import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM;
  const toAddress =
    process.env.CONTACT_TO_EMAIL ||
    process.env.EMAIL_USERNAME ||
    process.env.RESEND_FROM;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured (missing RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  if (!fromAddress) {
    return NextResponse.json(
      {
        error:
          "Email sender is not configured (missing CONTACT_FROM_EMAIL/RESEND_FROM).",
      },
      { status: 500 }
    );
  }

  if (!toAddress) {
    return NextResponse.json(
      {
        error:
          "Email recipient is not configured (missing CONTACT_TO_EMAIL/EMAIL_USERNAME/RESEND_FROM).",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    });
    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form sendMail error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message.",
        detail:
          process.env.NODE_ENV === "development" ? error?.message : undefined,
      },
      { status: 500 }
    );
  }
}
