import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { content } = useContent();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-accent font-bold" : "text-white hover:text-accent transition-colors";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white p-2 rounded-full">
                <Heart className="w-6 h-6 text-primary fill-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Donate El Paso</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/donate" className={isActive('/donate')}>Donate</Link>
              <Link to="/events" className={isActive('/events')}>Events</Link>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
              <Link to="/admin" className="bg-white/10 px-4 py-1 rounded-full text-xs hover:bg-white/20">Admin Login</Link>
              <Link to="/donate" className="bg-accent hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md">
                Donate Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary/50">
            <div className="flex flex-col p-4 gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white">Home</Link>
              <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="text-white">Donate</Link>
              <Link to="/events" onClick={() => setIsMenuOpen(false)} className="text-white">Events</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white">About Us</Link>
              <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-white/50 text-sm">Admin</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Contact */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <p>{content.general.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href={`tel:${content.general.phone.replace(/\./g, '')}`} className="hover:text-white">{content.general.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href={`mailto:${content.general.email}`} className="hover:text-white">{content.general.email}</a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/donate" className="hover:text-accent transition-colors">Find a Bin</Link></li>
                <li><Link to="/donate" className="hover:text-accent transition-colors">Request Pickup</Link></li>
                <li><Link to="/events" className="hover:text-accent transition-colors">Upcoming Events</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">Our Mission</Link></li>
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Connect</h3>
              <div className="flex gap-4 mb-8">
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-accent hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-accent hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-accent hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
              
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <form className="flex gap-2">
                <input type="email" placeholder="Your email" className="bg-slate-800 border-none rounded px-4 py-2 w-full text-white focus:ring-2 focus:ring-accent" />
                <button type="button" className="bg-accent text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">Join</button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Donate El Paso. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;