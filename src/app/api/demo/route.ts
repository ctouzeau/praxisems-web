import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { name, email, phone, program } = await req.json();

  if (!name || !email || !program) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await supabase.from("leads").insert({ name, email, phone, program });

    await resend.emails.send({
      from: "PraxisEMS <noreply@touzeauconsulting.com>",
      to: ["touzeauc@gmail.com"],
      subject: `Demo request — ${program}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "not provided"}</p>
        <p><strong>Program:</strong> ${program}</p>
      `,
    });

    await resend.emails.send({
      from: "PraxisEMS <noreply@touzeauconsulting.com>",
      to: [email],
      subject: "We got your demo request",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out — we'll be in touch within one business day to schedule your demo.</p>
        <p>In the meantime, feel free to reply to this email with any questions.</p>
        <p>— The PraxisEMS team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Demo submission error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
