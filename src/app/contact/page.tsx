"use client";

import React from "react";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { MapPin, Clock, Phone, Mail, Facebook } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-secondary/10 border-b border-border/40 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Visit Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Located in the heart of Lipa City, JAM Cafe welcomes you with open
              doors and a warm cup of coffee.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        Address
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Plaza De Mabini, Purok 6, Brgy Mabini, Lipa City,
                        Philippines
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        Hours
                      </h3>
                      <div className="text-muted-foreground space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Mon - Fri:</span> 7:00
                          AM - 6:00 PM
                        </p>
                        <p>
                          <span className="font-medium">Saturday:</span> 8:00 AM
                          - 7:00 PM
                        </p>
                        <p>
                          <span className="font-medium">Sunday:</span> 8:00 AM -
                          6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">(043) 741 1456</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        jamcafeph@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Facebook className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-2">
                        Follow Us
                      </h3>
                      <a
                        href="https://www.facebook.com/ilovejamskitchen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors font-medium text-sm"
                      >
                        @ilovejamskitchen on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                      placeholder="Tell us what you're thinking..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Find Us on the Map
              </h2>
              <div className="w-full h-96 rounded-lg overflow-hidden border border-border/40 bg-secondary/10 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.2419566881695!2d121.14935837490995!3d13.884475686521393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1347aedda4dd%3A0x3b8b1902cbed26a9!2sJAM%20Cafe!5e0!3m2!1sen!2sph!4v1768875807480!5m2!1sen!2sph"
                  className="border-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-accent/5 rounded-lg p-8 border border-border/40">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Special Requests & Catering
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Planning an event? Need custom cakes or large jam orders? We
                offer catering and special order services. Please reach out
                through our contact form or send us a message on Facebook to
                discuss your requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also accommodate dietary restrictions - just let us know your
                needs when ordering!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
