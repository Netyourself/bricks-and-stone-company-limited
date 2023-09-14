import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      //Define email-gmail transport configuration
      const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'Gmail'
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      // Create a transporter using your hosting provider's SMTP settings
      // const transporter = nodemailer.createTransport({
      //   host: 'mail.cain-masonry.com', // Replace with your hosting provider's SMTP server
      //   port: 465, // Typically, the SMTP port is 587 for TLS encryption
      //   secure: true, // Set to true if your hosting provider requires a secure connection (SMTPS)
      //   auth: {
      //     user: process.env.EMAIL_USER, // Your email address
      //     pass: process.env.EMAIL_PASS, // Your email account password
      //   },
      //   // Increase the connection timeout (in milliseconds)
      //   connectionTimeout: 10000, // 10 seconds
      // });

      // Email content
      const mailOptions = {
        from: 'cain-masonry.com Website form',
        to: 'caincontracting5@gmail.com', // The recipient's email address
        subject: 'New Cain Contracting Website Contact Form Submission',
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      };
      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log('Eroor in email', error);
      res.status(500).json({ error: 'Email sending failed' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
