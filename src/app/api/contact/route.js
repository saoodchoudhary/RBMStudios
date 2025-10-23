import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, budget, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'your-email@gmail.com', // Your email here
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B35;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #FF6B35;">
            <h3 style="color: #333; margin-bottom: 15px;">Client Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${budget}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin: 20px 0 10px 0;">Project Details</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 5px; border-left: 4px solid #007bff;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}