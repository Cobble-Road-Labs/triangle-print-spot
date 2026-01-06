import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, reason, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !reason || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Format reason for display
        const reasonMap: { [key: string]: string } = {
            'request-quote': 'Request a Quote',
            'general-inquiry': 'General Inquiry',
            'printing-consultation': 'Printing Consultation',
            'order-status': 'Order Status Update',
            'custom-design': 'Custom Design Request',
            'feedback': 'Feedback or Suggestion',
            'partnership': 'Partnership or Collaboration',
            'issue': 'Issue with Previous Order',
            'meeting': 'Schedule a Meeting',
            'other': 'Other'
        };

        const reasonText = reasonMap[reason] || reason;

        // Send confirmation email to customer
        const customerEmail = await resend.emails.send({
            from: 'Triangle Print Spot <noreply@triangleprintspot.co.za>', // Replace with your verified domain
            to: email,
            subject: 'We\'ve Received Your Message - Triangle Print Spot',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #dc2626; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
                        .content { background-color: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; }
                        .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; font-size: 14px; color: #6b7280; }
                        h1 { margin: 0; font-size: 28px; }
                        .info-box { background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 20px 0; }
                        .info-row { margin: 10px 0; }
                        .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Thank You for Contacting Us!</h1>
                        </div>
                        <div class="content">
                            <p>Dear ${name},</p>
                            <p>We've received your message and our team will get back to you as soon as possible. We typically respond within 24 hours during business days.</p>
                            
                            <div class="info-box">
                                <h3 style="margin-top: 0;">Your Submission Details:</h3>
                                <div class="info-row">
                                    <div class="label">Reason for Contact</div>
                                    <div>${reasonText}</div>
                                </div>
                                <div class="info-row">
                                    <div class="label">Your Message</div>
                                    <div>${message}</div>
                                </div>
                            </div>

                            <p>If you have any urgent questions, feel free to reach us at:</p>
                            <ul>
                                <li><strong>Phone:</strong> (016) 981 6758</li>
                                <li><strong>Email:</strong> printspotjh@gmail.com</li>
                                <li><strong>WhatsApp:</strong> +27 72 164 3994</li>
                            </ul>

                            <p>Best regards,<br><strong>Triangle Print Spot Team</strong></p>
                        </div>
                        <div class="footer">
                            <p>Shop 4, Executive Building, C/O Van Rijn Street & FW Beyers Street, Vanderbijlpark, 1900</p>
                            <p>Monday - Friday: 8:30 - 16:00</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // Send notification email to business owner
        const ownerEmail = await resend.emails.send({
            from: 'Triangle Print Spot <website@triangleprintspot.co.za>', // Replace with your verified domain
            to: 'printspotjh@gmail.com', // Business owner email
            subject: `New Contact Form Submission: ${reasonText}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #1f2937; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
                        .content { background-color: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; }
                        .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; font-size: 14px; color: #6b7280; }
                        h1 { margin: 0; font-size: 28px; }
                        .alert { background-color: #dc2626; color: white; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: center; font-weight: 600; }
                        .info-box { background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 15px 0; }
                        .info-row { margin: 10px 0; }
                        .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; }
                        .value { margin-top: 5px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🔔 New Contact Form Submission</h1>
                        </div>
                        <div class="content">
                            <div class="alert">
                                New inquiry received - Action Required
                            </div>

                            <div class="info-box">
                                <h3 style="margin-top: 0;">Contact Information:</h3>
                                <div class="info-row">
                                    <div class="label">Name</div>
                                    <div class="value">${name}</div>
                                </div>
                                <div class="info-row">
                                    <div class="label">Email</div>
                                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                                </div>
                                <div class="info-row">
                                    <div class="label">Phone</div>
                                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                                </div>
                            </div>

                            <div class="info-box">
                                <h3 style="margin-top: 0;">Inquiry Details:</h3>
                                <div class="info-row">
                                    <div class="label">Reason for Contact</div>
                                    <div class="value">${reasonText}</div>
                                </div>
                                <div class="info-row">
                                    <div class="label">Message</div>
                                    <div class="value">${message}</div>
                                </div>
                            </div>

                            <p><strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service.</p>
                        </div>
                        <div class="footer">
                            <p>This email was automatically generated from your website contact form.</p>
                            <p>Received on ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully',
            customerEmailId: customerEmail.data?.id,
            ownerEmailId: ownerEmail.data?.id
        });

    } catch (error) {
        console.error('Error sending emails:', error);
        return NextResponse.json(
            { error: 'Failed to send emails' },
            { status: 500 }
        );
    }
}
