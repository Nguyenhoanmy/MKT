import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, Clock, Globe, Award, CheckCircle2, PlayCircle, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import { MOCK_COURSES } from '../mockData';
import { motion, AnimatePresence } from 'motion/react';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = MOCK_COURSES.find(c => c.slug === slug);
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  if (!course) return <div className="container mx-auto px-4 py-20 text-center">Course not found</div>;

  return (
    <div className="pb-24">
      {/* Course Header */}
      <section className="bg-text-primary text-white py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider">
              <Link to="/courses" className="hover:underline">Courses</Link>
              <span>/</span>
              <span>{course.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{course.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-warning">
                  <Star size={18} fill="currentColor" />
                  <span className="font-bold text-white">{course.rating}</span>
                </div>
                <span className="text-sm text-white/60">(1,250 ratings)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-white/60" />
                <span className="text-sm font-medium">{course.studentsCount} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-white/60" />
                <span className="text-sm font-medium">Last updated 04/2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-white/60" />
                <span className="text-sm font-medium">English</span>
              </div>
            </div>
            
            <p className="text-sm">Created by <Link to="#" className="text-secondary font-bold hover:underline">{course.instructor}</Link></p>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 bg-white rounded-2xl border border-border-base shadow-2xl overflow-hidden text-text-primary">
            <div className="relative aspect-video">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                <PlayCircle size={64} className="text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">${course.price}</span>
                <span className="text-lg text-text-secondary line-through mb-1">$99.99</span>
                <span className="text-sm text-error font-bold mb-1">50% OFF</span>
              </div>
              
              <div className="space-y-3">
                <Link 
                  to={`/learn/${course.id}`}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Enroll Now
                </Link>
                <button className="w-full py-4 bg-white text-text-primary border border-border-base rounded-xl font-bold hover:bg-bg-main transition-all">
                  Add to Cart
                </button>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-border-base">
                <p className="text-sm font-bold">This course includes:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-text-secondary">
                    <PlayCircle size={16} /> 15 hours on-demand video
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary">
                    <Clock size={16} /> Full lifetime access
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary">
                    <Award size={16} /> Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          {/* What you'll learn */}
          <div className="p-8 bg-white rounded-2xl border border-border-base space-y-6">
            <h2 className="text-2xl font-bold">What you'll learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Build real-world projects with React",
                "Master React Hooks and Context API",
                "Understand modern state management",
                "Learn to fetch and handle API data",
                "Optimize React performance",
                "Deploy your apps to production"
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-success shrink-0" size={20} />
                  <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Course Curriculum</h2>
              <span className="text-sm text-text-secondary font-medium">12 sections • 48 lectures • 15h 20m total length</span>
            </div>
            
            <div className="space-y-4">
              {course.lessons.map((lesson, i) => (
                <div key={lesson.id} className="border border-border-base rounded-xl overflow-hidden bg-white">
                  <button 
                    onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
                    className="w-full p-5 flex items-center justify-between hover:bg-bg-main transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-bg-main rounded-lg flex items-center justify-center text-text-secondary text-sm font-bold">
                        {i + 1}
                      </div>
                      <span className="font-bold text-text-primary">{lesson.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-text-secondary">{lesson.duration}</span>
                      {lesson.isLocked ? <Lock size={16} className="text-text-secondary" /> : <PlayCircle size={16} className="text-primary" />}
                      {expandedLesson === lesson.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedLesson === lesson.id && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden border-t border-border-base"
                      >
                        <div className="p-5 text-sm text-text-secondary leading-relaxed">
                          In this lesson, we will cover the core concepts of {lesson.title}. 
                          You will learn how to implement these features in a real-world application.
                          {!lesson.isLocked && (
                            <Link to={`/learn/${course.id}`} className="mt-4 inline-flex items-center gap-2 text-primary font-bold hover:underline">
                              Preview Lesson <PlayCircle size={16} />
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Instructor</h2>
            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-border-base">
              <img src="https://i.pravatar.cc/150?u=instructor" alt={course.instructor} className="w-24 h-24 rounded-2xl object-cover" />
              <div className="space-y-3">
                <div>
                  <h4 className="text-xl font-bold text-primary">{course.instructor}</h4>
                  <p className="text-sm text-text-secondary">Senior Software Engineer & Educator</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Star size={16} className="text-warning" fill="currentColor" />
                    <span className="font-bold">4.9 Instructor Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-text-secondary" />
                    <span className="font-bold">150,000 Students</span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  John is a passionate educator with over 10 years of experience in software development. 
                  He has helped thousands of students master modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
