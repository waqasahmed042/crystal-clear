import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import crystalViewLogo from '@/assets/crystalview-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={crystalViewLogo} 
                alt="CrystalView Cleaning Services" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-display font-bold text-lg text-secondary-foreground">CrystalView</h3>
                <p className="text-sm text-secondary-foreground/80 -mt-1">Cleaning Services</p>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Professional window cleaning services that make your windows sparkle. 
              Crystal clear results guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              {[
                'Residential Window Cleaning',
                'Commercial Window Cleaning',
                'High-Rise Window Cleaning',
                'Screen Cleaning',
                'Pressure Washing',
                'Gutter Cleaning',
              ].map((service) => (
                <span
                  key={service}
                  className="text-secondary-foreground/80 text-sm"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  123 Crystal Lane<br />
                  Clear City, CC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  (555) 123-CLEAN
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@crystalview.com" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  info@crystalview.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-4PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} CrystalView Cleaning Services. All rights reserved. | 
            <Link to="/privacy" className="hover:text-secondary-foreground transition-colors ml-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;