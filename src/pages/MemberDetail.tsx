import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SplitLayout } from '../components/SplitLayout';
import { members } from '../data/site-data';

export default function MemberDetail() {
  const { id } = useParams();
  const member = members.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-light">Member not found</h1>
        <Link to="/" className="ml-4 underline font-mono text-sm">Return home</Link>
      </div>
    );
  }

  const leftContent = (
    <div className="flex flex-col h-full">
      <Link to="/" className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity mb-8 inline-block">
        ← Back to Studio
      </Link>
      
      <div className="mb-8">
        <img 
          src={member.avatar} 
          alt={member.name} 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover grayscale mb-6"
          referrerPolicy="no-referrer"
        />
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-1">{member.name}</h1>
        <p className="text-sm font-mono text-ink-muted uppercase tracking-widest">{member.title}</p>
      </div>

      <div className="mb-12">
        <p className="text-base leading-relaxed text-ink-muted">
          {member.bio}
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-auto">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-4">Experience</h3>
          <ul className="flex flex-col gap-2">
            {member.experience.map((exp, idx) => (
              <li key={idx} className="text-sm text-ink-muted">{exp}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xs uppercase tracking-widest text-ink-faint font-mono mb-4">Education</h3>
          <ul className="flex flex-col gap-2">
            {member.education.map((edu, idx) => (
              <li key={idx} className="text-sm text-ink-muted">{edu}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const rightContent = (
    <div className="flex flex-col gap-24">
      <div className="mb-4">
        <h2 className="text-2xl font-light tracking-tight italic">Selected Works</h2>
      </div>
      
      {member.personalProjects.map((project, idx) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Link to={`/member/${member.id}/project/${project.id}`} className="group block">
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
      
      {member.personalProjects.length === 0 && (
        <div className="text-ink-faint italic">No personal projects listed yet.</div>
      )}
    </div>
  );

  return (
    <PageTransition>
      <SplitLayout left={leftContent} right={rightContent} />
    </PageTransition>
  );
}
