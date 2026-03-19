import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SplitLayout } from '../components/SplitLayout';
import { studioInfo, members, projects } from '../data/site-data';

export default function Home() {
  const leftContent = (
    <div className="flex flex-col h-full justify-between">
      {/* Top: Logo */}
      <div className="mb-12">
        <Link to="/" className="text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          {studioInfo.logoText}
        </Link>
      </div>

      {/* Middle: Slogan and Description */}
      <div className="flex-grow flex flex-col justify-center max-w-md">
        <Link to="/approach" className="group block mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-2 group-hover:italic transition-all">
            {studioInfo.slogan.en}
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-ink-muted group-hover:text-ink transition-colors">
            {studioInfo.slogan.zh}
          </h2>
        </Link>
        <p className="text-sm md:text-base leading-relaxed text-ink-muted">
          {studioInfo.description}
        </p>
      </div>

      {/* Bottom: Members */}
      <div className="mt-12 pt-8 border-t border-line">
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-ink-faint font-mono">Team</span>
          <div className="flex flex-wrap gap-6">
            {members.map(member => (
              <Link 
                key={member.id} 
                to={`/member/${member.id}`}
                className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{member.name}</span>
                  <span className="text-xs text-ink-muted font-mono">{member.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const rightContent = (
    <div className="flex flex-col gap-24">
      {projects.map((project, idx) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Link to={`/work/${project.id}`} className="group block">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-line">
              <img 
                src={project.coverImg1} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                referrerPolicy="no-referrer"
              />
              <img 
                src={project.coverImg2} 
                alt={`${project.title} alternate`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Meta Info */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-tight group-hover:italic transition-all">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-ink-muted">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="uppercase tracking-wider border border-line px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {Object.entries(project.metaInfo).map(([key, value]) => (
                  <span key={key} className="flex gap-1">
                    <span className="text-ink-faint">{key}:</span>
                    <span>{value}</span>
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      
      {/* Collab Link at the bottom of projects */}
      <div className="pt-12 border-t border-line mt-12">
        <Link to="/collab" className="group flex items-center justify-between text-xl hover:italic transition-all">
          <span>Explore Collaborations & Exhibitions</span>
          <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <SplitLayout left={leftContent} right={rightContent} />
    </PageTransition>
  );
}
