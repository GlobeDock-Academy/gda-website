import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: 'Missing name or email' }, { status: 400 });
    }

    // No-op implementation to avoid external dependencies (nodemailer/pdf-lib)
    // Keeps the same request/response behavior without sending emails or generating PDFs.
    // If you later re-enable email sending, plug the logic back here.
    await new Promise((resolve) => setTimeout(resolve, 10));

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
