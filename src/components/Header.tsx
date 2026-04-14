import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, User, ShoppingCart, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-base bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <BookOpen size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">EduFlow</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/courses" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">Courses</Link>
            <Link to="/categories" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">Categories</Link>
            <Link to="/about" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">About</Link>
          </nav>
        </div>

        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search for courses..." 
              className="w-full pl-10 pr-4 py-2 bg-bg-main border border-border-base rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-text-secondary hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
          <div className="h-6 w-[1px] bg-border-base mx-2 hidden sm:block"></div>
          <Link to="/auth/login" className="hidden sm:block text-sm font-medium text-text-secondary hover:text-primary transition-colors">Log in</Link>
          <Link 
            to="/auth/register" 
            className="hidden sm:block px-5 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-sm shadow-primary/20"
          >
            Sign up
          </Link>
          <button className="md:hidden p-2 text-text-secondary">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
