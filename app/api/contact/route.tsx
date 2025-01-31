import { NextRequest, NextResponse } from "next/server";
import transporter from "../../lib/nodemailer";

// Define the structure of the incoming request body
interface EmailRequestBody {
  name: string;
  senderEmail: string;
  subject: string;
  message: string;
}

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, senderEmail, subject, message }: EmailRequestBody =
      await req.json();

    // Validate senderEmail
    if (!senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Validate message
    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { message: "Message cannot be empty." },
        { status: 400 }
      );
    }

    // Ensure the EMAIL_USER environment variable is defined
    const emailUser = process.env.EMAIL_USER;
    if (!emailUser) {
      throw new Error("EMAIL_USER is not defined in environment variables.");
    }

    // Send email to yourself (admin)
    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: `📩 New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f8f9fa;">
          <h2 style="color: #007bff; text-align: center;">✨ New Message from ${name}</h2>
          <p><strong>From:</strong> ${senderEmail}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #fff; padding: 15px; border-left: 4px solid #007bff; font-style: italic;">${message}</blockquote>
          <p style="font-size: 14px; color: #555; text-align: center;">You received this message via your contact form.</p>
        </div>
      `,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: emailUser,
      to: senderEmail,
      subject: "🚀 Thank You for Reaching Out!",
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f8f9fa;">
          <h2 style="color: #007bff; text-align: center;">🤝 Thank You for Your Message!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="background: #fff; padding: 15px; border-left: 4px solid #007bff; font-style: italic;">${message}</blockquote>
          <p>Looking forward to connecting with you soon! 😊</p>
          <p style="font-size: 14px; text-align: center;"><strong>Himanshu Dhillon</strong></p>
          <p style="font-size: 14px; text-align: center;"><a href="https://portfolio-next-silk.vercel.app/" style="color: #007bff; text-decoration: none;">🔗 Visit My Portfolio</a></p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `Failed to send emails: ${error.message}` },
      { status: 500 }
    );
  }
}
