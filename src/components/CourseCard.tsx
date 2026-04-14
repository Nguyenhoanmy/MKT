import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
  key?: string;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-border-base overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all group"
    >
      <Link to={`/courses/${course.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-bold uppercase tracking-wider text-primary">
            {course.category}
          </div>
        </div>
        
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-1 text-warning">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-text-primary">{course.rating}</span>
            <span className="text-xs text-text-secondary">({course.studentsCount} students)</span>
          </div>
          
          <h3 className="text-lg font-bold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-sm text-text-secondary">
            by <span className="font-medium text-text-primary">{course.instructor}</span>
          </p>
          
          <div className="pt-4 flex items-center justify-between border-t border-border-base">
            <span className="text-xl font-bold text-text-primary">${course.price}</span>
            <button className="text-sm font-bold text-primary hover:underline">
              Enroll Now
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
