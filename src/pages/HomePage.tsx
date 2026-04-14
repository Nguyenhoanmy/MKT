import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2, Star, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_COURSES, MOCK_CATEGORIES } from '../mockData';
import CourseCard from '../components/CourseCard';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
              <Award size={16} />
              <span>#1 E-Learning Platform in 2024</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]">
              Master New Skills <br />
              <span className="text-primary">Anytime, Anywhere</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
              Access over 5,000+ high-quality courses from world-class instructors. Start your journey to professional success today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                Explore Courses <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-white text-text-primary border border-border-base rounded-full font-bold hover:bg-bg-main transition-all flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="User"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-bg-main flex items-center justify-center text-[10px] font-bold">
                  +2k
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-warning">
                  <Star size={14} fill="currentColor" />
                  <span className="font-bold text-text-primary">4.9/5</span>
                </div>
                <p className="text-text-secondary">from 10k+ reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Students learning"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="absolute top-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-border-base animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center text-success">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Course Completed</p>
                  <p className="text-sm font-bold">UI/UX Design</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-white rounded-3xl border border-border-base shadow-sm">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold text-primary">10k+</h3>
            <p className="text-text-secondary font-medium">Active Students</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold text-primary">500+</h3>
            <p className="text-text-secondary font-medium">Expert Tutors</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold text-primary">2k+</h3>
            <p className="text-text-secondary font-medium">Total Courses</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold text-primary">95%</h3>
            <p className="text-text-secondary font-medium">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Featured Courses</h2>
            <p className="text-text-secondary max-w-md">Hand-picked courses by our experts to help you get started with the most in-demand skills.</p>
          </div>
          <Link to="/courses" className="text-primary font-bold flex items-center gap-2 hover:underline">
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-bg-main py-24">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Top Categories</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Explore our wide range of categories and find the perfect course for your career goals.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MOCK_CATEGORIES.map(category => (
              <Link 
                key={category.id} 
                to={`/courses?category=${category.name}`}
                className="bg-white p-8 rounded-2xl border border-border-base hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all text-center group"
              >
                <div className="w-16 h-16 bg-bg-main rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Award size={32} />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{category.name}</h4>
                <p className="text-sm text-text-secondary">{category.count} Courses</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="relative bg-primary rounded-[2rem] overflow-hidden p-12 md:p-20 text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Start Your Learning Journey?</h2>
            <p className="text-primary-foreground/80 text-lg">Join thousands of students and start learning from the best instructors today. No credit card required.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/auth/register" className="px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-bg-main transition-all shadow-xl">
                Get Started for Free
              </Link>
              <Link to="/instructors" className="px-10 py-4 bg-primary-foreground/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all">
                Become an Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
