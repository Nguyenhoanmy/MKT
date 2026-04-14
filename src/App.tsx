/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import LearningPage from './pages/LearningPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isLearningPage = location.pathname.startsWith('/learn');
  const isAuthPage = location.pathname.startsWith('/auth');

  return (
    <div className="flex flex-col min-h-screen">
      {!isLearningPage && <Header />}
      <main className="flex-1">
        {children}
      </main>
      {!isLearningPage && !isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/learn/:courseId" element={<LearningPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            {/* Fallback for courses list - reusing homepage featured for now */}
            <Route path="/courses" element={<HomePage />} /> 
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}
