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
    <section className="lg:pl-80 p-6 lg:p-12 min-h-screen py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12">
          I&apos;m always open to discussing new projects, opportunities, and innovative ideas.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-foreground">
                    <Mail className="h-6 w-6 text-background" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:brianodhiambo530@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    brianodhiambo530@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-foreground">
                    <Phone className="h-6 w-6 text-background" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                  <a href="tel:+254713069866" className="text-muted-foreground hover:text-foreground transition">
                    +254 713 069 866
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-foreground">
                    <MapPin className="h-6 w-6 text-background" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BrianOdhiambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-card border border-border hover:border-foreground hover:bg-foreground hover:text-background transition"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/brian-odhiambo-6b036b181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-card border border-border hover:border-foreground hover:bg-foreground hover:text-background transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:brianodhiambo530@gmail.com"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-card border border-border hover:border-foreground hover:bg-foreground hover:text-background transition"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg p-8 border border-border">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition"
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
