'use client';

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = 'Portfolio Inquiry';
    const body = `Name: ${formData.name}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:brianodhiambo530@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="lg:pl-80 px-4 lg:p-12 min-h-screen py-20 pt-24 lg:pt-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-12">
          I&apos;m always open to discussing new projects, opportunities, and innovative ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Contact Information</h3>

            <div className="space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary">
                    <Mail className="h-5 md:h-6 w-5 md:w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="text-base md:text-lg font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:brianodhiambo530@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition text-sm md:text-base break-all"
                  >
                    brianodhiambo530@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary">
                    <Phone className="h-5 md:h-6 w-5 md:w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground">Phone</h4>
                  <a href="tel:+254713069866" className="text-muted-foreground hover:text-foreground transition text-sm md:text-base">
                    +254 713 069 866
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary">
                    <MapPin className="h-5 md:h-6 w-5 md:w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm md:text-base">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 md:pt-8 border-t border-border">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BrianOdhiambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary text-primary-foreground border border-primary hover:shadow-md transition"
                  aria-label="GitHub"
                >
                  <Github size={18} className="md:w-5 md:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brian-odhiambo-6b036b181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary text-primary-foreground border border-primary hover:shadow-md transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="md:w-5 md:h-5" />
                </a>
                <a
                  href="mailto:brianodhiambo530@gmail.com"
                  className="inline-flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary text-primary-foreground border border-primary hover:shadow-md transition"
                  aria-label="Email"
                >
                  <Mail size={18} className="md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-card rounded-lg p-4 md:p-8 border border-border">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm md:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm md:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none text-sm md:text-base"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2 md:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-md hover:opacity-90 transition text-sm md:text-base"
              >
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
