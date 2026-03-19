import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SplitLayout } from '../components/SplitLayout';
import { studioInfo } from '../data/site-data';

export default function Approach() {
  const leftContent = (
    <div className="flex flex-col h-full">
      <Link to="/" className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity mb-12 inline-block">
        ← Back to Studio
      </Link>
      
      <div className="flex flex-col gap-16 md:gap-24 my-auto">
        {studioInfo.method.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col gap-4 max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              <span className="font-mono text-ink-faint text-sm mr-4">0{idx + 1}</span>
              {item.title.en} <span className="text-ink-faint ml-2">{item.title.zh}</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-light">
              {item.content.en}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-ink-muted font-light">
              {item.content.zh}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const rightContent = (
    <div className="absolute inset-0 w-full h-full">
      <img 
        src={studioInfo.vibeImage} 
        alt="Studio Vibe" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  return (
    <PageTransition>
      <SplitLayout left={leftContent} right={rightContent} />
    </PageTransition>
  );
}
