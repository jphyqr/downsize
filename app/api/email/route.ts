
import { NextResponse } from "next/server";
import { Resend } from 'resend';

export const runtime = "edge";

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
     const {subject, to, from, html} = await req.json();
    resend.emails.send({
      from: 'downsize@downsize.com',
      to: to,
      subject: subject,
      html: html
    });
  return NextResponse.json({success:true});
}
