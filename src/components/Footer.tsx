import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-base pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <BookOpen size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary">EduFlow</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Empowering learners worldwide with high-quality courses from expert instructors. Start your learning journey today.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-sm text-text-secondary hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link to="/categories" className="text-sm text-text-secondary hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/instructors" className="text-sm text-text-secondary hover:text-primary transition-colors">Instructors</Link></li>
              <li><Link to="/about" className="text-sm text-text-secondary hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/help" className="text-sm text-text-secondary hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/terms" className="text-sm text-text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-text-secondary hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-sm text-text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-6">Newsletter</h4>
            <p className="text-sm text-text-secondary mb-4">Subscribe to get the latest updates and offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-2 bg-bg-main border border-border-base rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-base text-center">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} EduFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
