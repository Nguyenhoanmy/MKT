import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-bg-main p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-border-base shadow-xl shadow-primary/5 p-8 md:p-12 space-y-8">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-text-primary">EduFlow</span>
          </Link>
          <h1 className="text-2xl font-bold text-text-primary">Create an account</h1>
          <p className="text-text-secondary">Join thousands of students learning today</p>
        </div>

        <div className="space-y-4">
          <button className="w-full py-3 px-4 bg-white border border-border-base rounded-xl font-bold text-text-primary hover:bg-bg-main transition-all flex items-center justify-center gap-3">
            <Chrome size={20} className="text-primary" /> Sign up with Google
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border-base"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-text-secondary font-bold">Or sign up with email</span></div>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-primary">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full pl-10 pr-4 py-3 bg-bg-main border border-border-base rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-primary">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full pl-10 pr-4 py-3 bg-bg-main border border-border-base rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-primary">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-3 bg-bg-main border border-border-base rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
          <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            Create Account <ArrowRight size={20} />
          </button>
        </form>

        <p className="text-center text-sm text-text-secondary">
          Already have an account? <Link to="/auth/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
