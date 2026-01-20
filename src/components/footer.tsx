import Link from "next/link";
import { Facebook, MapPin, Clock, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-lg font-serif font-bold text-primary mb-3">
              JAM Cafe
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Handcrafted comfort, everyday. Specialty coffee and pastries made
              with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="space-y-2 text-sm flex flex-col">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} /> Hours
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
              <p>Sat: 8:00 AM - 7:00 PM</p>
              <p>Sun: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">
              Connect
            </h3>
            <div className="space-y-3 flex flex-col">
              <a
                href="https://www.facebook.com/ilovejamskitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm"
              >
                <Facebook size={18} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/jamcafeph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm"
              >
                <Instagram size={18} /> Instagram
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>
                  Plaza De Mabini, Purok 6, Brgy Mabini, Lipa City, Philippines
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2026 JAM Cafe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
