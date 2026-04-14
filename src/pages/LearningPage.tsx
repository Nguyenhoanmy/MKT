import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, Lock, CheckCircle2, ChevronLeft, Menu, MessageSquare, FileText, Settings, Award } from 'lucide-react';
import { MOCK_COURSES } from '../mockData';
import { cn } from '../lib/utils';

export default function LearningPage() {
  const { courseId } = useParams();
  const course = MOCK_COURSES.find(c => c.id === courseId);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!course) return <div className="p-20 text-center">Course not found</div>;

  const currentLesson = course.lessons[currentLessonIndex] || course.lessons[0];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-text-primary">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Video Player Section */}
        <div className="flex-1 bg-black flex items-center justify-center relative group">
          <video 
            src={currentLesson.videoUrl} 
            controls 
            className="max-h-full max-w-full aspect-video"
            poster={course.thumbnail}
          />
          
          {/* Top Bar Overlay */}
          <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
            <Link to={`/courses/${course.slug}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ChevronLeft size={20} />
              <span className="font-medium">Back to course</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 text-white/80 hover:text-white transition-colors"><Settings size={20} /></button>
            </div>
          </div>
        </div>

        {/* Content Info Section */}
        <div className="bg-white p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start justify-between gap-8">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-text-primary">{currentLesson.title}</h1>
                <p className="text-sm text-text-secondary">Lesson {currentLessonIndex + 1} of {course.lessons.length}</p>
              </div>
              <button className="px-6 py-3 bg-success text-white rounded-xl font-bold flex items-center gap-2 hover:bg-success/90 transition-all">
                <CheckCircle2 size={20} /> Mark as Complete
              </button>
            </div>

            <div className="flex items-center gap-8 border-b border-border-base">
              <button className="pb-4 border-b-2 border-primary text-primary font-bold text-sm">Overview</button>
              <button className="pb-4 text-text-secondary font-medium text-sm hover:text-text-primary transition-colors">Q&A</button>
              <button className="pb-4 text-text-secondary font-medium text-sm hover:text-text-primary transition-colors">Notes</button>
              <button className="pb-4 text-text-secondary font-medium text-sm hover:text-text-primary transition-colors">Resources</button>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold">About this lesson</h3>
              <p className="text-text-secondary leading-relaxed">
                In this lesson, we dive deep into the core concepts of {currentLesson.title}. 
                We'll explore why this is important for your development journey and how to 
                apply these principles in real-world scenarios.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-bg-main rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Discussion</p>
                    <p className="text-xs text-text-secondary">12 active threads</p>
                  </div>
                </div>
                <div className="p-4 bg-bg-main rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Resources</p>
                    <p className="text-xs text-text-secondary">3 downloadable files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Lesson List */}
      <div className={cn(
        "bg-white border-l border-border-base transition-all duration-300 flex flex-col",
        isSidebarOpen ? "w-96" : "w-0 overflow-hidden border-none"
      )}>
        <div className="p-6 border-b border-border-base flex items-center justify-between">
          <h3 className="font-bold text-text-primary">Course Content</h3>
          <button onClick={() => setIsSidebarOpen(false)} className="p-1 text-text-secondary hover:text-text-primary">
            <Menu size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {course.lessons.map((lesson, index) => (
            <button 
              key={lesson.id}
              onClick={() => !lesson.isLocked && setCurrentLessonIndex(index)}
              className={cn(
                "w-full p-5 flex items-start gap-4 border-b border-border-base transition-colors text-left",
                currentLessonIndex === index ? "bg-primary/5" : "hover:bg-bg-main",
                lesson.isLocked && "opacity-60 cursor-not-allowed"
              )}
            >
              <div className="shrink-0 mt-1">
                {lesson.isLocked ? (
                  <Lock size={18} className="text-text-secondary" />
                ) : (
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    currentLessonIndex === index ? "border-primary bg-primary text-white" : "border-border-base"
                  )}>
                    {currentLessonIndex === index && <PlayCircle size={12} fill="currentColor" />}
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className={cn(
                  "text-sm font-bold leading-tight",
                  currentLessonIndex === index ? "text-primary" : "text-text-primary"
                )}>
                  {index + 1}. {lesson.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <PlayCircle size={12} />
                  <span>{lesson.duration}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="p-6 bg-bg-main border-t border-border-base">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Your Progress</span>
            <span className="text-xs font-bold text-primary">25%</span>
          </div>
          <div className="w-full h-2 bg-border-base rounded-full overflow-hidden">
            <div className="w-1/4 h-full bg-primary" />
          </div>
        </div>
      </div>

      {/* Toggle Sidebar Button (when closed) */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="absolute right-6 bottom-6 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <Menu size={24} />
        </button>
      )}
    </div>
  );
}
