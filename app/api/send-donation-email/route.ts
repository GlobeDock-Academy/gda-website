import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: 'Missing name or email' }, { status: 400 });
    }

    // --- 1. Generate PDF Certificate ---
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Load logo
    const logoPath = path.resolve('./public/images/logo.png');
    const logoImageBytes = await fs.readFile(logoPath);
    const logoImage = await pdfDoc.embedPng(logoImageBytes.toString('base64'));
    const logoDims = logoImage.scale(0.25);

    // Draw logo
    page.drawImage(logoImage, {
      x: width / 2 - logoDims.width / 2,
      y: height - 150,
      width: logoDims.width,
      height: logoDims.height,
    });

    // Add text
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText('Certificate of Ambassadorship', {
        x: 50,
        y: height - 250,
        font: helveticaBold,
        size: 30,
        color: rgb(0, 0, 0),
    });

    page.drawText('This certifies that', {
        x: 50,
        y: height - 320,
        font: helvetica,
        size: 20,
    });

    page.drawText(name, {
        x: 50,
        y: height - 360,
        font: helveticaBold,
        size: 32,
        color: rgb(0.427, 0.239, 0.58), // #6D3D94
    });

    page.drawText('is hereby recognized as a', {
        x: 50,
        y: height - 410,
        font: helvetica,
        size: 20,
    });

    page.drawText('GlobeDock Ambassador', {
        x: 50,
        y: height - 450,
        font: helveticaBold,
        size: 28,
    });

    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    page.drawText(`Date: ${date}`, {
        x: 50,
        y: height - 550,
        font: helvetica,
        size: 12,
    });

    const pdfBytes = await pdfDoc.save();

    // --- 2. Send Email --- 
    // IMPORTANT: Use environment variables for sensitive data in production
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'user@example.com',
        pass: process.env.SMTP_PASS || 'password',
      },
    });

    const mailOptions = {
      from: '"GlobeDock Academy" <no-reply@gdacademy.et>',
      to: email,
      subject: 'Thank You for Your Donation to GlobeDock Academy!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Dear ${name},</h2>
          <p>Thank you for your generous donation to GlobeDock Academy. Your support makes a huge difference in our mission to provide quality education to students in Ethiopia.</p>
          <p>We are thrilled to welcome you as a <strong>GlobeDock Ambassador</strong>. As a token of our gratitude, please find your official certificate attached to this email.</p>
          <p>Your contribution is invaluable, and we look forward to achieving great things together.</p>
          <p>Sincerely,</p>
          <p><strong>The GlobeDock Academy Team</strong></p>
        </div>
      `,
      attachments: [
        {
          filename: 'GlobeDock_Ambassador_Certificate.pdf',
          content: Buffer.from(pdfBytes),
          contentType: 'application/pdf',
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
