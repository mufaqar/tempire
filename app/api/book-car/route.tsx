// app/api/book-car/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // ✅ Get all fields from form
        const {
            name,
            email,
            carType,
            pickUp,
            dropOff,
            pickUpDate,
            pickUpTime,
            dropDate,
            dropTime,
        } = await req.json();

        // ✅ Validate required fields
        if (!name || !email || !carType || !pickUp || !pickUpDate || !pickUpTime || !dropDate || !dropTime) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // ✅ Configure transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASSWORD_TOKEN,
            },
        });

        // ✅ Build email body
        const emailHtml = `
      <h2>🚗 Rent A Car Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Car Type:</strong> ${carType}</p>
      <p><strong>Pick Up Location:</strong> ${pickUp}</p>
      <p><strong>Drop Off Location:</strong> ${dropOff || "N/A"}</p>
      <p><strong>Pick Up Date & Time:</strong> ${pickUpDate} at ${pickUpTime}</p>
      <p><strong>Drop Off Date & Time:</strong> ${dropDate} at ${dropTime}</p>
    `;

        // ✅ Send email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: "jaweeriashoukat@gmail.com, mufaqar@gmail.com", // ✅ Fixed typo in gmail
            replyTo: email,
            subject: `New Booking: ${carType} by ${name}`,
            html: emailHtml,
        });

        return NextResponse.json(
            { success: true, message: "Booking email sent successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
