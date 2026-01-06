'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
                });
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    reason: '',
                    message: ''
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {submitStatus && (
                <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                    <p className="font-mono text-sm md:text-base">{submitStatus.message}</p>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono font-semibold text-sm md:text-base">
                    Name <span className="text-red">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                    placeholder="Your name"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono font-semibold text-sm md:text-base">
                    Email <span className="text-red">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                    placeholder="your.email@example.com"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-mono font-semibold text-sm md:text-base">
                    Phone Number <span className="text-red">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                    placeholder="+27 12 345 6789"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="font-mono font-semibold text-sm md:text-base">
                    Reason for Contact <span className="text-red">*</span>
                </label>
                <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="px-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent bg-white cursor-pointer"
                >
                    <option value="">Select a reason</option>
                    <option value="request-quote">Request a Quote</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="printing-consultation">Printing Consultation</option>
                    <option value="order-status">Order Status Update</option>
                    <option value="custom-design">Custom Design Request</option>
                    <option value="feedback">Feedback or Suggestion</option>
                    <option value="partnership">Partnership or Collaboration</option>
                    <option value="issue">Issue with Previous Order</option>
                    <option value="meeting">Schedule a Meeting</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono font-semibold text-sm md:text-base">
                    Message <span className="text-red">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent resize-none"
                    placeholder="Tell us more about what you need..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white font-mono font-semibold text-sm md:text-base px-6 py-3 rounded-lg shadow-lg shadow-black/20 hover:bg-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
