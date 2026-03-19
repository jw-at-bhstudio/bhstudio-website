/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import Home from './pages/Home';
import WorkDetail from './pages/WorkDetail';
import MemberDetail from './pages/MemberDetail';
import MemberProjectDetail from './pages/MemberProjectDetail';
import Approach from './pages/Approach';
import Collab from './pages/Collab';
import { Footer } from './components/Footer';
import { ThemeControlPanel } from './components/ThemeControlPanel';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - React 19 types issue with react-router-dom v7 */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/member/:id" element={<MemberDetail />} />
        <Route path="/member/:memberId/project/:projectId" element={<MemberProjectDetail />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/collab" element={<Collab />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
      <ThemeControlPanel />
    </BrowserRouter>
  );
}
