import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SplitLayout } from '../components/SplitLayout';
import { collab } from '../data/site-data';

export default function Collab() {
  const leftContent = (
    <div className="flex flex-col h-full">
      <Link to="/" className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity mb-12 inline-block">
        ← Back to Studio
      </Link>
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">Collab°</h1>
        <p className="text-ink-muted font-mono text-sm uppercase tracking-widest">Co-creation & Curation</p>
      </div>

      <div className="flex-grow">
        <h2 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-8">Pending Exhibitions</h2>
        <div className="flex flex-col gap-12">
          {collab.pendingExhibitions.map((exhibition, idx) => (
            <motion.div 
              key={exhibition.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border-t border-line pt-6"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium tracking-tight group-hover:italic transition-all">{exhibition.title}</h3>
                <span className="font-mono text-xs text-ink-faint">{exhibition.date}</span>
              </div>
              <p className="text-sm text-ink-muted mb-2 font-mono uppercase tracking-wider">{exhibition.location}</p>
              <p className="text-base leading-relaxed font-light">{exhibition.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const rightContent = (
    <div className="flex flex-col gap-24">
      <h2 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-4 md:hidden">Posted Projects</h2>
      
      {collab.postedProjects.map((project, idx) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="group"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-line">
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
            <h3 className="text-2xl font-medium tracking-tight group-hover:italic transition-all">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
              with {project.collaborator}
            </span>
          </div>
          <p className="mt-4 text-base leading-relaxed font-light text-ink-muted">
            {project.description}
          </p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <PageTransition>
      <SplitLayout left={leftContent} right={rightContent} />
    </PageTransition>
  );
}
