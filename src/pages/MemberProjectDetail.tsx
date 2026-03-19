import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, SplitSquareHorizontal } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { members } from '../data/site-data';

export default function MemberProjectDetail() {
  const { memberId, projectId } = useParams();
  const member = members.find(m => m.id === memberId);
  const project = member?.personalProjects.find(p => p.id === projectId);
  
  const [viewMode, setViewMode] = useState<'split' | 'grid'>('split');

  if (!member || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-light">Project not found</h1>
        <Link to="/" className="ml-4 underline font-mono text-sm">Return home</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen w-full flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-line px-6 md:px-12 py-4 flex justify-between items-center">
          <Link to={`/member/${memberId}`} className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity">
            ← Back to {member.name}
          </Link>
          
          <h1 className="text-xl font-light tracking-tight absolute left-1/2 -translate-x-1/2 hidden md:block">
            {project.title}
          </h1>

          <div className="flex bg-line rounded-full p-1">
            <button
              onClick={() => setViewMode('split')}
              className={`p-2 rounded-full transition-colors ${viewMode === 'split' ? 'bg-surface shadow-sm' : 'hover:bg-line'}`}
              aria-label="Split View"
            >
              <SplitSquareHorizontal size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-surface shadow-sm' : 'hover:bg-line'}`}
              aria-label="Grid View"
            >
              <LayoutGrid size={18} strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {viewMode === 'split' ? (
              <motion.div
                key="split"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                {project.contentBlocks.map((block, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row min-h-[70vh] border-b border-line last:border-b-0">
                    {/* Text Side */}
                    <div className="w-full md:w-1/3 lg:w-1/4 p-6 md:p-12 lg:p-16 flex flex-col justify-center border-r border-line bg-surface">
                      <div className="max-w-sm sticky top-32">
                        <p className="text-base md:text-lg leading-relaxed mb-6 font-light">
                          {block.paragraph.en}
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-ink-muted">
                          {block.paragraph.zh}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image Side */}
                    <div className="w-full md:w-2/3 lg:w-3/4 bg-line">
                      <img 
                        src={block.image} 
                        alt={`${project.title} detail ${idx + 1}`}
                        className="w-full h-full object-cover min-h-[50vh]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 md:p-12 lg:p-16"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Include cover images in grid view */}
                  <div className="aspect-[3/4] overflow-hidden bg-line">
                    <img src={project.coverImg1} alt="Cover 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden bg-line">
                    <img src={project.coverImg2} alt="Cover 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  {project.contentBlocks.map((block, idx) => (
                    <div key={idx} className="aspect-[3/4] overflow-hidden bg-line">
                      <img 
                        src={block.image} 
                        alt={`Grid detail ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </PageTransition>
  );
}
